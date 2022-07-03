import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <>
      {props.value}
      <input type="text" value={props.value} onChange={(e) => props.handleChange(e)} />
    </>
  );
};

export default Input;
