import React from "react";
type StatusProps = {
  status: "loading" | "error" | "success";
};

const Status = ({ status }: StatusProps) => {
  return (
    <div>
      {status === "loading" ? (
        <h1>Loading...</h1>
      ) : status === "error" ? (
        <h1>Error....</h1>
      ) : (
        <h1>Data Fetched Successfully.</h1>
      )}
    </div>
  );
};

export default Status;
