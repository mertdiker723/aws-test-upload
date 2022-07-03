import { ProfileProps } from "./Profile"


const Login = (props: ProfileProps) => {
    return (
        <div>{props.name}</div>
    )
}

export default Login