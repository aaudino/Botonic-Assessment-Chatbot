import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 6❓</Text>
        <Text>
          What are the main advantages associated with object-oriented
          programming?
        </Text>
      </>
    );
  }
}
