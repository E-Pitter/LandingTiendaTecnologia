import React from 'react'
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavStyled } from './NavbarStyles'

import {motion} from "framer-motion"

import {BiSolidHome} from "react-icons/bi"
import {FaUserAlt} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
          <h1>TiendaTecno</h1>
        </div>
        <LinksContainerStyled>
          <HomeContainerStyled>
            <motion.div whileTap={{scale:0.7}}>
              <a href="/#">
                <LinkContainerStyled >
                  <BiSolidHome/>
                </LinkContainerStyled>
                Home
              </a> 
            </motion.div>
          </HomeContainerStyled>  
          
          <UserNavStyled>
            <UserContainerStyled>
              <SpanStyled>
                Iniciar Sesion
              </SpanStyled>
              <FaUserAlt/>
            </UserContainerStyled>
          </UserNavStyled>

          <motion.div whileTap={{scale: 0.8}}>
              <MenuContainerStyled>
                 <AiOutlineMenu/>
              </MenuContainerStyled>
          </motion.div>
             
        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar