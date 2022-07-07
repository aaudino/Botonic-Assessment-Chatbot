import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
import { students } from "../userdata/students";

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {
    session.activeStudent.interest = "exam";
  }

  render() {
    return (
      <>
        <Text>
          Sure {this.context.session.activeStudent.gender}{" "}
          {this.context.session.activeStudent.lastname}. Please be aware that we
          are entering exam mode now.
        </Text>
        <Text>
          If you are not ready or came here by accident:Please just close the
          chatwindow and login again!
        </Text>
        <Reply payload="examStart">I am ready 💪</Reply>
      </>
    );
  }
}
