import React from "react";
import styled from "styled-components";

function Service({imgSrc,title,description}) {
  return (
    <Service__container>
      <Service__card>
        <img
          src={imgSrc}
          alt=""
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </Service__card>
    </Service__container>
  );
}
const Service__container = styled.div`
    padding:10px;
`;
const Service__card = styled.div`
    img,p,h3{
        margin-bottom: 15px;
    }
    p{
        font-size: 18px;
    }
`;
export default Service;
