import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const [imageData, setImageData] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get("/schedules/"+params.id)
	  .then((response) => {
          axios.get("/schedules/"+params.id+"/images/")
	    .then((resImages) => {
              console.log("images : ", resImages.data);    
	      setImageData(resImages.data)
	    }).catch((err) => {
	      console.log("get images err : ", err)
	    })
              console.log("all : ", response);    
              setTableData(response.data[0]);
        }).then(() => {
          axios.get("/schedules/"+params.id+"/schedules/")
	    .then((resSchedules) => {
              console.log("schedules : ", resSchedules);    
	      setScheduleData(resSchedules.data)
	    }).catch((err) => {
	      console.log("get schedules err : ", err)
	    })
	}).catch(err => {
		console.log("GET ERROR: ", err)
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
</div>
<div className="content">
  <h2> 프로젝트 (<Link to={"/updateprojects/"+params.id}>수정하기 </Link>
	  / <Link to={"/deleteprojects/"+params.id}>삭제하기</Link>)</h2>
  <li>[이름 : {tableData.name}]</li>
  <li>[웹 링크 : {tableData.weblink}]</li>
  <li>[트위터 : {tableData.twitlink}]</li>
  <li>[디스코드 : {tableData.discordlink}]</li>
  <li>[민팅 가격 : {tableData.price}] [시장 최고가 : {tableData.high_price}]</li>
  <li>[대표 날짜 : {tableData.date}] [총 수량 : {tableData.count}]</li>



{/*=================================*/}



	    <hr />
  <h2> 사진 (<Link to={"/projects/"+params.id+"/createimage"}>추가하기</Link>) </h2>
  <ol>
  {imageData ? imageData.map((row) => (
    <li><img style={tempStyle} src={row.image} /> 
	  (<Link to={"/projects/"+params.id+"/updateimage/"+row.id}>수정하기</Link>)</li>
  )) : '' }
  </ol>



{/*=================================*/}



	    <hr />
  <h2> 스케쥴 (<Link to={"/projects/"+params.id+"/createschedule"}>추가하기</Link>) </h2>
  <ol>
  {scheduleData ? scheduleData.map((row) => (
    <li>[민팅 유형 : {row.category}]<br />
	  [날짜 : {row.date}]<br />
	  [시간 : {row.time}]<br />
	  [수량 : {row.count}]<br />
	  (<Link to={"/projects/"+params.id+"/updateschedule/"+row.id}>수정하기</Link>)</li>
  )) : '' }
  </ol>
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
