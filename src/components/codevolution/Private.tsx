import Login from "./Login"
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>
}

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  console.log(isLoggedIn);
  
  if (isLoggedIn) {
    return <Component name="hasan" />
  }
  else {
    return <Asd />
  }
}


const Asd = () => {
  return (
    <div>asdasda</div>
  )
}
export default Private