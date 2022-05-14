import {
  Button,
  Carousel,
  Element,
  Pic,
  Subtitle,
  Text,
  Title,
  Reply,
} from "@botonic/react";
import React from "react";

export default class extends React.Component {
  render() {
    const webviews = [
      {
        title: "Object Oriented Programming",
        desc: "",
        img: "",
        webview: "",
      },
      {
        title: "HTTP",
        desc: "",
        img: "",
        webview: "",
      },
      {
        title: "React",
        desc: "",
        img: "",
        webview: "",
      },
    ];

    <Text>
      Sure please have a look at the articles that were provided by professor
      doe
    </Text>;

    <Carousel>
      {webviews.map((e) => (
        <Element key={e.title}>
          <Pic src={e.img} />
          <Title>{e.title}</Title>
          <Subtitle>{e.desc}</Subtitle>
          <Button url={e.webview}>Visit</Button>
        </Element>
      ))}
    </Carousel>;
  }
}
