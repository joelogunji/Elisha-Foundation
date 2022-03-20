import React from 'react'
import styled from 'styled-components'

function FirstpageCard(props) {

  return (
    <FirstpageCardHolder style={{backgroundColor: props.BC}}>
        <FPCardLContain><FPCardLogo src={props.logo}/></FPCardLContain>
        <FPCardHead>{props.head}</FPCardHead>
        <FPCardText>
        {props.text1}<br/>
        {props.text2}<br/>
        {props.text3}<br/>
        {props.text4}<br/>
        </FPCardText>
    </FirstpageCardHolder>
  )
}

export default FirstpageCard

const FPCardLContain = styled.div`
height: 40%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const FPCardLogo = styled.img`
height: 49px;
width: 43px;
`

const FPCardHead = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: center;
font-size: 38px;
`

const FPCardText = styled.div`
height: 40%;
width: 100%;
display: flex;
justify-content: center;
`

const FirstpageCardHolder = styled.div`
height: 100%;
width: 31%;
border-radius: 10px;
color: #FFFFFF;
`
