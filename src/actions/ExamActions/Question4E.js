import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 4❓</Text>
        <Text>
          What are the two different ways of specifying the length of an array?
        </Text>
      </>
    );
  }
}
