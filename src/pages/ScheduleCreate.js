import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Func() {
  const params = useParams();
    const [inputs, setInputs] = useState({
	    category: '',
	    date: '',
	    time: '',
	    count: '',
    });
    const {category, date, time, count} = inputs;

    const onDataChange = (e) => {
      const {value, name} = e.target
      setInputs({
	...inputs,
	[name]: value
      })
    }
    // CREATE
    const createApi = (e) => {
      axios.post('/schedules/'+params.id+'/schedules/', {
	      category: category,
	      date: date,
	      time: time,
	      count: count,
      }).then(function(response) {
            console.log("성공");
	    window.location.replace("/projects/"+params.id)
        })
        .catch(function(error) {
            console.log("실패 : ", error);
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
  <h2>스케쥴 추가 페이지</h2>
</div>
<div className="content">
	category<input
	    style={tempStyle}
	    type="text"
	    placehoder="category"
	    name="category"
	    value={category}
	    onChange={onDataChange}
	/><br />
	date<input
	    style={tempStyle}
	    type="date"
	    placehoder="date"
	    name="date"
	    value={date}
	    onChange={onDataChange}
	/><br />
	time<input
	    style={tempStyle}
	    type="time"
	    placehoder="time"
	    name="time"
	    value={time}
	    onChange={onDataChange}
	/><br />
	count<input
	    style={tempStyle}
	    type="text"
	    placehoder="count"
	    name="count"
	    value={count}
	    onChange={onDataChange}
	/><br />
	<button onClick={createApi} style={{margin:"50px", width:"100px", height:"50px"}}>CREATE</button>
</div>
<div className="Footer">
</div>
</>
  )
}
