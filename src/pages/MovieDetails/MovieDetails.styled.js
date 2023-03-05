import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  padding: 10px 16px;
  background-color: F5F5F5;
`;

export const MovieWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const InfoWrap = styled.div`
  max-width: 500px;
`;

export const OverviewWrap = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const OverviewTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export const GoBack = styled.button`
  color: #f8f8ff;
  background-color: orangered;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  &:hover {
    background-color: #0000cd;
  }
`;

export const Image = styled.img`
  width: 200px;
`;
export const MovieTitle = styled.h1`
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 4px 8px;
  background-color: orangered;
  color: #f8f8ff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    background-color: #0000cd;
  }
  &.active {
    color: #000;
  }
`;

export const MovieInfoText = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Genres = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const GenresTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

// color: #f8f8ff;
// background-color: orangered;
// border: none;
// border-radius: 5px;
// padding: 5px 10px;
// margin-bottom: 10px;
// &:hover {
//   background-color: #0000cd;

//   display: flex;
// align-items: center;
// font-weight: 700;
// padding: 4px 8px;
// color: brown;
// border: 1px solid brown;
// &.active {
//   color: #0000cd;
// }
