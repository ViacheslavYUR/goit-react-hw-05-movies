import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTrending } from 'shared/services/fetch-api';

import MovieList from 'components/MovieList/MovieList';
import Loader from 'shared/Loader/Loader';
import { PaginationStyled } from 'shared/Pagination.syled';
import { Main } from './Home.styled';

const Home = () => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const currentPage = Number(params.get('page')) ? Number(params.get('page')) : 1;

  useEffect(() => {
    const getTrending = async page => {
      try {
        setLoading(true);
        const { results, total_pages } = await fetchTrending(page);
        setItems(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTrending(currentPage);
  }, [currentPage]);

  const handleClick = e => {
    setParams({ page: e.selected + 1 });
  };

  return (
    <Main>
      <h1>Trending today</h1>
      <MovieList results={items} />
      {loading && <Loader />}
      {totalPages > 1 && (
        <PaginationStyled
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          forcePage={currentPage - 1}
        />
      )}
    </Main>
  );
};

export default Home;
