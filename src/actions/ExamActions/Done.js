import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>EXAM FINISHED</Text>
        <Text>EXAM over - thanks for participating</Text>
      </>
    );
  }
}