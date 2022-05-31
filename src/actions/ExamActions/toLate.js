import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
import { inTime, timerInterval, timer } from "../../actions/modules/timer";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session, params, lastRoutePath }) {
    session.activeStudent.examMode = false;
    session.activeStudent.exam = true;
    session.activeStudent = undefined;
    let notification;
    clearInterval(timerInterval);
    if (!inTime) {
      notification = "You ran out of time - You will now be logged out";
      return { notification };
    } else {
      notification = "You were caught cheating - You will now be logged out ";
      return { notification };
    }
  }

  render() {
    return (
      <>
        <Text>EXAM FINISHED</Text>
        <Text>{this.props.notification}</Text>
      </>
    );
  }
}
