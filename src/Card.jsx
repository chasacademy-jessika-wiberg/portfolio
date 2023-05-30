import React from "react";
import styled from 'styled-components';
import Face from './assets/Face.jpg';
import Pool from './assets/Pool.jpg';


export const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
   align-items: center;
   grid-area: main;
   border-radius: 10px;
  width: 350px;
  height: 450px;
   overflow: hidden;
   box-shadow: 10px 10px 8px #888888;
   

`;

function Card() {
    return (
    
        <CardContainer>
        
           
            <StyledPool src={Pool} alt="Pool" />
            <StyledFace src={Face} alt="Face" />
            <h3> Jessika Wiberg</h3>
            <h4> Badar i kunskap </h4>
            <StyledButton> Simma lugnt </StyledButton>
        </CardContainer>
   


    )
};



  
export const StyledButton = styled.button`
    border-color: aqua;
    box-shadow: 10px 10px 8px #888888;
   margin-bottom: 20px;
   background-color: aliceblue;
   margin-top: 20px;
`

export const StyledPool = styled.img`
    width: 350px;
    height: 225px;
    
`;

export const StyledFace = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
  
    border: 5px solid white;
    margin-top: -4em;
    border-radius: 50%;
`;

export default Card;