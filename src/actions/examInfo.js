import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {}

  render() {
    return (
      <>
        <Text>
          It seems that you have already taken the Exam{" "}
          {this.context.session.activeStudent.gender}{" "}
          {this.context.session.activeStudent.lastname}. You have got a Score of{" "}
          {this.context.session.activeStudent.score}
          <Reply payload="restart">Take me back 🔙</Reply>
        </Text>
      </>
    );
  }
}
