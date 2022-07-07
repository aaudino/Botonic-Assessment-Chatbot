import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 5❓</Text>
        <Text>
          What is the difference between a constructor and a function?
        </Text>
      </>
    );
  }
}
