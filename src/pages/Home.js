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
  <h1><Link to="/projects/"> 프로젝트 관리 </Link></h1>
  <h1><Link to="/boards/"> 게시판 관리 </Link></h1>
  <h1><Link to="/guides/"> 초보자 가이드 관리 </Link></h1>
</div>
<div className="content">
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
