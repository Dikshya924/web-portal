import React from "react";
import styled from "styled-components";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
function Footer() {
  return (
    <Footer_container>
      <Detail>
        <h2>Web Portal</h2>
        <p>Love to adopt challenges and delivering excellence</p>
        <p>
          <PhoneOutlinedIcon />
          <span>+91-94137-66210</span>
        </p>
        <p>
          <EmailOutlinedIcon />
          <span>office@gmail.com</span>
        </p>
        <p>
          <LocationOnOutlinedIcon />
          <span>Kathmandu,Nepal</span>
        </p>
      </Detail>
      <Footer__service>
        <h2>Services</h2>
        <p>Web Application Solution</p>
        <p>Mobile Application Solution</p>
        <p>Chat Support Solution</p>
      </Footer__service>
      <Company>
        <h2>Company</h2>
        <p>About</p>
        <p>Contact</p>
        <p>Home</p>
      </Company>
    </Footer_container>
  );
}

const Footer_container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #263238;
  color: white;
  align-items: center;
  line-height: 3;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Detail = styled.div`
  span {
    margin-left: 10px;
  }
  p {
    display: flex;
    align-items: center;
  }
`;
const Footer__service = styled.div``;
const Company = styled.div``;
export default Footer;
