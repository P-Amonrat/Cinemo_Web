import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import { useSelector } from 'react-redux';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom'

const MovieFavorite = () => {
  const navigate = useNavigate()
  const favoritList = useSelector((state) => state.movie.favoritList)

  const handleToDetail = (value) => {
    navigate("/movie/detail", { state: { data: value } });
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Favorite Movies List
      </Typography>

      {favoritList.length <= 0 ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" style={{ color: 'gray' }}>
            No Favirite Movoie List
          </Typography>
        </div>) : (
        <Grid container spacing={1}>
          {favoritList.map((list) => (
            <Grid key={list.id} xs={12} sm={6} md={3}>
              <Card style={{ cursor: "pointer" }} onClick={() => handleToDetail(list)}>
                <CardHeader
                  style={{ height: "100px" }}
                  title={`${list.title_th}`}
                  subheader={
                    <Typography
                      variant="subtitle2"
                      color="#ECAF00"
                      marginBottom={2}
                      fontSize={16}
                    >
                      {list.release_date}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  height="350"
                  image={list.poster_url}
                  alt="Paella dish"
                />
                <CardContent style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">
                    {list.genre.split('/').join('/ ')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {list.rating}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

    </Container>
  );
}

export default MovieFavorite