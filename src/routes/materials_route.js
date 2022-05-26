import Material from "../actions/learningMaterial";
import ExamInfo from "../actions/examInfo";
import Reintroduction from "../actions/reintroduction";
import ExamInit from "../actions/examInit";
import Bye from "../actions/bye";

export const routes = [
  { path: "learningMaterial", text: "materials", action: Material },
  // { path: "examinfo", payload: "exam", action: ExamInfo },
  {
    path: "examInfo",
    request: (request) =>
      (request.input.payload === "examPrep_route" ||
        request.input.data === "exam") &&
      request.session.activeStudent.exam === true,
    action: ExamInfo,
  },

  {
    path: "examInit",
    request: (request) =>
      (request.input.payload === "examPrep_route" ||
        request.input.data === "exam") &&
      request.session.activeStudent.exam === false,
    action: ExamInit,
  },

  {
    path: "learningMaterial",
    payload: /^(materials_route)$/,
    action: Material,
  },
  { path: "reintroduction", payload: /^(restart)$/, action: Reintroduction },

  {
    path: "bye",
    request: (request) =>
      request.input.payload === "noHelp" || request.input.data === "bye",
    action: Bye,
  },
];
