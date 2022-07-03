import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material"

// https://medium.com/boca-code/how-to-encrypt-password-in-your-react-app-before-you-send-it-to-the-api-6e10a06f0a8e

var CryptoJS = require("crypto-js");

console.log(CryptoJS)

interface IPassType {
    email: string;
    password: string;
}
const Encryto = () => {
    const [obj, setObj] = useState<IPassType>({} as IPassType)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setObj({
            ...obj,
            [name]: value
        })
    }

    function handleLoginForm() {
        const { password } = obj;


        console.log(password);
    }
    return (
        <>
            <Grid container spacing={3} mt={3}>
                <Grid item xs={6} display="flex" justifyContent={"flex-end"}>
                    <TextField name="email" onChange={handleChange} id="outlined-basic1" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField name="password" onChange={handleChange} type="password" id="outlined-basic2" label="Password" variant="outlined" />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent={"center"}>
                    <Button onClick={handleLoginForm} variant="contained">Send</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Encryto;