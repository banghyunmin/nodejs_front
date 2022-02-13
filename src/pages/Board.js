import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {
    const [tableData, setTableData] = useState('');
    const [imageData, setImageData] = useState([]);
    const [replyData, setReplyData] = useState([]);
    const [inputs, setInputs] = useState({
	    user_id: '',
	    user_pw: '',
	    content: ''
    });
    const {user_id, user_pw, content} = inputs;
    const onDataChange = (e) => {
      const {value, name} = e.target
      setInputs({
	...inputs,
	[name]: value
      })
    }
    const params = useParams();
    useEffect(() => {
        axios.get("/boards/"+params.id)
	  .then((response) => {
            setTableData(response.data);

            axios.get("/boards/"+params.id+"/images/")
	    .then((resImages) => {
	      setImageData(resImages.data)
	    }).catch((err) => {
	    })

        }).then(() => {

          axios.get("/boards/"+params.id+"/replys/")
	  .then((resReplys) => {
	    setReplyData(resReplys.data)
	  }).catch((err) => {
	  })

	}).catch(err => {
	});
    }, []);

    const tempStyle = {
      width: "100px",
      fontSize: "30px"
    }

    // 댓글작성 
    const replyApi = (e) => {

	    console.log(inputs)
      axios.post('/boards/'+params.id+'/replys/', {
	      user_id: user_id,
	      content: content
      }).then(function(response) {
	    window.location.replace("/boards/"+params.id)
      }).catch(function(error) {})

    }
    // 수정하기 
    const updateApi = (e) => {
      axios.post('/boards/'+params.id+'/bests/', {
	      proj_id: params.id
      }).then(function(response) {
	    window.location.replace("/boards/")
      }).catch(function(error) {})
    }
    // 삭제하기
    const deleteApi = (e) => {
      axios.delete('/boards/'+params.id, {
	      board_id: params.id
      }).then(function(response) {
	    window.location.replace("/boards/")
        })
        .catch(function(error) {
        })
    }

    return (
<>
<div className="AppBar">
  <Header />
  <div style={{height:"100px"}}></div>
</div>
<div className="content">


<h1><Link to="/boards/">민팅 자랑 게시판</Link></h1>
{/*=================================*/}

  <div>
    <h2>{tableData.title}</h2>
    작성자 : {tableData.user_id} | 작성 날짜 : {tableData.createdAt}
{/*=================================*/}
	    <hr />
  <div>
  {imageData ? imageData.map((row) => (
    <div><img style={tempStyle} src={row.image} /></div>
  )) : '' }
  </div>
{/*=================================*/}
    <p>
      {tableData.content}
    </p>

    조회수 : {tableData.hit}
  </div>


{/*=================================*/}
    <button onClick={updateApi} style={{margin:"5px", width:"80px", height:"40px"}}>수정하기</button>
    <button onClick={deleteApi} style={{margin:"5px", width:"80px", height:"40px"}}>삭제하기</button>
  <hr />
  <ul>
  {replyData ? replyData.map((row) => (
    <li>
      [{row.user_id}] | [작성일 : {row.createdAt.slice(0, 10)} {row.createdAt.slice(11, 16)}]<br />
      <p>{row.content}</p><br />
    </li>
  )) : '' }
  </ul>
{/*=================================*/}
  <div style={{width:"80%", margin:"50px"}}>
    <div style={{width:"50%"}}>ID <input 
		name="user_id" 
		value={user_id}
		style={{width:"100%"}} 
		type="text" 
		onChange={onDataChange} 
    /></div>
    <div style={{width:"50%"}}>PW <input 
		name="user_pw" 
		value={user_pw}
		style={{width:"100%"}} 
		type="text" 
		onChange={onDataChange} 
    /></div>
    <br /><input 
		name="content" 
		value={content}
		style={{width:"100%", height:"50px"}} 
		type="text" 
		onChange={onDataChange} 
    />
    <button onClick={replyApi} style={{margin:"5px", width:"80px", height:"40px"}}>확인</button>
  </div>

</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
