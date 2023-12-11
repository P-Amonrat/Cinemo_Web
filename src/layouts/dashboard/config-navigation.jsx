// import SvgColor from 'src/components/svg-color';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

// ----------------------------------------------------------------------

// const icon = (name) => (
//   <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
// );

const navConfig = [
  {
    title: 'Movie List',
    path: '/movie',
    icon: <MovieCreationTwoToneIcon />,
  },
  {
    title: 'Favorite Movie',
    path: '/movie/favorite',
    icon: <BookmarksTwoToneIcon />,
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <LogoutTwoToneIcon />,
  }
];

export default navConfig;
