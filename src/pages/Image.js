import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const params = useParams();
    useEffect(() => {
        axios.get("/schedules/"+params.id).then((response) => {
        console.log(response.data);    
        setTableData(response.data);
        });
    }, []);

    const tempStyle = {
      width: "100px",
      fontSize: "30px"
    }
    
    return (
<>
<div className="AppBar">
  <h1><a href={"/projects/"+params.id+"/create"}> 스케쥴 추가하기 </a></h1>
</div>
<div className="content">
  <ol>
  {tableData ? tableData[0].schedule.map((row) => (
  )) : '' }
  </ol>
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
