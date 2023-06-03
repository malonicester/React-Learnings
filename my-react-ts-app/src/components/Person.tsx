import { Button } from "./Button";
import Container from "./Container";
import Status from "./Status";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
const Person = ({ name: { last } }: PersonProps) => {
  return (
    <>
      <div>Person firstName : {last}</div>
      <Status status="success" />
      <Button handleClick={() => console.log("Clicked...")} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </>
  );
};

export default Person;
