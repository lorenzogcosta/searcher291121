import React from "react";
import Context from "./Context";
import useStorage from './utils/useStorage';

const LoginProvider = ({ children }) => {
    const [token, setToken] = useStorage('token');
    
    return (
        <Context.Provider  value={{

            token,
            setToken,
        }}>
            {children}
        </Context.Provider>
    )
};

export default LoginProvider;