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
    // UPDATE
    const updateApi = (e) => {
      const formdata = new FormData();
      formdata.append('file', files[0]);
      const config = {
	Headers: {
	  'content-type': 'multipart/form-data',
	},
      }
      axios.put('/schedules/'+params.id+'/images/'+params.img, formdata, config)
        .then(function(response) {
            console.log("성공");
	    window.location.replace("/projects/"+params.id)
        })
        .catch(function(error) {
            console.log("실패");
        })
    }
    // DELETE
    const deleteApi = (e) => {
      axios.delete('/schedules/'+params.id+'/images/'+params.img)
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
  <h2>이미지 수정 및 삭제 페이지</h2>
</div>
<div className="content">
  사진 선택 : <input style={tempStyle} 
	  type="file" name="image" 
	  accept="image/png, image/jpeg" 
	  onChange={onLoadFile} 
  /> <br />
  <button onClick={updateApi} style={{margin:"50px", width:"100px", height:"50px"}}>수정</button>
  <button onClick={deleteApi} style={{margin:"50px", width:"100px", height:"50px"}}>삭제</button>
</div>
<div className="Footer">
</div>
</>
  )
}
