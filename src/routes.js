import { log } from "util";
//#######################
//Routes
//#######################
import { routes as MaterialRoute } from "./routes/materials_route";
import { routes as ExamPrepRoute } from "./routes/examPrep_route";
import { routes as ExamRoute } from "./routes/exam_route_function";
//#######################
//DATA
//#######################
const students = require("./userdata/students.js");
//#######################
//Actions
//#######################
import Introduction from "./actions/introduction";
import UnknownUser from "./actions/unknownuser";
import { BotonicInputTester } from "@botonic/react";
import { inTime, timerInterval, timer } from "./actions/modules/timer";
import ToLate from "./actions/ExamActions/toLate";
import { exit } from "process";
//#######################
//VARIABLES
//#######################
let timerTrigger = true;
let cheatAttempt = false;
//#######################
//Eventlistener
//#######################
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    cheatAttempt = true;
  }
});

//#######################
//MAIN ROUTE
//#######################

export function routes({ input, session }) {
  session.students = students.students;

  if (session.activeStudent === undefined) {
    console.log("you are in the IntroductionRoute");
    //Checking wheter the matriculation number of the student is stored in the students object.
    if (session.students.hasOwnProperty(input.data.toLowerCase())) {
      return [
        {
          text: /.*/,
          action: Introduction,
        },
      ];
    }

    if (session.students.hasOwnProperty(input.data) === false) {
      return [
        {
          text: /.*/,
          action: UnknownUser,
        },
      ];
    }
  }

  if (
    //Making sure that a student which has already completed the exam always lands in this route
    session.activeStudent.exam === true ||
    //every input of the user should be evaluated by the bot in the material route -
    //user should not be able to break out from this route by accident
    session.activeStudent.interest === "material" ||
    //User should not be able to ask for materials while he or she is in the Exam
    (input.payload === "materials_route" &&
      session.activeStudent.examMode === false)
  ) {
    session.activeStudent.interest = "material";
    console.log("you are in the MaterialRoute");
    return [...MaterialRoute];
  }

  if (
    // (session.activeStudent.exam === false ||
    (session.activeStudent.interest === "exam" ||
      //every input of the user should be evaluated by the bot in the Exam route
      //- user should not be able to break out from this route by accident
      input.payload === "examPrep_route") &&
    // Once the user is in exam mode we want to skip this route
    session.activeStudent.examMode === false
  ) {
    session.activeStudent.interest = "exam";
    console.log("you are in the ExamPrepRoute");
    return [...ExamPrepRoute];
  }

  if (
    (session.activeStudent.interest =
      "exam" && session.activeStudent.examMode === true)
  ) {
    console.log(session.activeStudent);

    if (timerTrigger) {
      //reset the cheatAttempt variable before the exam starts (eventListener is always active)
      cheatAttempt = false;
      //call the timer function that is located in "modules" directory
      timer(10);
      timerTrigger = false;
    }
    if (inTime && !cheatAttempt) {
      let inputVar = input;
      let sessionVar = session;
      console.log("you are in the ExamRoute");
      return ExamRoute(inputVar, sessionVar);
    } else {
      return [
        {
          text: /.*/,
          action: ToLate,
        },
      ];
    }
  }
}
