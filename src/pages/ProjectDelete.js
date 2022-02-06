import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function ProjectCreate() {
    const params = useParams();
    // DELETE
    const deleteApi = (e) => {
      axios.delete('/schedules/'+params.id)
	.then(function(response) {
            console.log("성공");
	    window.location.replace("/")
        })
        .catch(function(error) {
            console.log("실패 : ", error);
        })
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
      <div>
	<div><h2 style={{color:"red"}}>
	    프로젝트에 포함된 이미지와 스케쥴들도 모두 삭제됩니다.<br />
	    해당 프로젝트를 삭제하시겠습니까?
	</h2></div>
	<button onClick={deleteApi} style={{margin:"50px", width:"100px", height:"50px"}}>DELETE</button>
      </div>
            </div>
        </>
    )
}
