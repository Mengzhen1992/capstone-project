import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Overlay } from "./DeletePopup";
import lottie from "lottie-web";

export default function FinishPopup({ onFinish }) {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/images/congratulation.json"),
    });

    // return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <Overlay>
      <DeletePopupContainer>
        <div className="container" ref={container}></div>
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
  top: 5%;
  bottom: 5%;
  padding: 2.5rem;
  background: var(--color-popup);
  box-shadow: var(--shadow-box);
  border-radius: 8px;
`;

const FinishTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  line-height: 36px;
  color: var(--color-percent);
  text-shadow: var(--shadow-text);
`;

const FinishText = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin: 2rem auto;
  color: var(--color-text);
`;

const FinishButton = styled.button`
  background: var(--color-button);
  box-shadow: var(--shadow-box);
  border: 1px solid var(--color-addbutton-border);
  border-radius: 15px;
  width: 40%;
  height: 2.5rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: #fff;
  margin: 0.5rem 30%;
  cursor: pointer;
  &:hover {
    background: var(--color-button-hover);
  }
`;
