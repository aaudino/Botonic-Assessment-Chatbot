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

export function routes({ input, session }) {
  session.students = students.students;

  while (session.activeStudent === undefined) {
    console.log("you are in the IntroductionRoute");
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
    session.activeStudent.exam === true ||
    session.activeStudent.interest === "material" ||
    (input.payload === "materials_route" &&
      session.activeStudent.examMode === false)
  ) {
    session.activeStudent.interest = "material";
    console.log("you are in the MaterialRoute");
    return [...MaterialRoute];
  }

  if (
    (session.activeStudent.exam === false ||
      session.activeStudent.interest === "exam" ||
      input.payload === "examPrep_route") &&
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
      cheatAttempt = false;
      timer(1);
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
