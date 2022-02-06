import React, {useState, useEffect} from 'react';
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
      <a href={"/images/"+row.id}><img style={tempStyle} src={row.image} /></a>
      <a style={tempStyle} href={"/projects/"+row.id}>{row.name}</a>
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
