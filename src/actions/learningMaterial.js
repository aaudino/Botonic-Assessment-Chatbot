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
        name: "Divide and Conquer",
        desc: "Introduction to Divide and Conquer",
        url: "https://github.com/developerinsider/developer-insider-content/blob/master/POST/DSA/DandC/DandCsmall.png?raw=true",
        pic: "https://github.com/developerinsider/developer-insider-content/blob/master/POST/DSA/DandC/DandCsmall.png?raw=true",
      },
      {
        name: "Object Oriented Programming",
        desc: "Advantages of OOP",
        url: "https://www.educba.com/advantages-of-oop/",
        pic: "https://cdn.educba.com/academy/wp-content/uploads/2019/02/Advantages-of-OOP.jpg",
      },
      {
        name: "C++ Basics",
        desc: "char* vs std:string vs char[] in C++",
        url: "https://www.geeksforgeeks.org/char-vs-stdstring-vs-char-c/",
        pic: "https://vm.pl/assets/media/technologie/c-plus-plus/header-c-plusplus.svg",
      },
    ];
    return (
      <>
        <Text>
          Sure here we have a selection of articles that explain the concepts
          discussed in class very well. Please have a look 🤓!
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
          here for you in the meantime 😊!
        </Text>
        <Text>Do you need additional help ?</Text>
        <Reply payload="moreHelp">Yes</Reply>
        <Reply payload="noHelp"> No thank you 🔙 </Reply>
        <Reply payload="examPrep_route"> I want to take the Exam 💪</Reply>
      </>
    );
  }
}
