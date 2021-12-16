import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? -   </a>
        </h5>
        <p>   Find talented in record time with Upwork and keep business moving</p>
      </Section>
    </Container>
  );
}
const Container=styled.div`
padding-top:40px;
max-width:100%;

`
const Content=styled.div`
max-width:1128px;
margin-left:auto;

margin-right:auto;
`
const Section=styled.section`
min-height:50px;
padding:16px 0;
box-sizing:content-box;
text-align:center;
text-decoration:underline;
display:flex;
justify-content:center;
align-items:center;
h5 {
   color:#0a66c2;
   font-size:14px;
   a {
    font-weight:700;   
   }
}
p{
    font-size:14px;
    color:#434649;
    font-weight:600;
}
@media(max-width:768px){
    
}


`
export default Home;
