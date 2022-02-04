import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home(props) {
    const [tableData, setTableData] = useState('');
    useEffect(() => {
        axios.get('/projects/3/images/').then((response) => {
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
	{ tableData ? tableData.map((row) => (
	  <img src={row} style={tempStyle} />
        )) : '' }
	</div>
    )
}
