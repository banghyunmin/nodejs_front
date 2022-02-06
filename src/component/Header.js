import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';

import logo from '../img/logo.png';
import hanguelLogo from '../img/hanguelLogo.png';

export default function Header() {
    return (
        <>
            <AppBar position="fixed" color="default" sx={{ height: 100, justifyContent: 'center' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Grid xs={4}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: 'start' } }}>
                                <Link to="/">
                                    <img
                                        alt="hanguelLogo"
                                        src={hanguelLogo}
                                        style={{ width:210, height:120, margin:'auto' }}
                                        
                                    />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid xs={4}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: 'center' } }}>
                                <Link to="/">
                                    <img
                                        alt="logo"
                                        src={logo}
                                        style={{ width:210, height:140, margin:'auto' }}
                                        
                                    />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid xs={4}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: 'end' } }}>
                                <IconButton sx={{ p: 0 }}>
                                    <TwitterIcon/>
                                    {/* <FaDiscord/> */}
                                </IconButton>
                            </Box>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}
