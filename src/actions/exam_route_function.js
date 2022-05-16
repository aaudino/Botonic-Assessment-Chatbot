import Question1E from "./questions/question1E";
import Question1H from "./questions/question1H";
import Question2E from "./questions/question2E";
import Abort from "./questions/abort";
import Bye from "./bye";
import { log } from "util";

let questioncount = 0;
let randomizer = Math.random();
let noTabChange = true;

const trackTabChange = document.addEventListener(
  "visibilitychange",
  function () {
    if (document.hidden) {
      console.log("Tab was changed ");
      noTabChange = false;
      console.log(noTabChange);
    }
  }
);

export function routes({ input, session }) {
  trackTabChange;
  while (noTabChange === true) {
    if (questioncount === 0) {
      questioncount++;
      if (randomizer >= 0.5) {
        return [
          {
            path: "question1E",
            text: "understood",
            action: Question1E,
          },
        ];
      } else {
        return [
          {
            path: "question1E",
            text: "understood",
            action: Question1H,
          },
        ];
      }
    }
    if (questioncount === 1) {
      console.log(noTabChange);
      questioncount++;
      console.log(input);
      return [
        {
          path: "question2E",
          text: /.*/,
          action: Question2E,
        },
      ];
    }
  }
  if (!noTabChange) {
    return [
      {
        path: "abort",
        text: /.*/,
        action: Abort,
      },
    ];
  }
}
