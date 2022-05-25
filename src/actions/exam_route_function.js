import Question1E from "./ExamActions/Question1E";
import Question1H from "./ExamActions/Question1H";
import Question2E from "./ExamActions/Question2E";
import Question2H from "./ExamActions/Question2H";
import Question3E from "./ExamActions/Question3E";
import Question3H from "./ExamActions/Question3H";
import Question4E from "./ExamActions/Question4E";
import Question4H from "./ExamActions/Question4H";
import Question5E from "./ExamActions/Question5E";
import Question5H from "./ExamActions/Question5H";
import Question6E from "./ExamActions/Question6E";
import Question6H from "./ExamActions/Question6H";
// import { noTabChange, checkTabChange } from "./ExamActions/tabtrack";
import Done from "./ExamActions/Done";
import { log } from "util";
import { timerInterval } from "./modules/timer";

// ##############################
// VARIABLES
// ##############################
const questions = {
  0: {
    intent: "StartExam",
  },
  1: {
    intent: "GetDirections",
    easy: Question1E,
    hard: Question1H,
  },
  2: {
    intent: "BookRestaurant",
    easy: Question2E,
    hard: Question2H,
  },
  3: {
    intent: "BookRestaurant",
    easy: Question3E,
    hard: Question3H,
  },
  4: {
    intent: "BookRestaurant",
    easy: Question4E,
    hard: Question4H,
  },
  5: {
    intent: "BookRestaurant",
    easy: Question5E,
    hard: Question5H,
  },
  6: {
    intent: "BookRestaurant",
    easy: Question6E,
    hard: Question6H,
  },
};
let count = 0;
let question;
let difficulty;
let lastdifficulty;
let scores = [];
let answer;
let currentquestion;

// ##############################
// Function
// ##############################
export function routes(input, session) {
  count++;
  // save the difficulty of the ast question before it gets overwritten
  lastdifficulty = difficulty;
  let lastquestion = questions[count - 1];
  count < 7
    ? (currentquestion = questions[count])
    : (currentquestion = lastquestion);

  // define Lastquestion because this is the one that the function evaluates!!!

  // CurrentQuestion is only for storing the next question!!!

  // Decide wheter the user should get an easy or a difficult Question based on luck ( for the first question) or on the previous performance
  if (count <= 1) {
    let randomizer = Math.random();
    randomizer <= 0.5
      ? ((question = currentquestion.easy), (difficulty = false))
      : ((question = currentquestion.hard), (difficulty = true));
  } else {
    scores[scores.length - 1] >= 0.65
      ? ((question = currentquestion.hard), (difficulty = true))
      : ((question = currentquestion.easy), (difficulty = false));
  }
  //Grab the confidence score array - replace unwated values ( because of overlapping intents)with zero and sort it (descending)

  const confidenceScores = input.intents
    .map((e) => {
      if (e.label == lastquestion.intent) {
        return e.confidence;
      } else {
        return 0;
      }
    })
    .sort(function (a, b) {
      return b - a;
    });
  // Save the Score of the last question
  let score = confidenceScores[0];
  console.log(
    `current Difficulty:${difficulty} & last Difficulty ${lastdifficulty}`
  );
  console.log(score);
  console.log(input.intents);

  // increase the score if the students answers a hard question exceptionally well!
  lastdifficulty && score >= 0.75
    ? (score += 0.15)
    : console.log("does not apply ");
  // decrease the score if the students answers an easy question exceptionally well to compensate for the lack of difficulty!
  !lastdifficulty && score >= 0.75
    ? (score -= 0.15)
    : console.log("does not apply as well");

  scores.push(score);
  console.log(scores);

  if (count < 7) {
    return [
      {
        path: `${question}`,
        text: /.*/,
        action: question,
      },
    ];
  } else {
    console.log(lastdifficulty);
    console.log(scores);
    // remove the first value -which is always 0
    let questionsAnswered = scores.slice(1).length + 1;
    let results = scores.reduce((total, i) => {
      return total + i;
    }, 0);
    console.log(`here are the results: ${results}`);
    console.log(`here are the answered questions: ${questionsAnswered} `);
    session.activeStudent.score = Math.round(
      (results / questionsAnswered) * 100
    );
    clearInterval(timerInterval);
    return [
      {
        text: /.*/,
        action: Done,
      },
    ];
  }
}
