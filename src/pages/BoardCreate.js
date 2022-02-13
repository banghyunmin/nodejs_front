import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function ProjectCreate() {
    const params = useParams();
    const [inputs, setInputs] = useState({
	    user_id: '',
	    user_pw: '',
	    title: '',
	    content: ''
    });
    const {user_id, user_pw, title, content} = inputs;
    const onDataChange = (e) => {
      const {value, name} = e.target
      setInputs({
	...inputs,
	[name]: value
      })
    }

// File SETTING
    const [files, setFiles] = useState('');

    const onLoadFile = (e) => {
      const file = e.target.files;
      console.log(file.length)
      if(file.length > 3) {
	alert("사진은 최대 3장까지만 가능합니다")
      }
      setFiles(file)
    }
    // CREATE
    const createApi = (e) => {
      const formdata = new FormData();
	    console.log("test:", files)
      for(var i = 0; i < 3; i++) {
        formdata.append('files', files[i]);
      }
      const config = {
	Headers: {
	  'content-type': 'multipart/form-data',
	},
      }

      axios.post('/boards', {
	user_id: user_id,
	user_pw: user_pw,
	title: title,
	content: content
      }).then((response) => {
	      console.log(response)

	axios.post('/boards/'+response.data.id+'/images/', formdata, config)
	.then((resImage) => {
	}).catch((err) => {
	  axios.delete('/boards/'+response.data.id)
	  .then((res) => {}).catch((err) => {})
	})


	return response
      }).then((res2) => {
	  window.location.replace("/boards/"+res2.data.id)
      }).catch((error) => {})

    }

    useEffect(() => {

    }, []);


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
  <h2>게시글 추가 페이지</h2>
            </div>
            <div className="content">
            </div>
            <div className="Footer">

{/*======================================*/}
      <div>
	<div><h2></h2></div>
	ID<input
	    type="text"
	    placehoder="user_id"
	    name="user_id"
	    value={user_id}
	    onChange={onDataChange}
	/>
	PW<input
	    type="text"
	    placehoder="user_pw"
	    name="user_pw"
	    value={user_pw}
	    onChange={onDataChange}
	/>
	<br /> <hr />
	제목<input
	    style={tempStyle}
	    type="text"
	    placehoder="title"
	    name="title"
	    value={title}
	    onChange={onDataChange}
	/><br />
	사진 선택 : <input style={{width:"60%", margin:"5px"}} 
	  type="file" name="image" 
	  accept="image/png, image/jpeg" 
	  multiple
	  onChange={onLoadFile} 
	/> <br />
	<input
	    style={{
	      width:"80%",
	      height:"300px",
	      margin:"50px",
	    }}
	    type="text"
	    placehoder="content"
	    name="content"
	    value={content}
	    onChange={onDataChange}
	/><br />
	<button onClick={createApi} style={{margin:"10px", width:"100px", height:"50px"}}>CREATE</button>
      </div>
            </div>
        </>
    )
}
