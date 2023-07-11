"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Home = (): React.JSX.Element => {
  const router = useRouter();
  return (
    <>
      <h1>Next App</h1>
      <Link href={"/about"}>About</Link>
      <User />
      <button onClick={() => router.push("/about")}>Redirect</button>
      <Link href={"/about/college"}>College</Link>
      <Link href={"/about/student"}>Student</Link>
    </>
  );
};
export default Home;
const User = (): React.JSX.Element => {
  const [state, setState] = useState<string>("This is initalState");
  const handleClick = () => {
    setState("This is Updated State");
  };
  const InnerComponent = (): React.JSX.Element => {
    return (
      <>
        <h1>Inner Component</h1>
      </>
    );
  };
  return (
    <>
      <h1>{state}</h1>
      <button className={"bg-pink-500 px-3 py-3"} onClick={handleClick}>
        Click
      </button>
      <InnerComponent />
    </>
  );
};
