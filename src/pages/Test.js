import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {

    const tempStyle = {
	    margin:"10px",
	    backgroundColor:"blue"
    }
    

    const AppContainer = styled.div`
	&,
	& * {
		box-sizing: border-box;
	}
	`;
    const HeaderContainer = styled.header`
	padding: 1rem;
	border: 1px solid red;
	`;
    const ListWrapper = styled.div`
	width: 25%;
	float: left;
	padding: 15px;
	border: 1px solid red;
	`;
    const Main = styled.div`
	width: 75%;
	float: left;
	padding: 15px;
	border: 1px solid red;
	`;

    return (
<>
<div className="AppBar">
  <Header />
  <div style={{height:"100px"}}></div>
</div>
<div className="content" > 
	    <div className="left" style={{
		    margin:"10px",
		    backgroundColor:"green",
			    height:"100px",
			    width:"200px"
	    }}></div>
	    <div className="cneter" style={{
		    margin:"10px",
		    backgroundColor:"green",
			    height:"100px",
			    width:"100%"
	    }}></div>
	    <div className="right" style={{
		    margin:"10px",
		    backgroundColor:"green",
			    height:"100px",
			    width:"200px"
	    }}></div>
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
