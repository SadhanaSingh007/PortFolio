import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/woman-svgrepo-com.svg" alt="woman-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Sadhana</strong>. I'm originally from
              India and have been living in Germany for the past four years.
              During my time here, I gained valuable experience with Digital
              Career Institute and have completed my WebDevelopment course from
              there, which greatly enhanced me as a web developer, communication
              skills, and adaptability.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a strong
              passion for problem-solving, which led me to pursue the Computer
              Systems Technology program. Despite its challenges, I remained
              determined and forged lasting friendships that supported me
              throughout this demanding program. Throughout my studies at Web
              Developer, I had the opportunity to engage in fascinating
              projects.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
