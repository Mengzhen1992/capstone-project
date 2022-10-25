import React from "react";
import styled from "styled-components";
import { Button } from "../pages/Create";

export default function Popup({ handleDeleteTrue, handleDeleteFalse }) {
  return (
    <Overlay>
      <PopupContainer>
        <Text>this task will be deleted, are you sure?</Text>
        <Button onClick={handleDeleteTrue}>Yes, delete it</Button>
        <Button onClick={handleDeleteFalse}>Cancel</Button>
      </PopupContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  top: 25%;
  bottom: 40%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Text = styled.h2`
  font-family: var(--font-primary);
  font-style: normal;
  font-size: 1.5rem;
`;
