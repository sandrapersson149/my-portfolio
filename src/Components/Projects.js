import styled from 'styled-components';
import awesomecakeONE from '../awesomecake1.PNG';
import awesomecakeTWO from '../awesomecake2.PNG';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #BDEFDA;
 }
 `

const StyledDIV = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
h2 {
width: 100%;
margin-top: 50px;
text-align: center;
font-weight: 800;
font-size: 70px;
color: #353531;
text-decoration: underline;
text-decoration-color: #FBF293;
}
`;

  const ProjectCard = styled.section`
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 650px;
  height: 300px;
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  a {
    font-size: 25px;
    text-decoration: none;
    color: #353531;
  }
  a:hover {
    color: #FBF293;
  }
  p {
    margin: 0 10px;
    font-size: 15px;
  }
  img {
    margin: 5px 10px;
    width: 230px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  `;

const Projects = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <h2>Look at some of my work</h2>

      <ProjectCard>
      <a href="https://github.com/sandrapersson149/awesomecake-ip1">AwesomeCake - IP1</a>
        <p>One of my first completed projects. I chose to make a colorful website for a bakery. It was when I looked at Unsplash.com and saw a couple of pictures of cupcakes I came up with the idea. I'm very pleased with the result and like looking back at the site.</p>
        <img src={awesomecakeONE} alt='Awsomecake landing page'></img>
        <img src={awesomecakeTWO} alt='Awsomecake landing page'></img>
      </ProjectCard>
      <ProjectCard>
        <a href="https://github.com/sandrapersson149/api-trainer">Weather API</a>
        <p>Together with my classmate we created a weather api website. We wanted it to tell the weather for the next 7 days. We used a lot of data from the api - temperature, high and low temp and an icon for the weather.</p>
        <img src={awesomecakeONE} alt='Awsomecake landing page'></img>
        {/* <img src={awesomecakeTWO} alt='Awsomecake landing page'></img> */}
      </ProjectCard>
      <ProjectCard>
      <a href="https://github.com/sandrapersson149/portfolio-demo">Portfolio demo</a>
        <p>A project I made with a classmate to practise react. We wanted to make it a portfolio website with a form page to learn how to use inputs and the value on the page. </p>
        <img src={awesomecakeONE} alt='Awsomecake landing page'></img>
        <img src={awesomecakeTWO} alt='Awsomecake landing page'></img>
        
      </ProjectCard>
      <ProjectCard>
      <a href="https://github.com/sandrapersson149/festival">Festival website</a>
        <p>An early test project to learn flexbox and how to play around with layout on a page. I wanted it to look like a festival poster.</p>
        <img src={awesomecakeONE} alt='Awsomecake landing page'></img>
        <img src={awesomecakeTWO} alt='Awsomecake landing page'></img>
        
      </ProjectCard>

    </StyledDIV>
    <GlobalStyle/>
    </>
  );
}

export default Projects;