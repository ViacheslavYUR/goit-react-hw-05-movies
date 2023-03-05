import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchMovieById } from 'shared/services/fetch-api';
import NotFoundPage from 'pages/NotFound/NotFoundPage';

import * as MovieDetail from './MovieDetails.styled';

const {
  Main,
  MovieWrap,
  Wrapper,
  InfoWrap,
  OverviewWrap,
  OverviewTitle,
  GoBack,
  Image,
  MovieTitle,
  MovieInfoText,
  Genres,
  GenresTitle,
  StyledLink,
} = MovieDetail;

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const result = await fetchMovieById(id);
        setMovieInfo(result);
      } catch ({ response }) {
        console.log(response.data.message);
        setError(true);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const goBack = () => navigate(from);

  return (
    <Main>
      <GoBack onClick={goBack}>Go Back</GoBack>
      {error && <NotFoundPage />}
      {movieInfo && (
        <MovieWrap>
          <Image
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`
                : 'https://via.placeholder.com/200'
            }
            alt={movieInfo.tagline}
          />
          <InfoWrap>
            <MovieTitle>
              <span>{movieInfo.title}</span>
              <span>{`(${movieInfo.release_date.slice(0, 4)})`}</span>
            </MovieTitle>
            <MovieInfoText>Popularity: {Math.ceil(movieInfo.popularity)}</MovieInfoText>
            <OverviewWrap>
              <OverviewTitle>Overview</OverviewTitle>
              {movieInfo.overview}
            </OverviewWrap>
            <Genres>
              <GenresTitle>Genre:</GenresTitle>
              <span>{movieInfo.genres && movieInfo.genres.map(genre => genre.name).join(', ')}</span>
            </Genres>
          </InfoWrap>
        </MovieWrap>
      )}

      <Wrapper>
        <StyledLink to="cast" state={{ from }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from }}>
          Reviews
        </StyledLink>
      </Wrapper>

      <Outlet />
    </Main>
  );
};

export default MovieDetails;
