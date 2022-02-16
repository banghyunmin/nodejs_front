import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    useEffect(() => {
        axios.get("/guides/")
	  .then((response) => {
            setTableData(response.data);
	    console.log(response.data);
	  }).catch(err => {
	  });
    }, []);


    return (
<>
<div className="AppBar">
  <Header />
  <div style={{height:"100px"}}></div>
  <h1><Link to="/createguide/"> 가이드 작성하기 </Link></h1>

  <hr />
</div>
<div className="content">

  <ul>
  {tableData ? tableData.map((row) => (
    <li>
      {row.id} | <Link to={"/guides/"+row.id}>{row.title}</Link>
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
