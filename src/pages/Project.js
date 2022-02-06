import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const params = useParams();
    useEffect(() => {
        axios.get("/schedules/"+params.id).then((response) => {
        	console.log(response);    
        	setTableData(response.data[0]);
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
  <h2> 프로젝트 (<a href={"/updateprojects/"+params.id}>수정하기 </a>
	  / <a href={"/deleteprojects/"+params.id}>삭제하기</a>)</h2>
  <li>[이름 : {tableData.name}]</li>
  <li>[웹 링크 : {tableData.weblink}]</li>
  <li>[트위터 : {tableData.twitlink}]</li>
  <li>[디스코드 : {tableData.discordlink}]</li>
  <li>[민팅 가격 : {tableData.price}]</li>
  <li>[시장 최고가 : {tableData.high_price}]</li>
	    <hr />
{/*=================================*/}
  <h2> 사진 (<a href={"/projects/"+params.id+"/create"}>추가하기</a>) </h2>
	    <hr />
{/*=================================*/}
  <h2> 스케쥴 (<a href={"/projects/"+params.id+"/create"}>추가하기</a>) </h2>
  <ol>
  {tableData ? tableData.schedule.map((row) => (
    <li>[민팅 유형 : {row.category}]<br />
	  [날짜 : {row.date}]<br />
	  [시간 : {row.time}]<br />
	  [수량 : {row.count}]<br />
	  (<a href="">수정하기</a>)</li>
  )) : '' }
  </ol>
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
