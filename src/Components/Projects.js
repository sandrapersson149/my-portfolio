import styled from 'styled-components';
import awesomecakeONE from '../awesomecake1.PNG';
import awesomecakeTWO from '../awesomecake2.PNG';

const StyledDIV = styled.div`
background: #BDEFDA;
width: 85%;
height: 100%;
position: absolute;
right: 0;
display: flex;
flex-wrap: wrap;
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

const StyledSEC = styled.section`
background-color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 40%;
margin: auto;
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
  margin: 15px;
  width: 30%;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;



const Projects = () => {
  return (
    <StyledDIV>
      <h2>Look at some of my work</h2>

      <StyledSEC>
        <h3>Awesomecake - ip1</h3>
        <p>Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Hac habitasse platea dictumst vestibulum rhoncus est.Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus.  </p>
        <img src={awesomecakeONE}></img>
        <img src={awesomecakeTWO}></img>
      </StyledSEC>

      <StyledSEC>
        <h3>Awesomecake - ip1</h3>
        <p>Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Hac habitasse platea dictumst vestibulum rhoncus est.Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Hac habitasse platea dictumst vestibulum rhoncus est.Felis eget nunc lobortis mattis aliquam faucibus purus in massa. </p>
        <img src={awesomecakeONE}></img>
        <img src={awesomecakeTWO}></img>
      </StyledSEC>

      <StyledSEC>
        <h3>Awesomecake - ip1</h3>
        <p>Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Enim sit amet vestibulum rhoncus est.Felis eget nunc lobortis mattis aliquam faucibus purus in massa. </p>
        <img src={awesomecakeONE}></img>
        <img src={awesomecakeTWO}></img>
      </StyledSEC>

      <StyledSEC>
        <h3>Awesomecake - ip1</h3>
        <p>Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Hac habitasse platea dictumst vestibulum rhoncus est.Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus </p>
        <img src={awesomecakeONE}></img>
        <img src={awesomecakeTWO}></img>
      </StyledSEC>





    </StyledDIV>
  );
}

export default Projects;