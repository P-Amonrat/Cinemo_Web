import { Helmet } from 'react-helmet-async';

import { FavoriteMovie } from 'src/sections/favoriteMovie/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Favorite Movie </title>
      </Helmet>

      <FavoriteMovie />
    </>
  );
}
