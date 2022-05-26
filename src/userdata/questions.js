import Question1E from "../actions/ExamActions/Question1E";
import Question1H from "../actions/ExamActions/Question1H";
import Question2E from "../actions/ExamActions/Question2E";
import Question2H from "../actions/ExamActions/Question2H";
import Question3E from "../actions/ExamActions/Question3E";
import Question3H from "../actions/ExamActions/Question3H";
import Question4E from "../actions/ExamActions/Question4E";
import Question4H from "../actions/ExamActions/Question4H";
import Question5E from "../actions/ExamActions/Question5E";
import Question5H from "../actions/ExamActions/Question5H";
import Question6E from "../actions/ExamActions/Question6E";
import Question6H from "../actions/ExamActions/Question6H";

export const Questions = {
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
