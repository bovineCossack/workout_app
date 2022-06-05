import styled from 'styled-components';

export const Header = styled.nav`
  width: 100%;
  display: flex;
  font-size: 200%;
  justify-content: space-around;
  padding: 1rem;
  font-family: 'Kdam Thmor Pro', sans-serif;
  flex-wrap: wrap;
`
export const Logo = styled.img`
max-width: 100px;
margin-top: -30px;
/* margin-left: 30px; */
`

export const Nav = styled.NavLink`
text-decoration: none;
color: black;
`