import React from "react";
import styled from "styled-components";
import { Button } from "../pages/create";

export default function DeletePopup({ onDelete, onCancelDelete }) {
  return (
    <Overlay>
      <PopupContainer>
        <h2>this task will be deleted, are you sure?</h2>
        <Button onClick={onDelete}>Yes, delete</Button>
        <Button onClick={onCancelDelete}>Cancel</Button>
      </PopupContainer>
    </Overlay>
  );
}

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  top: 30%;
  bottom: 40%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
