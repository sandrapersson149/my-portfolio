import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNAV = styled.nav`
box-shadow: 3px 0px 3px 1px rgba(65, 65, 65, 0.25);
position: absolute;
left: 0;
z-index: 1;
height: 100vh;
width: 15%;
/* width: 270px; */
ul {
  margin-top: 25%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  text-decoration: none;
  color: #353531;
}
li {
  margin: 30px;
  padding: 8px;
  font-size: 2.2em;
  font-weight: 200;
  border: 2px solid white;
  text-align: center;
}
li:hover {
  border: 2px solid gray;
  width: 100%;
  background-color: white;
  border: 2px solid #B8B8B8;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}
`;


const Navbar = () => {
  return (
    <StyledNAV>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li><Link to='/About'>About</Link>
        </li>
        <li><Link to='/Projects'>Projects</Link>
        </li>
        <li><Link to='/Contact'>Contact</Link>
        </li>
      </ul>

    </StyledNAV>
  );
}

export default Navbar;