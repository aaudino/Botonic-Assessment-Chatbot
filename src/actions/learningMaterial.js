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
    const articles = [
      {
        name: "Object Oriented Programming",
        desc: "A detailed explanation of how OOP works",
        url: "https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP",
        pic: "https://cdn.ttgtmedia.com/rms/onlineimages/whatis-object_oriented_programming.png",
      },
      {
        name: "HTTP - An Overview ",
        desc: "",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
        pic: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png",
      },
      {
        name: "What is React",
        desc: "React and its components explained in plain english!",
        url: "https://moralis.io/react-explained-what-is-react/",
        pic: "https://moralis.io/wp-content/uploads/2021/09/21_06_REACTJS-4.jpg",
      },
    ];
    return (
      <>
        <Text>
          Sure here we have a selection of articles that explain the concepts
          discussed in class very well. Please have a look!
        </Text>
        <Carousel>
          {articles.map((e, i) => (
            <Element key={e.name}>
              <Pic src={e.pic} />
              <Title>{e.name}</Title>
              <Subtitle>{e.desc}</Subtitle>
              <Button url={e.url}>Visit</Button>
            </Element>
          ))}
        </Carousel>
        <Text>
          Please take your time to read throug the articles - i will be waiting
          here for you in the meantime!
        </Text>
        <Text>Do you need additional help ?</Text>
        <Reply payload="moreHelp">Yes</Reply>
        <Reply payload="noHelp"> No thank you </Reply>
        <Reply payload="examPrep_route"> I want to take the Exam</Reply>
      </>
    );
  }
}
