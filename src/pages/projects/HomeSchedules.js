import React, {useState, useEffect} from 'react';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import axios from 'axios';

export default function Home(props) {
    const [tableData, setTableData] = useState('');
    useEffect(() => {
        axios.get('/projects/3/chedules').then((response) => {
          console.log(response.data);    
          setTableData(response.data);
        }).catch((err) => {
	  console.log(err)
	});
    }, []);

    const tempStyle = {
      width: "100px"
    }
    
    return (
	<div>
	</div>
    )
}
