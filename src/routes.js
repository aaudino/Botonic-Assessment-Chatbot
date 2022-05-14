import { log } from "util";
import { routes as MainFlowRoutes } from "./actions/main_flow";
import { routes as MaterialRoute } from "./actions/materials_route";
import { routes as ExamRoute } from "./actions/exam_route";
import { routes as ExamPrepRoute } from "./actions/examPrep_route";
import Introduction from "./actions/introduction";
import Reintroduction from "./actions/reintroduction";
import UnknownUser from "./actions/unknownuser";
import ExamInfo from "./actions/examInfo";
import Material from "./actions/learningMaterial";
import GetDirections from "./actions/get-directions";
import { BotonicInputTester } from "@botonic/react";
const students = require("./userdata/students.js");

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

    if (
      session.students.hasOwnProperty(input.data) === false
      // &&
      // session.activeStudent === undefined
    ) {
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
    console.log("you are in the ExamRoute");
    console.log(ExamRoute);
    return [...ExamRoute];
  }
}