import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: #fff;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
