import {AuthInfoContext, LoggedInContext} from "../contexts/authContext";
import React, {useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link, Navigate} from "react-router-dom";

const LogInPage=()=>{
    const isLoggedIn = useContext(LoggedInContext);
    const [authInfo, setAuthInfo] = useContext(AuthInfoContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const logIn = () =>{
        setAuthInfo({username:username,password:password});
    }
    const signUp = () =>{
        setAuthInfo({username:username,password:password});
    }
    return (
        isLoggedIn?
            <Navigate to="/" />
            :
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="UserName"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <Link to={`/`}>
                <Button variant="outlined" onClick={logIn}>
                    Log In
                </Button>
            </Link>
            <Link to={`/`}>
                <Button variant="outlined" onClick={signUp}>
                    Sign Up
                </Button>
            </Link>
        </Box>
    )
}
export default LogInPage;