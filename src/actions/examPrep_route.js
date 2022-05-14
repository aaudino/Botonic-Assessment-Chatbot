import ExamInit from "./examInit";
import ExamStart from "./examStart";

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
