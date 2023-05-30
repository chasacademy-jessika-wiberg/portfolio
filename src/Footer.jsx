import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

// import linkedin from './assets/linkedin.png';
import mailme from './assets/mailme.png';
import github from './assets/github.png';


// import { faGitHub, faLinkedIn, faMailBox } from '@fortawesome/fontawesome-svg-core/import.macro';

import { FaBeer } from "react-icons/fa";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: footer;
    align-items: center;
    `;
    
const StyledLink = styled(Link)`
    color: black;
    /* background-color: #f1356d; */
    border-radius: 8px;

`;

const StyledIcon = styled.img`
    width: 10%;
`



const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: logo;
`;

const links = [
    {
      id: 1,
      to:  "https://www.linkedin.com/in/jessika-wiberg-59392922b/", 
      icon: <FaBeer />

    },
  
    {
      id: 2,
      to: "mailto:jessikawiberg@gmail.com",
      icon: mailme
    },
  
    {
      id: 3,
      to: "https://github.com/chasacademy-jessika-wiberg/",
      icon: github
    },
  
  ];
  
  
  const Footer = () => {
      return (
        <> 
          <StyledFooter>
                <logo />
                {links.map(link => <> 
               <a href={link.to}>
               <StyledIcon src={link.icon} /> 
               </a> </>)}
            <StyledIcon />
            {/* <Styledlinkedin /> */}


         
          </StyledFooter>
          </>
      )
  };



export default Footer;