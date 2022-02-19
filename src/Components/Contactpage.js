import React from "react";
import styled from "styled-components";

function Contactpage() {
  return (
    <Contact>
      <Header>
        <h1>Let's Speak!<span>Corporate</span> </h1>

        <p>
          Have questions about your idea? Drop in your details to discuss with
          our solution consultants. We look forward to hear from you.
        </p>
      </Header>
      <img src="https://www.inoidsolutions.com/resources/images/contact-us.svg" />
    </Contact>
  );
}
const Contact = styled.div`
  padding: 80px;
  padding-top: 100px;
  background-image: url("https://www.inoidsolutions.com/resources/images/background-images/banner-bg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 100px;
  img {
    width: 80%;
    height: auto;
    object-fit: contain;
  }
  @media (max-width:768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    padding-top: 100px;
  }
`;
const Header = styled.div`
  h1{
    font-size: 50px;
    font-weight: 650;
    span {
    color: #0073bc;
  }
  }
`;

export default Contactpage;
