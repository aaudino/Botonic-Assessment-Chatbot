import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>Question 3:</Text>
        <Text> This the third Question [EASY]</Text>
      </>
    );
  }
}