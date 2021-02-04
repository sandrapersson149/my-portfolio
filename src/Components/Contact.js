import styled from 'styled-components';

const StyledDIV = styled.div`
background: #EDD6FF;
width: 100%;
height: 100%;
position: absolute;
right: 0;
display: flex;

justify-content: center;

section {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
}
h2 {
  font-weight: 800;
  font-size: 60px;
  line-height: 65px;
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
}

`;

const Contact = () => {
  return (
    <StyledDIV>
      <section>
        <h2>Want to get in touch with me?</h2>
        <a href="https://github.com/sandrapersson149?tab=repositories">Github</a>
        <a href="mailto:sandraspersson@hotmail.com">Mail</a>
        <a href="https://www.linkedin.com/in/sandra-persson-660b551b5/">Linkedin</a>
      </section>

    </StyledDIV>
  );
}

export default Contact;