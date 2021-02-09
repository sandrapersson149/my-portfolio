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
width: 100%;
height: 100%;
position: absolute;
right: 0;
display: flex;
flex-wrap: wrap;
justify-content: center;

h2 {
width: 100%;
margin-top: 30px;
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
width: 30%;
/* margin: auto; */

padding: 15px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
h3 {
  font-size: 30px;
  width: 100%;
}
p {
  padding: 15px;
}
img {
  margin: 5px;
  width: 30%;
  /* height: 100%; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;



const Projects = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <h2>Look at some of my work</h2>

      {/* <ProjectCard>
        <h3>Awesomecake - ip1</h3>
        <p>Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Hac habitasse platea dictumst vestibulum.</p>
        <img src={awesomecakeONE}></img>
        <img src={awesomecakeTWO}></img>
      </ProjectCard> */}

    </StyledDIV>
    <GlobalStyle/>
    </>
  );
}

export default Projects;