import { Name } from "../types/Person.types";
type PersonsListProps = {
  names: Name[];
};

const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <p>
            {name.first} {name.last}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
