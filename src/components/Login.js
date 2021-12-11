import styled from "styled-components";

import React from 'react'

function Login() {
    return (
        <Container>
            <Nav>
            <a href="/">
                <img src="/images/login-logo.svg" alt=""/>
            </a>
            </Nav>
        </Container>
    )
}

export default Login
const Container =styled.div`
padding:0px;

`
const Nav=styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0px 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:nowrap;
& > a{
    width:135px;
    height:34px;
        @media(max-width:768px){
            padding: 0 5px;
            
        }
}
`

