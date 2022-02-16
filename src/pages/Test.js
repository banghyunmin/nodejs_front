import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Center from './testPage/Center.js';

import Header from '../component/Header.js';
import Footer from '../component/Footer.js';

export default function Home() {

  const AppContainer = styled.div`
	width: 100%;
	height: 1000px;
	overflow: hidden;
	white-space: nowrap;
	`
  const TopContainer = styled.div`
	background-color: blue;
	width: 100%;
	height: 20%;
	overflow: hidden;
	`
  const SideContainer = styled.div`
	float: left;
	background-color: red;
	width: 20%;
	height: 80%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	`
  const CenterContainer = styled.div`
	float: left;
	width: 60%;
	height: 80%;
	overflow: hidden;
	`

    return (
<>
<div className="AppBar">
  <Header />
  <div style={{height:"100px"}}></div>
</div>
<div className="content" > 
  <AppContainer>
    <TopContainer>
    </TopContainer>
    <SideContainer>
    </SideContainer>
    <CenterContainer>
      <Center />
    </CenterContainer>
    <SideContainer>
    </SideContainer>
  </AppContainer>
</div>
<div className="Footer">
  <Footer/>
</div>
</>
    )
}
