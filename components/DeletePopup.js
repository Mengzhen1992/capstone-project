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
  background-color: var(--color-taskname);
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  top: 30%;
  bottom: 40%;
  padding: 2rem;
  background: var(--color-popup);
  box-shadow: var(--shadow-box);
  border-radius: 8px;
`;
