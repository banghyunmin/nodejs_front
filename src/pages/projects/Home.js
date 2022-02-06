import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../component/Header.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    useEffect(() => {
        axios.get(`/schedules`).then((response) => {
        console.log(response.data);    
        setTableData(response.data);
        });
    }, []);

    const tempStyle = {
      width: "100px"
    }
    
    return (
        <>
            <div className="AppBar">
	    	    <h1><a href="/create"> CREATE </a></h1>
	    </div>
            <div className="content">
                <Box 
                    sx={{ 
                        marginTop : 20,
                        height: 'auto',
                        marginBottom : 7
                    }}
                >
                    <Grid 
                        container 
                        justifyContent="center" 
                        alignItems="center"
                    >
                        <Grid item xs={11}>
                            <TableContainer component={Paper}>
                                <Table stickyHeader sx={{ minWidth: 800 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center"><b>ID</b></TableCell>
                                            <TableCell align="center"><b>사진</b></TableCell>
                                            <TableCell align="center"><b>프로젝트</b></TableCell>
                                            <TableCell align="center"><b>WEB</b></TableCell>
                                            <TableCell align="center"><b>TWITTER</b></TableCell>
                                            <TableCell align="center"><b>DISCORD</b></TableCell>
                                            <TableCell align="center"><b>날짜</b></TableCell>
                                            <TableCell align="center"><b>수량</b></TableCell>
                                            <TableCell align="center"><b>민팅가격</b></TableCell>
                                            {/* tooltip 추가하기 */}
                                            <TableCell align="center"><b>시장가격</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    { tableData ? tableData.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
					        {row.id}
					    </TableCell>
                                            <TableCell align="right">
					    <a href={"/update/"+row.id}>
					    <img style={tempStyle} src={row.image} />
					    </a>
					    </TableCell>
                                            <TableCell align="right">
					    <a href={"/update/"+row.id+"?visible=text"}>
                                                <div>{row.name}</div>
					    </a>
                                            </TableCell>
                                            <TableCell align="right"><a href={row.weblink}>WEB</a></TableCell>
                                            <TableCell align="right"><a href={row.twitlink}>TWITTER</a></TableCell>
                                            <TableCell align="right"><a href={row.discordlink}>DISCORD</a></TableCell>
                                            <TableCell align="right">{row.date}</TableCell>
                                            <TableCell align="right">{row.count}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{row.high_price}</TableCell>
                                        </TableRow>
                                    )) : '' }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </>
    )
}
