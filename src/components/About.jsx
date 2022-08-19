import React from "react";
import ProfileCard from "./ProfileCard";
import * as C from "../styles/About";

const About = () => {
  return (
    <C.Container>
      <div>
        <h1>HKM Developer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          mollis libero. Ut dignissim, augue aliquet imperdiet facilisis, quam
          augue pulvinar lacus, a pellentesque justo justo vel arcu. Maecenas
          pharetra dolor eros, et convallis lectus hendrerit ut. Sed fermentum
          eu turpis in tempus. Proin vehicula consectetur eros quis pulvinar. In
          interdum arcu in blandit posuere. Fusce sem neque, scelerisque eu
          interdum ut, tempor at massa. Sed vitae porttitor orci. Sed eu turpis
          nibh. Etiam nec eros vulputate, placerat enim a.
        </p>
      </div>
      <div>
        <ProfileCard />
      </div>
    </C.Container>
  );
};

export default About;
