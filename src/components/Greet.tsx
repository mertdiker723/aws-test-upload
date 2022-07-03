type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
//https://www.youtube.com/watch?v=xNSIHFi8o2M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=6

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name} You have ${messageCount} unread messages`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
