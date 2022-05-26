import ExamInit from "../actions/examInit";
import ExamStart from "../actions/examStart";

export const routes = [
  {
    path: "examInit",
    request: (request) => request.session.activeStudent.exam === false,
    action: ExamInit,
    childRoutes: [
      {
        path: "examStart",
        payload: /^(examStart)$/,
        action: ExamStart,
      },
    ],
  },
];
