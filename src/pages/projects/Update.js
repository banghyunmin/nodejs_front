import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Update_inputs from './project_input.js';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const params = useParams();
    useEffect(() => {
        axios.get(`/schedules/`+params.id).then((response) => {
        setTableData(response.data);
        });
    }, []);

    const tempStyle = {
      width: "100px"
    }

    return (
        <>
            <div className="AppBar">
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
                                            <TableCell align="center"><b>프로젝트</b></TableCell>
                                            <TableCell align="center"><b>WEB</b></TableCell>
                                            <TableCell align="center"><b>TWITTER</b></TableCell>
                                            <TableCell align="center"><b>DISCORD</b></TableCell>
                                            <TableCell align="center"><b>민팅가격</b></TableCell>
                                            <TableCell align="center"><b>시장가격</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    { tableData ? (
                                        <TableRow key={tableData.id}>
                                            <TableCell component="th" scope="row">
					        {tableData.id}
					    </TableCell>
                                            <TableCell align="right">
                                                <div>{tableData.name}</div>
                                            </TableCell>
                                            <TableCell align="right"><a href={tableData.weblink}>WEB</a></TableCell>
                                            <TableCell align="right"><a href={tableData.twitlink}>TWITTER</a></TableCell>
                                            <TableCell align="right"><a href={tableData.discordlink}>DISCORD</a></TableCell>
                                            <TableCell align="right">{tableData.price}</TableCell>
                                            <TableCell align="right">{tableData.high_price}</TableCell>
                                        </TableRow>
                                    ) : '' }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="Footer">
	    	<Update_inputs param={params.id} />
            </div>
        </>
    )
}
