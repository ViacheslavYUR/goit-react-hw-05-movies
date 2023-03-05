import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }

  & li {
    color: ${p => 'grey'};

    transition: color 250ms linear;

    :hover:not(.disabled) {
      color: ${p => 'black'};
    }
  }

  & .activePage {
    color: ${p => 'red'};
  }

  & a {
    padding: 0 8px;
    cursor: pointer;
  }

  & a.disabled {
    cursor: default;
  }
`;
