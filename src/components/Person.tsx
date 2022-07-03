import { PersonProps } from "../types/Person.types";
const Person = ({ name, onClick }: PersonProps) => {
  return (
    <div>
      <button onClick={onClick}>asdsad</button>
      {name.first} - {name.last}
    </div>
  );
};

export default Person;
