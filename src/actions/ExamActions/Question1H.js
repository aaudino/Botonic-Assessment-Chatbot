import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
// import {
//   timer as setTimer,
//   startingMinutes,
//   time,
//   timerElement,
//   body,
// } from "./timerFunction";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 1:</Text>
        <Text> This the first Question [HARD]</Text>
      </>
    );
  }
}
