import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Image from 'next/image'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import {Button, Grid, ImageList, ImageListItem, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoImage from "../public/assets/images/logo.png";
import ArrowDownImage from "../public/assets/images/arrow_down.png";
import TwitterImage from "../public/assets/images/twitter.png";
import CardImage from "../public/assets/images/master_card.png";
import TelegramImage from "../public/assets/images/telegram.png";
import {ClearFix, HomeButton} from "../components/widgets";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import FirstImage from "../public/assets/images/first.png";
import SecondImage from "../public/assets/images/second.png";
import ThirdImage from "../public/assets/images/third.png";
import FourthImage from "../public/assets/images/fourth.png";


const Home: NextPage = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ];
    return (
        <Container maxWidth={"xl"}>
            <AppBar position="static" sx={{backgroundColor: "#131325"}} elevation={0}>
                <Toolbar disableGutters variant={"dense"} sx={{minHeight: 100}}>
                    <Image src={LogoImage} alt={"Logo"} width={197} height={36}/>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: 'flex'}}>
                        <Button
                            onClick={() => {
                            }}
                            sx={{my: 2, color: 'white', display: 'block', fontSize: "16px", mx: 3}}
                        >
                            About
                        </Button>
                        <Button
                            onClick={() => {
                            }}
                            sx={{my: 2, color: 'white', display: 'block', fontSize: "16px", mx: 3}}
                        >
                            Projects
                        </Button>
                        <Button
                            onClick={() => {
                            }}
                            sx={{my: 2, color: 'white', display: 'block', fontSize: "16px", mx: 3}}
                        >
                            Get in touch
                        </Button>
                        <Button
                            onClick={() => {
                            }}
                            sx={{my: 2, color: 'white', fontSize: "16px", mx: 7}}
                            endIcon={<MenuIcon/>}
                        >
                            Menu
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component={"div"} sx={{height: "100vh", position: "relative", paddingTop: "80px", paddingBottom: "100px"}}>
                <Grid container spacing={10}>
                    <Grid item xs={7}>
                        <Stack direction={"column"}>
                            <Typography component={"h1"} sx={{color: 'white', textTransform: "uppercase", fontSize: "70px"}}>We Make</Typography>
                            <Typography component={"h1"} sx={{color: 'white', textTransform: "uppercase", fontSize: "70px"}}>Creative Things</Typography>
                            <Typography component={"h1"} sx={{color: '#7265FD', textTransform: "uppercase", fontSize: "70px"}}>EveryDay.</Typography>
                            <ClearFix sx={{height: "80px"}}/>
                            <Box>
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Button onClick={() => {
                                    }} startIcon={<ArrowForwardIcon sx={{color: 'white', fontSize: "16px"}}/>}>
                                        <Typography component={"span"} sx={{color: 'white', fontSize: "16px", marginLeft: "10px", textTransform: "capitalize"}}>Tribe services</Typography>
                                    </Button>
                                    <Stack direction={"column"}>
                                        <Typography component={"span"} sx={{color: 'white', fontSize: "16px", marginLeft: "20px", textTransform: "capitalize"}}>We build readymade websites, mobile</Typography>
                                        <Typography component={"span"} sx={{color: 'white', fontSize: "16px", marginLeft: "20px", textTransform: "capitalize"}}>applications, and elaborate online business</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <ClearFix sx={{height: "80px"}}/>
                            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"}>
                                <HomeButton onClick={() => {
                                }}>
                                    <Typography component={"span"} variant={"subtitle1"}>WebSites</Typography>
                                </HomeButton>
                                <HomeButton onClick={() => {
                                }}>
                                    <Typography component={"span"} variant={"subtitle1"}>Development</Typography>
                                </HomeButton>
                                <HomeButton onClick={() => {
                                }}>
                                    <Typography component={"span"} variant={"subtitle1"}>Apps</Typography>
                                </HomeButton>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={5}>
                        <ImageList variant="masonry" cols={2} gap={80}>
                            <ImageListItem>
                                <Image src={FirstImage}/>
                            </ImageListItem>
                            <ImageListItem sx={{marginTop: "100px"}}>
                                <Image src={ThirdImage}/>
                            </ImageListItem>
                            <ImageListItem sx={{marginTop: "80px"}}>
                                <Image src={SecondImage}/>
                            </ImageListItem>
                            <ImageListItem>
                                <Image src={FourthImage}/>
                            </ImageListItem>
                        </ImageList>
                        {/*<Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Image src={FirstImage}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Image src={SecondImage}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Image src={ThirdImage}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Image src={FourthImage}/>
                            </Grid>
                        </Grid>*/}
                        {/*<Box sx={{position: "relative", width: "100%", height: "100%"}}>
                            <Box sx={{position: "absolute", left: 0, top: 0}}>
                                <Image src={FirstImage}/>
                            </Box>
                            <Box sx={{position: "absolute", left: 0, bottom: 0}}>
                                <Image src={ThirdImage}/>
                            </Box>
                        </Box>*/}
                    </Grid>
                </Grid>
            </Box>
            <AppBar position="fixed" sx={{top: 'auto', bottom: 0, backgroundColor: "#131325"}} elevation={0}>
                <Container maxWidth={"xl"}>
                    <Toolbar disableGutters variant={"dense"} sx={{minHeight: 100}}>
                        <Stack width={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Button onClick={() => {
                            }}>
                                <Image src={ArrowDownImage} width={50} height={50}/>
                                <Typography component={"span"} sx={{color: 'white', fontSize: "16px", marginLeft: "20px", textTransform: "capitalize"}}>Explore Tribe</Typography>
                            </Button>
                            <Typography component={"span"} sx={{opacity: 0.3, fontSize: "16px"}}>Digital Agency</Typography>
                            <Stack direction={"row"} spacing={2}>
                                <Box>
                                    <Image src={TwitterImage} width={30} height={30}/>
                                </Box>
                                <Box>
                                    <Image src={CardImage} width={30} height={30}/>
                                </Box>
                                <Box>
                                    <Image src={TelegramImage} width={30} height={30}/>
                                </Box>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Container>
    );
}

export default Home
