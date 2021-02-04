import styled from 'styled-components';
import avatar from '../avatar.png';

const StyledDIV = styled.div`
background: #DBF2FF;
width: 100%;
height: 100%;
position: absolute;
h1 {
  width: 650px;
  font-size: 90px;
  font-weight: 800;
  color: #353531;
}
span {
  border-bottom: 7px solid #DAB2FB;
}
img {
  height: 300px;
  border-radius: 100%;
  border: 2px solid white;
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
}
p {
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: 200;
}
`;

const Section = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-bottom: 50px;
padding-top: 70px;
`;

const Home = () => {
  return (
    <StyledDIV>

      <Section>
        <h1>Hello there, it's me <span>Sandra</span></h1>
        <img src={avatar} alt="avatar" />
      </Section>

      <div>
        <p>Aspiring Front end developer</p>
        <p>Born in Stockholm, Sweden</p>
        <p>Love design in any shape or form</p>
        <p>Excited for new experiences</p>
      </div>

    </StyledDIV>
  );
}

export default Home;