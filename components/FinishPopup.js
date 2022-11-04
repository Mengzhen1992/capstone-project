import React from "react";
import styled from "styled-components";
import { Button } from "../pages/create";
import { Overlay, PopupContainer } from "./DeletePopup";

export default function FinishPopup({ onFinish }) {
  return (
    <Overlay>
      <DeletePopupContainer>
        <FinishTitle>Congratulations!</FinishTitle>
        <FinishText>you have successfully completed this task!</FinishText>
        <FinishButton onClick={onFinish}>Home</FinishButton>
      </DeletePopupContainer>
    </Overlay>
  );
}
const DeletePopupContainer = styled.div`
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  top: 20%;
  bottom: 40%;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FinishTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  line-height: 36px;
  color: #df1e7b;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FinishText = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin: 2rem auto;
  color: #000000;
`;

const FinishButton = styled.button`
  background: rgba(223, 30, 123, 0.59);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  width: 40%;
  height: 2.5rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: #fff;
  margin: 0.5rem 30%;
`;
