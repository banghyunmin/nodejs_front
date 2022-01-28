import React, {useState, useEffect} from 'react';
import axios from 'axios';

  function InputComp(match) {
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
    function updateApi() {
        const url = "/schedules/3";
        axios.put(url, {
	  image: image,
	  name: name,
	  weblink: link,
	  twitlink: '',
	  discordlink: '',
	  date: date,
	  count: count,
	  price: price,
	  high_price: high_price
	})
        .then(function(response) {
            setPhotos(response.data);
	    console.log(photos);
            console.log("성공");
	    window.location.replace("/update")
        })
        .catch(function(error) {
            console.log("실패");
        })
    }

// PARAMS SETTING

    return (
      <div>
	image<input
	    type="text"
	    placehoder="image"
	    name="image"
	    value={image}
	    onChange={onDataChange}
	/><br />
	name<input
	    type="text"
	    placehoder="name"
	    name="name"
	    value={name}
	    onChange={onDataChange}
	/><br />
	link<input
	    type="text"
	    placehoder="link"
	    name="link"
	    value={link}
	    onChange={onDataChange}
	/><br />
	date<input
	    type="text"
	    placehoder="date"
	    name="date"
	    value={date}
	    onChange={onDataChange}
	/><br />
	count<input
	    type="text"
	    placehoder="count"
	    name="count"
	    value={count}
	    onChange={onDataChange}
	/><br />
	price<input
	    type="text"
	    placehoder="price"
	    name="price"
	    value={price}
	    onChange={onDataChange}
	/><br />
	high_price<input
	    type="text"
	    placehoder="high_price"
	    name="high_price"
	    value={high_price}
	    onChange={onDataChange}
	/><br />
	<button onClick={searchAllApi}>SEARCH</button>
	<button onClick={updateApi}>UPDATE</button>
	<h3>HELLO</h3>
      </div>
    );
  }

export default InputComp;
