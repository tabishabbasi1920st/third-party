import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components/macro'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

export const NotFoundMainBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotFoundBodyContainer = styled.div`
  flex-grow: 1;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotFoundCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundImage = styled.img`
  height: 200px;
  width: 200px;
`
export const OptionText = styled.h1`
  font-size: 28px;
  margin-left: 5px;
  margin-bottom: 10px;
`
export const DescriptionText = styled.p`
  text-align: center;
  font-size: 15px;
`
