import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function ProjectCreate() {
    const params = useParams();
    const [inputs, setInputs] = useState({
	    title: ''
    });
    const {title} = inputs;
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
      console.log(file)
      setFiles(file)
    }
    // CREATE
    const createApi = (e) => {
      const formdata = new FormData();
      formdata.append('file', files[0]);
      formdata.append('title', title);
	    console.log(formdata)
      const config = {
	Headers: {
	  'content-type': 'multipart/form-data',
	},
      }
      axios.post('/guides/', formdata, config)
        .then(function(response) {
            console.log("성공");
	    window.location.replace("/guides/")
        })
        .catch(function(error) {
            console.log("실패");
        })
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
            </div>
            <div className="content">
            </div>
            <div className="Footer">

{/*======================================*/}
      <div>
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
	  onChange={onLoadFile} 
	/> <br />
	<button onClick={createApi} style={{margin:"10px", width:"100px", height:"50px"}}>CREATE</button>
      </div>
            </div>
        </>
    )
}
