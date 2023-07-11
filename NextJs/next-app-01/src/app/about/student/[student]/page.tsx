"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
const names: string[] = ["ashish", "chandan", "ramesh", "manish"];
const StudentDetails = ({
  params: { student },
}: {
  params: { student: number };
}) => {
    const params = useSearchParams();
    console.log(params.get('name'));
  console.log(student);
  return (
    <div>
      <h1>Name is : {names[student] ?? "Not Found"} </h1>
    </div>
  );
};

export default StudentDetails;
