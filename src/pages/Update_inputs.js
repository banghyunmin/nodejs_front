import React, {useState, useEffect} from 'react';
import axios from 'axios';

  function InputComp() {
// INPUT SETTING
    const [inputs, setInputs] = useState({
	    image: '',
	    name: '',
	    link: '',
	    date: '',
	    count: '',
	    price: '',
	    high_price: ''
    });
    const {image, name, link, date, count, price, high_price} = inputs;

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
      formdata.append('name', name);
      formdata.append('weblink', link);
      formdata.append('date', date);
      formdata.append('count', count);
      formdata.append('price', price);
      formdata.append('high_price', high_price);
      const config = {
	Headers: {
	  'content-type': 'multipart/form-data',
	},
      }
      axios.post('/schedules', formdata, config)
        .then(function(response) {
            setPhotos(response.data);
	    console.log(photos);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    }
    // UPDATE
    const updateApi = (e) => {
      const formdata = new FormData();
      formdata.append('file', files[0]);
      formdata.append('name', name);
      formdata.append('weblink', link);
      formdata.append('date', date);
      formdata.append('count', count);
      formdata.append('price', price);
      formdata.append('high_price', high_price);
      const config = {
	Headers: {
	  'content-type': 'multipart/form-data',
	},
      }
      axios.put('/schedules/3', formdata, config)
        .then(function(response) {
            setPhotos(response.data);
	    console.log(photos);
            console.log("성공");
	    window.location.replace("/update/3")
        })
        .catch(function(error) {
            console.log("실패");
        })
    }

// useEffect
    useEffect(() => {
        axios.get(`/schedules/3`).then((response) => {
          console.log(response.data);    
	  setInputs({
		image: response.data.image,
		name: response.data.name,
		link: response.data.weblink,
		date: response.data.date,
		count: response.data.count,
		price: response.data.price,
		high_price: response.data.high_price
	  })
        });
    }, []);

// Rest API
    const [photos, setPhotos] = useState('');
    function searchAllApi() {
        const url = "/schedules/3";
        axios.get(url)
        .then(function(response) {
            setPhotos(response.data);
	    console.log(photos);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    }

    // STYLE
    const tempStyle = {
      width: "80%",
      height: "70px",
      fontSize: "50px"
    }

// PARAMS SETTING

    return (
      <div>
	image<input
	    style={tempStyle}
	    type="file"
	    name="image"
	    accept="image/png, image/jpeg"
	    onChange={onLoadFile}
	/><br />
	name<input
	    style={tempStyle}
	    type="text"
	    placehoder="name"
	    name="name"
	    value={name}
	    onChange={onDataChange}
	/><br />
	link<input
	    style={tempStyle}
	    type="text"
	    placehoder="link"
	    name="link"
	    value={link}
	    onChange={onDataChange}
	/><br />
	date<input
	    style={tempStyle}
	    type="text"
	    placehoder="date"
	    name="date"
	    value={date}
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
	<button onClick={searchAllApi}>SEARCH</button>
	<button onClick={updateApi}>UPDATE</button>
	<button onClick={createApi}>CREATE</button>
	<h3>HELLO</h3>
      </div>
    );
  }

export default InputComp;
