import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;
  render() {
    return (
      <>
        <Text>I am sorry 😔!</Text>
        <Text>
          I can not provide any Information to an unauthenticated user!
        </Text>
      </>
    );
  }
}
