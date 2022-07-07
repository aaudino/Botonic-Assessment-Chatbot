import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 1❓</Text>
        <Text>Briefly describe in one sentence how does merge sort work </Text>
      </>
    );
  }
}
