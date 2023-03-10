import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { StyledList, MovieLink, StyledItem } from './MovieList.styled';

const MovieList = ({ results }) => {
  const location = useLocation();
  const elements = results.map(({ id, title }) => (
    <StyledItem key={id}>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <p>{title}</p>
      </MovieLink>
    </StyledItem>
  ));
  return <StyledList>{elements}</StyledList>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

MovieList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
