import { log } from "util";
import { routes as MainFlowRoutes } from "./actions/main_flow";
import Introduction from "./actions/introduction";
import KnownUser from "./actions/unknownuser";
import { BotonicInputTester } from "@botonic/react";
const students = require("./userdata/students.js");

export function routes({ input, session }) {
  console.log(students);
  console.log(students.students.h1403837.lastname);
  console.log(Object.entries(students.students));

  // console.log(Object.keys(students.students));
  // console.log(Object.values(students));

  if (session.user.username == "johndoe") {
    return [
      {
        text: /.*/,
        action: Introduction,
      },
    ];
  }
  if (session.user.username == input.data) {
    return [
      {
        text: /.*/,
        action: KnownUser,
      },
    ];
  } else {
    return [...MainFlowRoutes];
  }
}
