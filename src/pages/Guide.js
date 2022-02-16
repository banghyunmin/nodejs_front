import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const params = useParams();
    useEffect(() => {
        axios.get("/guides/"+params.id)
	  .then((response) => {
            setTableData(response.data);
	    console.log(response.data);
	  }).catch(err => {
	  });
    }, []);


    // 수정하기 
    const updateApi = (e) => {
    }
    // 삭제하기
    const deleteApi = (e) => {
      axios.delete('/guides/'+params.id, {
	      id: params.id
      }).then(function(response) {
	    window.location.replace("/guides/")
        })
        .catch(function(error) {
        })
    }

    return (
<>
<div className="AppBar">
  <Header />
  <div style={{height:"100px"}}></div>
  <h2><Link to="/guides">초보자 가이드 관리</Link></h2>

  <button onClick={{}} style={{margin:"5px", width:"80px", height:"40px"}}>수정</button>
  <button onClick={deleteApi} style={{margin:"5px", width:"80px", height:"40px"}}>삭제</button>

  <hr />
</div>
<div className="content">

<img src={tableData.image} style={{width:"100%"}}/>

</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
