import { log } from "util";
import { routes as MaterialRoute } from "./actions/materials_route";
import { routes as ExamPrepRoute } from "./actions/examPrep_route";
import Introduction from "./actions/introduction";
import UnknownUser from "./actions/unknownuser";
import { BotonicInputTester } from "@botonic/react";
const students = require("./userdata/students.js");
import { routes as ExamRoute } from "./actions/exam_route_function";
import Question1E from "./actions/ExamActions/Question1E";

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

  while (
    (session.activeStudent.interest =
      "exam" && session.activeStudent.examMode === true)
  ) {
    let inputVar = input;
    let sessionVar = session;
    console.log("you are in the ExamRoute");
    return ExamRoute(inputVar, sessionVar);
  }
}
