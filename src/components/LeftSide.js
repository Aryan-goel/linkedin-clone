import React from "react";
import styled from "styled-components";

function LeftSide() {
  return <Container>
    <Artcard>
      <UserInfo>
        <Cardbackground/>
        <a>
          <Photo/>
          <Link> Welcome, there!</Link>
        </a>
        <a>
          <AddPhoto>
            add a photo
          </AddPhoto>
        </a>
      </UserInfo>
    </Artcard>
  </Container>;
}

export default LeftSide;

const Container = styled.div`
  grid-area: LeftSide;
`;
const Artcard=styled.div`

text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition:box-shadow:83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb( 0 0 0 /15%),0 0 0 rgb(0 0 0/20%);

`
