import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from 'pages/NotFound/NotFoundPage';

import { fetchCredits } from 'shared/services/fetch-api';

import { CastList, CastItem, ActorWrap } from './Cast.styled';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchCredits(movieId);
        setMovieCast(cast);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {error && <NotFoundPage />}
      {movieCast.length ? (
        <CastList>
          {movieCast.slice(0, 12).map(actor => (
            <CastItem key={actor.cast_id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://via.placeholder.com/200`
                }
                alt={`${actor.name}`}
              />
              <ActorWrap>
                <p>{actor.name}</p>
                <p>
                  Character:
                  <span>{actor.character}</span>
                </p>
              </ActorWrap>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default MovieCast;
