import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";
import hamburgericon from "./assets/hamburgericon.png"
import logo from "./assets/Painter.png"



const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: top; 
    align-items: center;
    /* background: rgb(255,255,255); */
/* background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(246,215,150,1) 100%); */
`;


 const StyledLink = styled(Link)`
 color: #331968;
 border-radius: 8px;
  `;

// https://www.youtube.com/watch?v=VzWBLj_CfpE

const links = [
  {
    id: 1,
    to: "/",
    text: "Home"
  },

  {
    id: 2,
    to: "/contact",
    text: "Contact"
  },

  {
    id: 3,
    to: "/portfolio",
    text: "Portfolio"
  },

  {
    id: 4,
    to: "/about",
    text: "About"
  },
];


const Navbar = () => {
  // const [isOpen, setIsOpen] =set
    return (
      <> 
        <StyledNav>
    
              <logo />
              {links.map(link => <StyledLink to={link.id} key={link.text}> {link.text} </StyledLink>)}
        </StyledNav>
{/*         
        <Hamburger onClick={setIsOpen(!isOpen)}>
            <label for="hamurger">
              <span> </span>
              <span> </span>
              <span> </span> */}
          {/* </label></Hamburger> 
        {isOpen && <StyledResMenu> 
        {links.map(link => <StyledLink to={link.id} key={link.text}> {link.text} </StyledLink>)}
        </StyledResMenu>} */}
          {/* <Hamburger /> */}
          
        </>
    )
};



export default Navbar;
