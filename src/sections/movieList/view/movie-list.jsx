import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList } from 'src/reducers/movieSlice';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

export default function MovieList() {
  const navigate = useNavigate()
  const movieList = useSelector((state) => state.movie.value);
  const dispatch = useDispatch();

  const handleToDetail = (value) => {
    navigate("/movie/detail", { state: { data: value } });
  }

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);


  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Movies List
      </Typography>

      {movieList.length <= 0 ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>) : null}

      <Grid container spacing={1}>
        {movieList.map((items) => (
          <Grid key={items.id} xs={12} sm={4} md={3}>
            <Card style={{cursor: "pointer"}} onClick={() => handleToDetail(items)}>
              <CardHeader
                style={{ height: "100px" }}
                title={`${items.title_th}`}
                subheader={
                  <Typography
                    variant="subtitle2"
                    color="#ECAF00"
                    marginBottom={2}
                    fontSize={16}
                  >
                    {items.release_date}
                  </Typography>
                }
              />
              <CardMedia
                component="img"
                height="350"
                image={items.poster_url}
                alt="Paella dish"
              />
              <CardContent style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">
                  {items.genre.split('/').join('/ ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {items.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
