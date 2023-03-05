import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style: circle;
  padding: 10px 5px;
  margin-left: 15px;
`;
export const StyledItem = styled.li`
  padding: 5px 5px;
  color: black;
`;

export const MovieLink = styled(NavLink)`
  color: black;
  &:hover {
    color: #0000cd;
    font-weight: 600;
  }
`;
