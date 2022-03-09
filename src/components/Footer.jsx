import {
  Email,
  EmailOutlined,
  LinkedIn,
  LocationCity,
  Phone,
  PhoneAndroidOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { medium, small } from "../responsive";

const MainContainer = styled.div`
  height: 100%;
  background-color: #6ded94;
  color: black;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 3rem;
  ${small({ display: "inline" })}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;
const OwnerDiv = styled.div`
  display: flex;
  height: 3rem;
  background-color: #6ded94;
  color: white;
  align-items: center;
  justify-content: space-between;
  ${medium({ display: "none" })}
`;

const Footer = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <Left>
            <div>
              <h2 style={{ textAlign: "start" }}><span style={{color:"#3e1394"}}>Beauty </span></h2>
            </div> 
            <div>
              <p style={{ padding: "5px" }}>
                Nobody is born with a perfect face but everyone is blessed with
                attractive features, waiting to be revealed. we bring you the
                best of makeup online, featuring a wide range of personal care
                products of high quality. Hide your blemishes and flaws to
                create a smooth, healthy skin surface. Add colours to contour
                your face to achieve an attractive look. Highlight your best
                features with products that enhance them. The sky is the limit
                when it comes to transforming your face to reveal the kind of
                look you prefer.
              </p>
            </div>
          </Left>
          <Right>
            <div>
              <h2 style={{ textAlign: "start" }}><span style={{color:"#3e1394"}}>Contact US</span></h2>
            </div>
            <div>
              <p>
                <LocationCity /> Dindigul,Tamilnadu.
              </p>
            </div>
            <div>
              <p>
                <Email /> lingeshmech12@gmail.com
              </p>
            </div>
            <div>
              <p>
                <Phone /> +91-1234567890
              </p>
            </div>
          </Right>
        </InnerContainer>
      </MainContainer>
      <OwnerDiv>
        <div className="p-2"> Developed by lingesh</div>
        <div className="d-flex gap-1  ">
          <div>
            <EmailOutlined />
            lingeshmech12@gmail.com
          </div>
          <div>
            <LinkedIn />
            www.linkedin.com/in/
          </div>
          <div>
            <PhoneAndroidOutlined />
            +91-1234567890
          </div>
        </div>
      </OwnerDiv>
    </>
  );
};

export default Footer;
