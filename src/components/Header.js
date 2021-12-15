import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg"></img>
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placehoder="Search" />
          </div>
          <SeachIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </SeachIcon>
        </Search>
      </Content>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1300px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
opacity:1;
flex-grow:1;
position:relative;
& > div{
    max-width:28
}
`;
const SeachIcon = styled.div``;
