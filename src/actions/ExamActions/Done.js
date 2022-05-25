import React from "react";
import { Text, RequestContext, Reply } from "@botonic/react";
import Students from "../../userdata/students";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session, params, lastRoutePath }) {
    let scoreNotification = `Thanks ${session.activeStudent.gender}
    ${session.activeStudent.lastname} for participating! Yo have achieved a score ${session.activeStudent.score}%`;
    session.activeStudent.examMode = false;
    session.activeStudent = undefined;
    console.log(Students);

    return { scoreNotification };
  }

  render() {
    return (
      <>
        <Text>EXAM FINISHED</Text>
        <Text>{this.props.scoreNotification}</Text>
        <Text>You will now be logged out</Text>
        <Text> If you wish to receive materials - please log in again </Text>
        <Text>See you next Time </Text>
      </>
    );
  }
}
