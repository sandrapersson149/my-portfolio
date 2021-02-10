import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #DBF2FF;
 }
 `
const StyledDIV = styled.div`
display: flex;
justify-content: center;
section {
  display: flex;
  flex-direction: column;
  text-align: center;
}
h2 {
  margin-top: 130px;
  font-weight: 800;
  font-size: 60px;
  color: #353531;
}
a {
  color: #353531;
  text-decoration: none;
  font-size: 40px;
  margin: 10px;
}
a:hover {
  opacity: 0.5;
  text-decoration: underline;
}

@media screen and (max-width: 1300px) {
  h2 {
    font-size: 50px;
  }
}
@media screen and (max-width: 800px) {
  h2 {
    font-size: 35px;
  }
  a {
  font-size: 30px;
  }
}
@media screen and (max-width: 550px) {
  h2 {
    width: 300px;
  }
  a {
  font-size: 20px;
  }
}
`;

const Contact = () => {
  return (
    <>
    <GlobalStyle />
    <StyledDIV>
      <section>
        <h2>Want to get in touch with me?</h2>
        <a href="https://github.com/sandrapersson149?tab=repositories">Github</a>
        <a href="mailto:sandrapersson.dev@gmail.com">Mail to me</a>
        <a href="https://www.linkedin.com/in/sandra-persson-660b551b5/">Linkedin</a>
      </section>
    </StyledDIV>
    </>
  );
}

export default Contact;