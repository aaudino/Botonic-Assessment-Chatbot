import BookRestaurant from "./book-restaurant";
import GetDirections from "./get-directions";
import NotFound from "./not-found";
import ShowWeather from "./show-weather";
import Start from "./start";
import Material from "./learningMaterial";
import ExamInfo from "./examInfo";
import Reintroduction from "./reintroduction";
import ExamInit from "./examInit";
import Bye from "./bye";

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
