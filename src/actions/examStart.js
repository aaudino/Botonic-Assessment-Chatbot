import React from "react";
import { Text, RequestContext } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {
    session.activeStudent.examMode = true;
    console.log(session.activeStudent);
  }

  render() {
    return (
      <>
        <Text>
          Ok {this.context.session.activeStudent.gender}{" "}
          {this.context.session.activeStudent.lastname}.Please make sure that
          you ready and understand the following instructions:
        </Text>
        <Text>IMPORTANT:</Text>
        <Text>
          Please be aware that it is strictly prohibited to leave this chat - Do
          not change the tab or minimize the window
        </Text>
        <Text>
          If a cheatattempt is recognized or if you dont complete the exam
          within 10 Minutes
        </Text>
        <Text>You will automatically fail the exam!</Text>
        <Text>In order to continue please write:"understood"</Text>
      </>
    );
  }
}
