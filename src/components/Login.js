import styled from "styled-components";

import React from "react";

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>SignIn</SignIn>
        </div>
      </Nav>
      <Section>
      <Hero>
        <h1>Welcome to your professional community</h1>
        <img src="/images/login-hero.svg" alt="" />
      </Hero>

      </Section>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1368px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgb(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  &: hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.5);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  postition: relative;
  flex-wrap: wrap;
  width:100%;
  max-width:1128px;
  align-items:center;
  margin:auto;
  @media(max-width:768px){
    margin:auto;
    min-height:0px;
  }
`;
const Hero=styled.div`
width:100%;
h1{
  padding-bottom:0;
  width:55%;
  font-size:56px;
  color:#2977c9;
  font-weight:200;
  line-height:70px;
  @media(max-width:700px){
    text-align:center;
    font-size:18px;
    width:100%;
    line-height:2;
  }
  
}
img{
z-index:-1;
width:700px;
width:670px;
position:absolute;
bottom:-2px;
right:-150px;
@media(max-width:700px){
  top:230px;
  width:initial;
  position:initial;
  height:initial;
}

  }
`
