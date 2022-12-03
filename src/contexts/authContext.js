import React, {useEffect, useState} from "react";


export const LoggedInContext = React.createContext(false);

export const AuthInfoContext = React.createContext(null);
function getDefaultAuthInfo(){
    const defaultAuthInfo = window.localStorage.getItem("authInfo");
    if (defaultAuthInfo) {
        return JSON.parse(defaultAuthInfo);
    } else {
        return { };
    }
}
function setAutoInfoToLocalStorage(authInfo){
    const authInfoStringfy = JSON.stringify(authInfo);
    window.localStorage.setItem("authInfo", authInfoStringfy);
}
const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authInfo, setAuthInfo] = useState(getDefaultAuthInfo());

    useEffect(() => {
        console.log(authInfo);
        if (authInfo?.username) {
            setAutoInfoToLocalStorage(authInfo);
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [authInfo]);
    return (
        <LoggedInContext.Provider value={loggedIn}>
            <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>
                {props.children}
            </AuthInfoContext.Provider>
        </LoggedInContext.Provider>
    );
};

export default AuthContextProvider;