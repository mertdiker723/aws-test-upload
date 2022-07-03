interface VehicleProps {
  wheels: string;
  doors: string | undefined;
  fuel: string;
}

function Vehicle(props: VehicleProps) {
  return (
    <div>
      <h1>{props.wheels}</h1>
      {props.doors && <h1>{props.doors}</h1>}
      <h1>{props.fuel}</h1>
    </div>
  );
}

export default Vehicle;
