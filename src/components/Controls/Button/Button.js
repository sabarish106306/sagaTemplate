import React from "react";
import { Button } from "react-bootstrap";

export const Btn = ({ text, handleClick }) => {
  return (
    <Button variant="primary" color="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};
