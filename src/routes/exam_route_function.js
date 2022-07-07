// import { noTabChange, checkTabChange } from "./ExamActions/tabtrack";
import Done from "../actions/ExamActions/Done";
import { log } from "util";
import { timerInterval } from "../actions/modules/timer";
import { Questions as questions } from "../userdata/questions.js";

// ##############################
// VARIABLES
// ##############################

let count = 0;
let question;
let difficulty;
let lastdifficulty;
let scores = [];
let currentquestion;
let numberOfQuestions = Object.keys(questions).length;

// ##############################
// Function
// ##############################
export function routes(input, session) {
  count++;
  // save the difficulty of the ast question before it gets overwritten
  lastdifficulty = difficulty;
  let lastquestion = questions[count - 1];
  count < numberOfQuestions
    ? (currentquestion = questions[count])
    : (currentquestion = lastquestion);

  // define Lastquestion because this is the one that the function evaluates!!!

  // CurrentQuestion is only for storing the next question!!!

  // Decide wheter the user should get an easy or a difficult Question based on luck ( for the first question) or on the previous performance
  if (count <= 1) {
    let randomizer = Math.random();
    randomizer <= 0.5
      ? ((question = currentquestion.easy), (difficulty = 0))
      : ((question = currentquestion.hard), (difficulty = 1));
  } else {
    scores[scores.length - 1] >= 0.75
      ? ((question = currentquestion.hard), (difficulty = 1))
      : ((question = currentquestion.easy), (difficulty = 0));
  }
  //Grab the confidence score array in the intents array which is a property of the input object

  let confidenceScoresFind = input.intents.find((e) => {
    return e.label == lastquestion.intents[difficulty];
  });
  console.log(confidenceScoresFind);
  let score = confidenceScoresFind?.confidence;
  console.log(
    `current Difficulty:${difficulty} & last Difficulty ${lastdifficulty}`
  );
  console.log(score);
  console.log(input.intents);

  // increase the score if the students answers a hard question exceptionally well!
  lastdifficulty && score >= 0.75
    ? (score += 0.15)
    : console.log("No bonus points for hard question");
  // decrease the score if the students answers an easy question exceptionally well to compensate for the lack of difficulty!
  !lastdifficulty && score >= 0.75
    ? (score -= 0.15)
    : console.log("No deductions for an easy question");

  scores.push(score);
  console.log(scores);

  if (count < numberOfQuestions) {
    return [
      {
        path: `${question}`,
        text: /.*/,
        action: question,
      },
    ];
  } else {
    console.log(scores);
    // remove the first value -which is always undefined
    scores.shift();
    console.log("Here are the scores after the shift");
    // define the number of answered questions
    let questionsAnswered = count - 1;
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
