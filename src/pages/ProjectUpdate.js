import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Update_inputs from './Update_inputs.js';
import axios from 'axios';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function ProjectCreate() {
    const params = useParams();
    const [inputs, setInputs] = useState({
	    name: '',
	    weblink: '',
	    twitlink: '',
	    discordlink: '',
	    price: '',
	    high_price: ''
    });
    const [photos, setPhotos] = useState('');
    // useEffect
    useEffect(() => {
        axios.get("/schedules/"+params.id).then((response) => {
	  console.log(response)
	  response.data = response.data[0]
	  setInputs({
		name: response.data.name,
		weblink: response.data.weblink,
		twitlink: response.data.twitlink,
		discordlink: response.data.discordlink,
		price: response.data.price,
		high_price: response.data.high_price
	  })
        });
    }, []);

    const [tableData, setTableData] = useState('');
    const {image, name, weblink, twitlink, discordlink,  date, count, price, high_price} = inputs;

    const onDataChange = (e) => {
      const {value, name} = e.target
      setInputs({
	...inputs,
	[name]: value
      })
    }

    // UPDATE
    const updateApi = (e) => {
      axios.put('/schedules/'+params.id, {
	      name: name,
	      weblink: weblink,
	      twitlink: twitlink,
	      discordlink: discordlink,
	      price: price,
	      high_price: high_price
      }).then(function(response) {
            setPhotos(response.data);
	    console.log(photos);
            console.log("성공");
	    window.location.replace("/")
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
            </div>
            <div className="content">
            </div>
            <div className="Footer">
      <div>
	<div><h2>프로젝트 수정 페이지</h2></div>
	name<input
	    style={tempStyle}
	    type="text"
	    placehoder="name"
	    name="name"
	    value={name}
	    onChange={onDataChange}
	/><br />
	webPage<input
	    style={tempStyle}
	    type="text"
	    placehoder="weblink"
	    name="weblink"
	    value={weblink}
	    onChange={onDataChange}
	/><br />
	twitter<input
	    style={tempStyle}
	    type="text"
	    placehoder="twitlink"
	    name="twitlink"
	    value={twitlink}
	    onChange={onDataChange}
	/><br />
	discord<input
	    style={tempStyle}
	    type="text"
	    placehoder="discordlink"
	    name="discordlink"
	    value={discordlink}
	    onChange={onDataChange}
	/><br />
	price<input
	    style={tempStyle}
	    type="text"
	    placehoder="price"
	    name="price"
	    value={price}
	    onChange={onDataChange}
	/><br />
	high_price<input
	    style={tempStyle}
	    type="text"
	    placehoder="high_price"
	    name="high_price"
	    value={high_price}
	    onChange={onDataChange}
	/><br />
	<button onClick={updateApi} style={{margin:"50px", width:"100px", height:"50px"}}>UPDATE</button>
      </div>
            </div>
        </>
    )
}
