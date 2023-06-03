import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps):JSX.Element => {
  return (
    <div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};
