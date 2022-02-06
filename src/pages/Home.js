import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    useEffect(() => {
        axios.get(`/schedules/getall`).then((response) => {
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
  <Header />
  <div style={{height:"100px"}}></div>
  <h1><a href="/createprojects"> 프로젝트 추가하기  </a></h1>
</div>
<div className="content">
  <ul>
  {tableData ? tableData.map((row) => (
    <li>
      {row.id}
      <img style={tempStyle} src={row.image[0]} />
      <Link style={tempStyle} to={"/projects/"+row.id}>{row.name}</Link>
    </li>
  )) : '' }
  </ul>
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
