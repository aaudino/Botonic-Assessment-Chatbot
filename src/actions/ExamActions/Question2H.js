import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 2❓</Text>
        <Text>
          What is the main difference between a string of characters that is
          read into a variable of type string versus a variable of type char[]?
        </Text>
      </>
    );
  }
}
