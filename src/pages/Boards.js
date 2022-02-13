import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    useEffect(() => {
        axios.get('/boards/').then((response) => {
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
  <h1><Link to="/createprojects"> 프로젝트 추가하기  </Link></h1>
  <h1><Link to="/createboard/"> 게시글 작성 </Link></h1>
</div>
<div className="content">
  <ul>
  {tableData ? tableData.map((row) => (
    <li>
      {row.id} | <Link to={"/boards/"+row.id}>
	  {row.title}
	  </Link> | {row.hit} | {row.createdAt.slice(0, 10)}
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
