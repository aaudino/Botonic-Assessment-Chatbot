import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>EXAM ABORT</Text>
        <Text>You have left the Tab - Exam is over</Text>
      </>
    );
  }
}
