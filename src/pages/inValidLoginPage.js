import {AuthInfoContext, LoggedInContext} from "../contexts/authContext";
import React, {useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link, Navigate} from "react-router-dom";
import {postUser, registerUser} from "../api/userdb-api";

const InValidLogInPage=()=>{
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);
    const [authInfo, setAuthInfo] = useContext(AuthInfoContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const logIn = () =>{
        setAuthInfo({username:username,password:password});
        const req=postUser(authInfo);
        setIsLoggedIn( (req.response.code !== 401) );
    }
    const signUp = () =>{
        setAuthInfo({username:username,password:password});
        const req=registerUser(authInfo);
        setIsLoggedIn( (req.response.code !== 401) );
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
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue=""
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue=""
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <Link to={`/try-again`}>
                <Button variant="outlined" onClick={logIn}>
                    Log In
                </Button>
            </Link>
            <Link to={`/try-again`}>
                <Button variant="outlined" onClick={signUp}>
                    Sign Up
                </Button>
            </Link>
        </Box>
    )
}
export default InValidLogInPage;