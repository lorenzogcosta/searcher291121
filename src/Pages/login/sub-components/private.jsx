import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Context from '../Context';

const RoutePrivate = ({ component: Component, ...rest }) => {

    const { logged } = useContext(Context)

    const navigate = useNavigate();

    return (
        <Routes>
            <Route
                {...rest}
                render={() => logged
                    ? <Component {...rest} />
                    : navigate('/login')
                }
            />
        </Routes>
    )
}

export default RoutePrivate;