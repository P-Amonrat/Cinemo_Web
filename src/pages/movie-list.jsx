import { Helmet } from 'react-helmet-async';

import { MovieList } from 'src/sections/movieList/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Movies list </title>
      </Helmet>

      <MovieList />
    </>
  );
}
