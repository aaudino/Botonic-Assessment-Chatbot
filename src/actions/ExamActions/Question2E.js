import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 2❓</Text>
        <Text> When does C++ create a default constructor?</Text>
      </>
    );
  }
}
