import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
import { inTime, timerInterval, timer } from "../../actions/modules/timer";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session, params, lastRoutePath }) {
    let notification;
    clearInterval(timerInterval);
    if (!inTime) {
      notification = "You ran out of time";
      return { notification };
    } else {
      notification = "You were caught cheating";
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
