import React from 'react'
import styled from "styled-components"


function BlogCard(props) {
  return (
    <Blogcard>
        <BlogcardImg src={props.Bg}></BlogcardImg>
        <BlogCardContent>
          <BCCHead>{props.head}</BCCHead>
          <BCCText>{props.text}</BCCText>
          <BCCBottom>{props.bottom}</BCCBottom>
        </BlogCardContent>
        <BCCBG></BCCBG>
    </Blogcard>
  )
}

export default BlogCard

const Blogcard = styled.div`
height: 100%;
width: 32%;
`

const BlogcardImg = styled.img`
height: 100%;
width: 100%;
`

const BlogCardContent = styled.div`
height: 50%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
position: relative;
top: -265px;
color: #FFFFFF;
z-index: 1;
`

const BCCBG = styled.div`
height: 50%;
width: 100%;
background-color: #003399;
opacity: 0.5;
position: relative;
top: -530px;
`

const BCCHead = styled.div`
height: 10%;
width: 90%;
font-size: 38px;
font-weight: medium;
`

const BCCText = styled.div`
height: 28%;
width: 90%;
`

const BCCBottom = styled.div`
height: 16%;
width: 90%;
`

