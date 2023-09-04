import styled, {createGlobalStyle} from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        text-decoration: none;
        list-style-type: none;
    }
`

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const NavContainer = styled.nav`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const WebsiteLogo = styled.img`
  height: 45px;
  width: 45px;
`

export const HamburgerIconContainer = styled.div`
  height: 35px;
  width: 35px;
`

export const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  height: 100%;
  width: 100%;
  color: #616e7c;
`

export const PopupModal = styled.ul`
  height: 100vh;
  width: 90vw;
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`
export const HamburgerMenuOption = styled.li`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  outline: none;
  padding: 10px;
`

export const CloseIcon = styled(IoMdClose)`
  height: 30px;
  width: 30px;
`
export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const MenuOptionsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeIcon = styled(AiFillHome)`
  height: 30px;
  width: 30px;
`
export const OptionText = styled.h1`
  font-size: 28px;
  margin-left: 5px;
`

export const AboutIcon = styled(BsInfoCircleFill)`
  height: 30px;
  width: 30px;
`
export const StyledLink = styled(Link)`
  border: none;
  color: black;
  outline: none;
`
