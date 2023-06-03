import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn ? "Welcome TO Home Page" : " Please Login first"}
      </h1>
      Hello {props.name}! You have {props.messageCount} unread message{" "}
    </div>
  );
};

export default Greet;
