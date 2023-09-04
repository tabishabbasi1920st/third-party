import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components/macro'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

export const AboutMainBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutBodyContainer = styled.div`
  flex-grow: 1;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AboutCard = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 10px 10px #bfbfbf;
`
export const AboutIcon = styled.img`
  //   height: 200px;
  //   width: 200px;
`
export const OptionText = styled.h1`
  font-size: 28px;
  margin-left: 5px;
`
