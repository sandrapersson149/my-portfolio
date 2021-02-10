import styled from 'styled-components';
import avatar from '../avatar.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #DBF2FF;
 }`;
 
const StyledDIV = styled.div`
position: absolute;
left: 10%;
top: 5%;
  main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 80px;
  }
  h1 {
    width: 600px;
    font-size: 90px;
    font-weight: 800;
    color: #353531;
  }
  span {
    border-bottom: 7px solid #DAB2FB;
  }
  img {
    height: 350px;
    border-radius: 100%;
    border: 2px solid white;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
    margin: 20px;
  }
  p {
    font-size: 40px;
    text-align: center;
    font-weight: 200;
  }
  section {
  margin: 15px;
  }

@media screen and (max-width: 900px) {
  left: 0;
  top: 20%;
  main {
    margin: 0;
    width: 100%;
  }
  h1 {
    text-align: center;
    width: 600px;
    font-size: 80px;
  }
  img {
    height: 250px;
    margin: 20px 0;
  }
}

@media screen and (max-width: 650px) {
  left: 0;
  top: 20%;
  main {
    margin: 0;
    width: 100%;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-size: 65px;
  }
  img {
    height: 200px;
    margin: 20px 0;
  }
  section {
    margin: 0;
  }
  p {
    font-size: 30px;
  }
}
@media screen and (max-width: 500px) {
  left: 0;
  top: 20%;
  main {
    margin: 0;
    width: 100%;
  }
  h1 {
    width: 90%;
    text-align: center;
    font-size: 50px;
  }
  img {
    height: 200px;
    margin: 20px 0;
  }
  p {
    font-size: 20px;
  }
}
`;

const Home = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <main>
        <h1>Hello, it's me <span>Sandra</span></h1>
          <img src={avatar} alt="avatar" />
            <section>
              <p>Aspiring Front end developer</p>
              <p>Living in Stockholm, Sweden</p>
              <p>Love design in any shape or form</p>
            </section>
      </main>
    </StyledDIV>
    </>
  );
}

export default Home;