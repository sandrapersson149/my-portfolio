import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import awesomecakeONE from './Images/awesomecake1.PNG';
import awesomecakeTWO from './Images/awesomecake2.PNG';
import festival1 from './Images/festival1.PNG';
import festival2 from './Images/festival2.PNG';
import weather1 from './Images/weather1.PNG';
import portfolioDemo1 from './Images/portfolio-demo1.PNG';
import portfolioDemo2 from './Images/portfolio-demo2.PNG';


const GlobalStyle = createGlobalStyle`
 body {
   background-color: #BDEFDA;
 }`;

const StyledDIV = styled.div`
display: flex;
width: 78%;
margin-left: 230px;
flex-wrap: wrap;
justify-content: center;
  h2 {
  width: 100%;
  margin-top: 40px;
  text-align: center;
  font-weight: 800;
  font-size: 70px;
  color: #353531;
  }
  h3 {
    font-size: 25px;
    width:100%;
    text-align: center;
    color: #353531;
  }
  a {
    color: #353531;
  }

@media screen and (min-width: 1700px) {
    width: 70%;
    margin-left: 300px;
  }
@media screen and (max-width: 1200px) {
  margin: 0 auto;
  width: 100%;
  h2 {
    margin-top: 120px;
    font-size: 60px;
  }
  }
@media screen and (max-width: 900px) {
    h2 {
    font-size: 40px;
  }
  h3 {
    margin-bottom: 15px;
  }
  }
@media screen and (max-width: 560px) {
    h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }
  }
@media screen and (max-width: 400px) {
    h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 15px;
  }
  }`;

  const ProjectCard = styled.section`
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 8px;
  width: 430px;
  height: 220px;
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  a {
    font-size: 20px;
    text-decoration: none;
    color: #353531;
  }
  a:hover {
    color: #FBF293;
  }
  p {
    margin: 0 10px;
    font-size: 12px;
  }
  img {
    margin: 5px 5px;
    width: 180px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 500px) {
  width: 290px;
  height: 520px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  img {
    margin: 5px;
    width: 260px;
  }
  p {
    margin: 5px;
    font-size: 12px;
  }
  }`;

const Projects = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <h2>Look at some of my work</h2>
      <h3>and find more on my <a href="https://github.com/sandrapersson149?tab=repositories">Github</a></h3>
      
      <ProjectCard>
      <a href="https://github.com/sandrapersson149/awesomecake-ip1">AwesomeCake - IP1</a>
        <p>One of my first completed projects. I chose to make a colorful website for a bakery. It was when I looked at Unsplash.com and saw a couple of pictures of cupcakes I came up with the idea.</p>
        <img src={awesomecakeONE} alt='Awsomecake landing page'></img>
        <img src={awesomecakeTWO} alt='Awsomecake'></img>
      </ProjectCard>

      <ProjectCard>
        <a href="https://github.com/sandrapersson149/api-trainer">Weather API</a>
        <p>Together with my classmate we created a weather api website. We wanted it to tell the weather for the next 7 days. We used a lot of data from the api - temperature, high and low temp and an icon for the weather.</p>
        <img src={weather1} alt='Weather API website'></img>
      </ProjectCard>

      <ProjectCard>
      <a href="https://github.com/sandrapersson149/portfolio-demo">Portfolio demo</a>
        <p>A project I made with a classmate to practise react. We wanted to make it a portfolio website with a form page to learn how to use inputs and the value on the page. </p>
        <img src={portfolioDemo1} alt='Portfolio demo landing page'></img>
        <img src={portfolioDemo2} alt='Portfolio demo form'></img>
      </ProjectCard>

      <ProjectCard>
      <a href="https://github.com/sandrapersson149/festival">Festival website</a>
        <p>An early test project to learn flexbox and how to play around with layout on a page. I wanted it to look like a festival poster.</p>
        <img src={festival1} alt='Festival website'></img>
        <img src={festival2} alt='Festival website'></img>
      </ProjectCard>
    </StyledDIV>
    <GlobalStyle/>
    </>
  );
}

export default Projects;