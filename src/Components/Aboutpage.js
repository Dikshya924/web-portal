import React from "react";
import styled from "styled-components";
function Aboutpage() {
  return (
    <About>
      <h1>
        We bring light where technology meets with Ideas of Brilliant People to
        work on each project
      </h1>
      <p>
        There are endless possibilities in building your own business. It all
        starts with a Brilliant Idea.
      </p>
      <img src="https://www.inoidsolutions.com/resources/images/company-first-img.svg" />
    </About>
  );
}
const About = styled.div`
  padding: 80px;
  padding-top: 180px;
  background-image: url("https://www.inoidsolutions.com/resources/images/background-images/second-section-bg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img{
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 90px;
  }
  h1{
    font-size: 60px;
    font-weight:600;
    margin-bottom: 20px;
    line-height: 1.4;
  }
  @media (max-width:768px){
    padding:10px;
    padding-top: 100px;
    text-align: center;
    h1{
      font-size: 30px;
    }
  }
`;
export default Aboutpage;
