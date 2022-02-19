import React from "react";
import styled from "styled-components";
import Service from "./Service";

function Homepage() {
  return (
    <Container>
      <Banner>
        <Left>
          <h2>
            <span>WHAT WE CAN DO FOR YOU</span>
          </h2>
          <h1 style={{ fontSize: 60 }}>
            We build your idea into a <span>solution</span>
          </h1>
          <p>
            It's difficult to take a dream and turn it into a drawing. As a
            result, our primary strategy is to turn your visions into practical
            reality, where technology satisfies the criteria of your ideal
            concepts.
          </p>
        </Left>
        <Right>
          <img src="./images/home-banner-img.svg" alt="home-banner" />
        </Right>
      </Banner>
      <Services>
        <h2>
          <span>WHAT WE CAN DO FOR YOU</span>
        </h2>
        <h1 style={{ fontSize: 40, fontWeight: 650 }}>
          Services we can help you with
        </h1>
        <p>
          We provide various kinds of services which can help you to boost your
          business growth.
        </p>
        <Cards>
          <Service
            imgSrc="./images/web-solutions-icon.svg"
            title="Web Application Solutions"
            description="We specialize in offering tailored applications for web application creation that will simplify the business processes."
          />
          <Service
            imgSrc="./images/mobile-solutions-icon.svg"
            title="Mobile Application Solutions"
            description="For Android and iOS, we turn the mobile device development concepts into native and hybrid mobile experiences."
          />
          <Service
            imgSrc="./images/chat-solution-icon.svg"
            title="Chat Support Solutions"
            description="For Rapid Conversations online, We deliver Chat Support to ensure that every conversation counts on Your website."
          />
          <Service
            imgSrc="./images/iot-solutions-icon.svg"
            title="IoT Solutions"
            description="We offer IoT apps that add value to your company by improving performance, accuracy, and lowering costs by up to 60%."
          />
        </Cards>
      </Services>
      <Banner>
        <Left>
          <h2>
            <span>WHAT WE CAN DO FOR YOU</span>
          </h2>
          <h1 style={{ fontSize: 60 }}>
            We build your idea into a <span>solution</span>
          </h1>
          <p>
            It's difficult to take a dream and turn it into a drawing. As a
            result, our primary strategy is to turn your visions into practical
            reality, where technology satisfies the criteria of your ideal
            concepts.
          </p>
        </Left>
        <Right>
          <img src="./images/home-banner-img.svg" alt="home-banner" />
        </Right>
      </Banner>
    </Container>
  );
}
const Container = styled.div`
  padding: 20px;
  /* background-color: rgba(232, 242, 249); */
  background-image: url("https://www.inoidsolutions.com/resources/images/background-images/banner-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0%;
  }
`;
const Left = styled.div`
  /* margin-left: 20px; */
  width: 50%;
  height: 500px;
  span {
    color: #0073bc;
  }
  p {
    margin-top: 40px;
    font-size: 18px;
    line-height: 1.5;
    color: #3a3a3a;
    text-align: left;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 80%;
    height: auto;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    justify-content: center;
    img {
      width: 100%;
      margin-bottom: 50px;
    }
  }
`;
const Services = styled.div`
  padding: 20px;
  text-align: center;
  span {
    color: #0073bc;
  }
  p {
    margin-bottom: 100px;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default Homepage;
