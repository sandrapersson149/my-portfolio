import styled from 'styled-components';
import sandra3 from './Images/sandra3.jpg';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #FCF6B0;
 }`;

const StyledDIV = styled.div`
background: #FCF6B0;
width: 90%;
margin: 0 110px;
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
  margin: 50px 0;
}
p {
  padding: 5px;
  font-size: 16px;
  letter-spacing: 0.5px;
}
section {
  padding: 22px;
  background-color: white;
  width: 370px;
  height: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
img {
  height: 350px;
  border-radius: 100%;
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
  margin-right: 50px;
}
@media screen and (max-width: 1210px) {
  margin: 0 20px;
  h2{
    font-size: 60px;
    margin-top: 120px;
    margin-bottom: 10px;
  }
  img {
    height: 200px;
    margin: 25px 0;
  }
  section {
    width: 60%;
    height: auto;
    margin: 20px 10px;
  }
  p {
    padding: 5px;
    font-size: 13px;
    letter-spacing: 0.5px;
  }
}
@media screen and (max-width: 800px) {
  h2{
    width: 150px;
    font-size: 40px;
    margin: 130px 20px 10px 0;
  }
  img {
    height: 200px;
    margin: 120px 0 25px 0;
  }
  section {
    width: 80%;
    margin: 5px 10px;
  }
}
@media screen and (max-width: 550px) {
  img {
    height: 150px;
    margin: 120px 0 25px 0;
  }
  section {
    width: 80%;
    margin: 5px 10px;
  }
}
@media screen and (max-width: 370px) {
  h2{
    width: 100px;
    font-size: 30px;
  }
}`;

const About = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <h2>Get to know me!</h2>
      <img src={sandra3} alt="avatar" />
      <section>
        <p>I recently started studying Front end development. But before I got where I am today I have tried a lot of other professions. A couple of years in the service industry, trying out different workplaces. And two years working at a digital printing company, which gave me a lot of workplace experience and an appreciation for design. </p>
        <p>In school I studied Media and Graphic design. I have always been interested in technology and design. So now a couple of years after graduating I decided to seek new opportunities. I chose Front end development because it sounded interesting and fun! I like that there is so much to learn and different paths to take with it. </p>
        <p>Now i'm on my way to my dream job/occupation and feel so excited for the future. </p>
      </section>
    </StyledDIV>
    </>
  );
}

export default About;