import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.nav`
  width: 100%;
  display: flex;
  font-size: 200%;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  font-family: 'Kdam Thmor Pro', sans-serif;
  flex-wrap: wrap;
  background-color: rgb(198, 224, 255);
`
export const Logo = styled.img`
max-width: 100px;
`

export const Nav = styled(NavLink)`
text-decoration: none;
color: 	rgb(0, 28, 48);

&:hover {
  border-bottom: 5px solid rgb(0, 59, 94);
  margin-top: 15px;
  padding-bottom: 10px;
}
`