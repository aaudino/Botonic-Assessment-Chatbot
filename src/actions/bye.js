import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {
    let byeMessage = `Alright, ${session.activeStudent.gender}
    ${session.activeStudent.lastname} see you next time! you will now be logged out! `;
    session.activeStudent.examMode = false;
    session.activeStudent = undefined;
    return { byeMessage };
  }

  render() {
    return (
      <>
        <Text>{this.props.byeMessage}</Text>
      </>
    );
  }
}
