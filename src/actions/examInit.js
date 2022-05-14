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
          are entering exam mode now. If you dont feel ready please close the
          chatwindow.
        </Text>
        <Reply payload="examStart">I am ready</Reply>
      </>
    );
  }
}
