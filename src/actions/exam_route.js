import Question1E from "./questions/question1E";
import Bye from "./bye";

export const routes = [
  {
    path: "question1E",
    text: "ok",
    action: Question1E,
    childRoutes: [
      {
        path: "bye",
        text: /.*/,
        action: Bye,
      },
    ],
  },
];
