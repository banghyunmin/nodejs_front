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
	    price: '',
	    etc: ''
    });
    const {category, date, time, count, price, etc} = inputs;
    // useEffect
    useEffect(() => {
        axios.get("/schedules/"+params.id+"/schedules/"+params.task).then((response) => {
	  console.log(response)
	  response.data = response.data
	  setInputs({
		category: response.data.category,
		date: response.data.date,
		time: response.data.time,
		count: response.data.count,
		price: response.data.price,
		etc: response.data.etc
	  })
        });
    }, []);

    const onDataChange = (e) => {
      const {value, name} = e.target
      setInputs({
	...inputs,
	[name]: value
      })
    }
    // UPDATE
    const updateApi = (e) => {
      axios.put('/schedules/'+params.id+'/schedules/'+params.task, {
	      category: category,
	      date: date,
	      time: time,
	      count: count,
	      price: price,
	      etc: etc
      }).then(function(response) {
            console.log("성공");
	    window.location.replace("/projects/"+params.id)
        })
        .catch(function(error) {
            console.log("실패 : ", error);
        })
    }
    // DELETE
    const deleteApi = (e) => {
      axios.delete('/schedules/'+params.id+'/schedules/'+params.task)
	.then(function(response) {
            console.log("성공", params.task);
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
	민팅 유형<input
	    style={tempStyle}
	    type="text"
	    placehoder="category"
	    name="category"
	    value={category}
	    onChange={onDataChange}
	/><br />
	민팅 날짜<input
	    style={tempStyle}
	    type="date"
	    placehoder="date"
	    name="date"
	    value={date}
	    onChange={onDataChange}
	/><br />
	민팅 시간<input
	    style={tempStyle}
	    type="time"
	    placehoder="time"
	    name="time"
	    value={time}
	    onChange={onDataChange}
	/><br />
	민팅 가격<input
	    style={tempStyle}
	    type="text"
	    placehoder="price"
	    name="price"
	    value={price}
	    onChange={onDataChange}
	/><br />
	민팅 수량<input
	    style={tempStyle}
	    type="text"
	    placehoder="count"
	    name="count"
	    value={count}
	    onChange={onDataChange}
	/><br />
	ㅁ비 고ㅁ<input
	    style={tempStyle}
	    type="text"
	    placehoder="etc"
	    name="etc"
	    value={etc}
	    onChange={onDataChange}
	/><br />
	<button onClick={updateApi} style={{margin:"50px", width:"100px", height:"50px"}}>수정하기</button>
	<button onClick={deleteApi} style={{margin:"50px", width:"100px", height:"50px"}}>삭제하기</button>
</div>
<div className="Footer">
</div>
</>
  )
}
