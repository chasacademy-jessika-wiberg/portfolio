import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import './App.css';
import Card, { StyledPool, StyledFace } from './Card';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import logo from './assets/splash.png';


const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;



const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
 

  "main main main main main"
 
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;



const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-self: center;
  background: rgb(246,215,150);
background: linear-gradient(0deg, rgba(246,215,150,1) 0%, rgba(255,255,255,0) 100%);

`;



const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: logo;
`;

const StyledImg = styled.img`
width: 100%;
`;



const MainContainer = styled.div`
  grid-area: main;
`;

const useGithubApi = () => {
  const [data, setData] = useState([]);
  
}

const App = () => {

  
  
  return (
    <Router>
      
      <GridContainer> 
        
        <LogoContainer>  
          <StyledImg src={logo} alt="Logo" /> 
          </LogoContainer>
        <Navbar />
        <Card />
       
        <Hero text='Myhero'/>
        <MainContainer> 
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <p>Portfolio</p>
          </Route>
          <Route path="/">
            <p>   </p>
          </Route>
        </Switch>
        <h1>   </h1>

        </MainContainer>
        
        

        <Footer /> 
     
 </GridContainer>
      
    </Router>
   
  );
}


export default App;