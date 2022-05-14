import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {
    session.activeStudent = session.students[input.data.toLowerCase()];
    session.activeStudent.examMode = false;
    session.activeStudent.interest = undefined;
  }

  render() {
    return (
      <>
        <Text>
          Hi {this.context.session.activeStudent.gender}{" "}
          {this.context.session.activeStudent.lastname}, pleasure to meet you!
          How can I help you today?
        </Text>
        <Reply payload="materials_route"> I need Materials </Reply>
        <Reply payload="examPrep_route"> I want to take the Exam</Reply>
      </>
    );
  }
}
