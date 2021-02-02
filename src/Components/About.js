import styled from 'styled-components';
import avatar from '../avatar.png';


const StyledDIV = styled.div`
background: #FCF6B0;
width: 85%;
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
  padding: 10px;
  font-size: 18px;
}
section {
  padding: 40px 30px;
  background-color: white;
  width: 450px;
  height: 500px;
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
    <StyledDIV>
      <h2>Get to know me!</h2>

      <section>
        <p>Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Orci dapibus ultrices in iaculis. Enim sit amet venenatis urna cursus. Hac habitasse platea dictumst vestibulum rhoncus est.Eget velit aliquet sagittis id consectetur purus. Id semper risus in hendrerit gravida rutrum quisque. Ac tincidunt vitae semper quis.Odio eu feugiat pretium nibh ipsum consequat. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
        <p>Eget velit aliquet sagittis id consectetur purus. Id semper risus in hendrerit gravida rutrum quisque. Ac tincidunt vitae semper quis.Odio eu feugiat pretium nibh ipsum consequat. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
      </section>
      <img src={avatar} alt="avatar" />

    </StyledDIV>
  );
}

export default About;