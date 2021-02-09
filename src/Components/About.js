import styled from 'styled-components';
import avatar from '../avatar.png';
import sandra3 from '../sandra3.jpg';
import images from './images.js';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #FCF6B0;
 }
 `

const StyledDIV = styled.div`
background: #FCF6B0;
width: 100%;
height: 100%;
position: absolute;
right: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
h2 {
  font-size: 75px;
  font-weight: 800;
  text-align: center;
  color: #353531;
  width: 100%;
  margin-top: 50px;
}
p {
  padding: 5px;
  font-size: 19px;
  letter-spacing: 0.5px;
}
section {
  padding: 40px 30px;
  background-color: white;
  width: 450px;
  height: 450px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
img {
  width: 400px;
  height: 400px;
  border-radius: 100%;
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
  margin-left: 50px;
}
`;

const About = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <h2>Get to know me!</h2>

      <section>
        <p>I recently started studying Front end development. But before I got where I am today I have tried a lot of other professions. A couple of years in the service industry, trying out different workplaces. And two years working at a digital printing company, which gave me a lot of workplace experience and an appreciation for design. </p>
        <p>In school I studied Media and Graphic design. I have always been interested in technology and design. So now a couple of years after graduating I decided to seek new opportunities. I chose Front end development because it sounded interesting and fun! I like that there is so much to learn and different paths to take with it. </p>
        <p>Now i'm on my way to my dream job/occupation and feel so excited for the future. </p>
      </section>
      <img src={sandra3} alt="avatar" />

    </StyledDIV>
    </>
  );
}

export default About;