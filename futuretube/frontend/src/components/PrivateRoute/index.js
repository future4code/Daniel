import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export function PrivateRoute(props) {
    const { children, ...otherProps } = props

    return (
        <Route {...otherProps} >
            {localStorage.getItem("token") ? children : <Redirect to={{ pathname: '/login' }} />}
        </Route>
    )
}
