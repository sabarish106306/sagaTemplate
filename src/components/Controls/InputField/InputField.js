import React from "react";
import { FormControl } from "react-bootstrap";

export const InputField = ({
  name,
  value,
  handleChange,
  type

}) => {

  return (
    <FormControl
      className="my-3"
      name={name}
      type={type}
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};
