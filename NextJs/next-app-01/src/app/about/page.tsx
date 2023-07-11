"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <>
      <div>About</div>
      <Link href={"/"}>Home</Link>
      <button onClick={() => router.push("/")}>Redirect</button>
    </>
  );
};

export default About;
