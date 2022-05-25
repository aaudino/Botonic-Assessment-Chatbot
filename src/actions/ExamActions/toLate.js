import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
import { inTime, timerInterval, timer } from "../../actions/modules/timer";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session, params, lastRoutePath }) {
    clearInterval(timerInterval);
  }

  render() {
    return (
      <>
        <Text>EXAM FINISHED</Text>
        <Text>You did not finish in Time.</Text>
        <Text>Your submission will not be graded</Text>
      </>
    );
  }
}
