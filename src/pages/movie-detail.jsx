import { Helmet } from 'react-helmet-async';

import { MovieDetail } from 'src/sections/movieDetail/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Movies Details </title>
      </Helmet>

      <MovieDetail />
    </>
  );
}
