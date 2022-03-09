import React from "react";
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
     0%   {background-color: #42d48d;}
     0%{background-color: #42d48d;}
     0%{background-color: #42d48d;}
`;

const Container = styled.div`
  /* height: 80%; */
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #00000;
  animation: ${colorChange} 4s infinite linear;
`;

const UpperAnnouncement = () => {
  return (
    <div>
      <Container>
        <div style={{ marginTop: "10px" }}>
          <p>Valentine Day Offer!!! upto 50% OFF Hury up guys...!</p>
        </div>
      </Container>
    </div>
  );
};

export default UpperAnnouncement;
