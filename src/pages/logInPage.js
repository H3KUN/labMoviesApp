import {AuthInfoContext, LoggedInContext} from "../contexts/authContext";
import React, {useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const LogInPage=()=>{
    const [authInfo, setAuthInfo] = useContext(AuthInfoContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    /*
    const handleChange = (e, type, value) => {
        e.preventDefault();
        setAuthInfo(type,value); // NEW
    };

    const handleIdChange = (e) => {
        handleChange(e, "id", e.target.value);
    };
    const handlePasswordChange = (e) => {
        handleChange(e, "password", e.target.value);
    };
    */
    return (
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
                <Button variant="outlined" onClick={()=>{setAuthInfo({"username":username,"password":password}); console.log(username,password)}}>
                    Log In
                </Button>
            </Link>
        </Box>
    )
}
export default LogInPage;