import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Func() {
  const params = useParams();
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

// File SETTING
    const [files, setFiles] = useState('');

    const onLoadFile = (e) => {
      const file = e.target.files;
      console.log(file)
      setFiles(file)
    }
    // CREATE
    const createApi = (e) => {
      const formdata = new FormData();
      formdata.append('file', files[0]);
      const config = {
	Headers: {
	  'content-type': 'multipart/form-data',
	},
      }
      axios.post('/schedules/'+params.id+'/images/', formdata, config)
        .then(function(response) {
            console.log("성공");
	    window.location.replace("/projects/"+params.id)
        })
        .catch(function(error) {
            console.log("실패");
        })
    }
    // STYLE
    const tempStyle = {
      width: "80%",
      height: "70px",
      fontSize: "50px"
    }

  return (
<>
<div className="AppBar">
  <Header />
  <div style={{height:"100px"}}></div>
  <h2>이미지 추가 페이지</h2>
</div>
<div className="content">
  사진 선택 : <input style={tempStyle} 
	  type="file" name="image" 
	  accept="image/png, image/jpeg" 
	  onChange={onLoadFile} 
  /> <br />
  <button onClick={createApi} style={{margin:"50px", width:"100px", height:"50px"}}>CREATE</button>
</div>
<div className="Footer">
</div>
</>
  )
}
