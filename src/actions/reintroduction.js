import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  static async botonicInit({ input, session, params, lastRoutePath }) {}

  render() {
    return (
      <>
        <Text>
          What else can I do for you {this.context.session.activeStudent.gender}{" "}
          {this.context.session.activeStudent.lastname}?
        </Text>
        <Reply payload="materials_route"> I need Materials </Reply>
        <Reply payload="Goodbye"> Nothing - Thank you! </Reply>
      </>
    );
  }
}
