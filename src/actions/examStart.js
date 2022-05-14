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
          {this.context.session.activeStudent.lastname}. Lets go! here is your
          first Question
        </Text>
      </>
    );
  }
}
