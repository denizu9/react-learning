import React, { createContext, useMemo, useState } from "react";

const LogInContext = createContext();

const LogInContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const contextValue = useMemo(() => {
        return {
            isLoggedIn,
            setIsLoggedIn,
            userName,
            setUserName
        };
    }, [isLoggedIn, userName]);

    return (
        <LogInContext.Provider value={contextValue}>
            {props.children}
        </LogInContext.Provider>
    );
};

export { LogInContext, LogInContextProvider };
