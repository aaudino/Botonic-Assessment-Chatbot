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
    intents: ["StartExam", "StartExam"],
  },
  1: {
    intents: ["Algorithms[E]", "Algorithms[H]"],
    easy: Question1E,
    hard: Question1H,
  },
  2: {
    intents: ["C++Basics[E]", "C++Basics[H]"],
    easy: Question2E,
    hard: Question2H,
  },
  3: {
    intents: ["Compilers[E]", "Compilers[H]"],
    easy: Question3E,
    hard: Question3H,
  },
  4: {
    intents: ["DataTypes[E]", "DataTypes[H]"],
    easy: Question4E,
    hard: Question4H,
  },
  5: {
    intents: ["Functions[E]", "Functions[H]"],
    easy: Question5E,
    hard: Question5H,
  },
  6: {
    intents: ["OOP[E]", "OOP[H]"],
    easy: Question6E,
    hard: Question6H,
  },
};
