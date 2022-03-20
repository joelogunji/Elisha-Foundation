import React,{useState} from 'react'
import {FaGooglePlusG} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import {Link} from 'react-router-dom'

import {Nav, NavContainer, LogoHold, MobileIcon, NavBars, NavLinks} from "./NavBar.Element"

function NavBar () {

        const [click, setClick] = useState(false);

        const handClick = () => {
            setClick(!click)
        }

    return (
        <>
            <Nav>
                <NavContainer>
                    <LogoHold>
                       <FaGooglePlusG/>LSETF
                    </LogoHold>

                    <MobileIcon onClick={handClick}>
                        {click ? <FaBars/> : <FaTimes/>}
                    </MobileIcon>
                    
                    <NavBars onClick={handClick} click={click}>
                        <Link to ="/" style={{color:"white", textDecoration:"none"}}><NavLinks>Home</NavLinks></Link>
                        <Link to ="/contact" style={{color:"white", textDecoration:"none"}}><NavLinks>Contact</NavLinks></Link>
                        <Link to ="/contact" style={{color:"white", textDecoration:"none"}}><NavLinks>Services</NavLinks></Link>
                        <Link to ="/contact" style={{color:"white", textDecoration:"none"}}><NavLinks>Blog</NavLinks></Link>
                    </NavBars>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar