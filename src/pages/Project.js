import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const [imageData, setImageData] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);
    const [bestData, setBestData] = useState([]);
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
        }).then(() => {
          axios.get("/schedules/0/bests/"+params.id)
	    .then((resBests) => {
              console.log("bests : ", resBests);    
	      setBestData(resBests.data)
	    }).catch((err) => {
	      console.log("get bests err : ", err)
	    })
	}).catch(err => {
		console.log("GET ERROR: ", err)
	});
    }, []);

    const tempStyle = {
      width: "100px",
      fontSize: "30px"
    }

    // 등록하기 
    const postApi = (e) => {
      axios.post('/schedules/'+params.id+'/bests/', {
	      proj_id: params.id
      }).then(function(response) {
            console.log("성공");
	    window.location.replace("/projects/"+params.id)
        })
        .catch(function(error) {
            console.log("실패 : ", error);
        })
    }
    // 취소하기
    const deleteApi = (e) => {
      axios.delete('/schedules/'+params.id+'/bests/', {
	      proj_id: params.id
      }).then(function(response) {
            console.log("성공");
	    window.location.replace("/projects/"+params.id)
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
  {bestData ? (
    <div style={{color:"red"}}>인기 프로젝트로 등록되어있습니다.
<button onClick={deleteApi} style={{margin:"50px", width:"100px", height:"50px"}}>취소하기</button>
    </div>
  ) : (
    <div style={{}}>인기 프로젝트가 아닙니다.
<button onClick={postApi} style={{margin:"50px", width:"100px", height:"50px"}}>등록하기</button>
    </div>
  )}
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
