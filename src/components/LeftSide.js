import React from "react";
import styled from "styled-components";

function LeftSide() {
  return (
    <Container>
      <Artcard>
        <UserInfo>
          <Cardbackground />
          <a>
            <Photo />
            <Link> Welcome, there!</Link>
          </a>
          <a>
            <AddPhoto>add a photo</AddPhoto>
          </a>
        </UserInfo>
      </Artcard>
    </Container>
  );
}

export default LeftSide;

const Container = styled.div`
  grid-area:leftside;
`;
const Artcard = styled.div`

text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition:box-shadow:83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb( 0 0 0 /15%),0 0 0 rgb(0 0 0/20%);

`;
const UserInfo=styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding:12px 12px 16px;
word-wrap:break-word;
word-break:break-word;
`
const Cardbackground=styled.div`
background:url("/images/card-bg.svg");
background-position:center;
background-size:462px;
height:54px;
margin:-12px -12px 0;

`
const Photo=styled.div`
 box-shadow:none;
 background-image:url("/images/photo.svg");
width:72px;
height:72px;
box-sizing:border-box;
background-clip:content-box;
background-position:center;
background-size:60%;
background-repeat:no-repeat;
border:2px solid white;
margin:-38px auto 12px;
border-radius:50%
`
const Link= styled.div`
font-size:16px;
line-height:1.5;
color:rgba(0, 0, 0, 0.9);
font-weight:600;
`
const AddPhoto=styled.div`
color:#0a66c2;
margin-top:4px;
font-size:12px;
line-height:1.33;
font-weight:400;
`
