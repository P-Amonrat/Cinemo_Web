import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getDetailById, getFavoriteList } from 'src/reducers/movieSlice';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const MovieDetail = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { favoritList, item } = useSelector((state) => state.movie)

    const onClickFavorite = () => {
        dispatch(getFavoriteList(item))
    }

    useEffect(() => {
        const { data } = location.state

        if (data) {
            dispatch(getDetailById(data))
        }
    }, [location, dispatch])

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }}>
                Movies Detail
            </Typography>

            {!favoritList ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </div>) : null}

            <Grid
                marginTop={5}
                container
                item
            >
                <Grid
                    marginTop={3}
                    xl={12}
                    container
                    item
                    rowSpacing={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid
                        marginTop={3}
                        xs={12}
                        md={6}
                        container
                        item
                        direction="row"
                        justifyContent="space-between"
                    // alignItems="center"
                    >
                        <Grid item xs={12} sm={6} md={6}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={item?.poster_url}
                                alt="Paella dish"
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={5}
                            md={5}
                            item
                            justifyContent="start"
                            alignItems="start"
                        >
                            <Grid
                                md={12}
                                container
                                item
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item md={10}>
                                    <Typography color="#ECAF00" fontWeight={900}>
                                        {item?.release_date}
                                    </Typography>
                                    <Typography marginTop={1} fontSize={20} fontWeight={600}>
                                        {item?.title_th}
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <IconButton size='large' aria-label="add to favorites" onClick={onClickFavorite}>
                                        {favoritList?.find(a => a.id === item?.id) ?
                                            <FavoriteOutlinedIcon />
                                            : <FavoriteBorderOutlinedIcon />}
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Typography fontWeight={600}>
                                {item?.genre.split('/').join('/ ')}
                            </Typography>
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="start"
                                alignItems="center"
                                style={{marginTop: "10px"}}
                            >
                                <AccessTimeRoundedIcon />
                                <Typography fontWeight={400} marginLeft={2}>
                                    {item?.duration} นาที
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        marginTop={3}
                        xs={12} md={5}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardMedia component="iframe" height="350" src={item?.tr_mp4} autoPlay />
                    </Grid>
                </Grid>
                <Grid item xl={12} marginTop={7}>
                    <Typography marginTop={1} color="#ECAF00" fontSize={20} fontWeight={600}>
                        ข้อมูลภาพยนต์
                    </Typography>
                    <Typography marginTop={2} fontSize={18} fontWeight={600}>
                        นักแสดง
                    </Typography>
                    <Grid item padding={2} container md={12} xl={12}>
                        {item && item?.actor.split('/').map((list, index) => (
                            <Grid key={index} item padding={1}>
                                <Chip label={list} variant="outlined" />
                            </Grid>
                        ))}
                    </Grid>

                    <Typography marginTop={3} fontSize={18} fontWeight={600}>
                        ผู้กำกับ
                    </Typography>
                    <Grid padding={2} container item md={12} xl={12}>
                        {item && item?.director.split('/').map((list, index) => (
                            <Grid key={index} item padding={1}>
                                <Chip label={list} variant="outlined" />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography marginTop={3} fontSize={18} fontWeight={600}>
                        เรื่องย่อ
                    </Typography>
                    <Typography marginTop={2} fontSize={16} fontWeight={400}>
                        {item?.synopsis_th}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MovieDetail