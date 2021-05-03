import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helpers";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (isAuthenticated() && isAuthenticated().user.role === 'admin') ? (
                <Component {...props} />
            ) : (
                //console.log(props)

                // toastr.warning('please check your Prevelege', {
                //     positionClass: "toast-bottom-left"}),
                //     setTimeout(() => {
                        
                //         }, 1000)

                        props.history.goBack()
                
                
                // window.location='/hr',
                // setTimeout(() => {
                //     toastr.warning('please check your Prevelege', {
                //         positionClass: "toast-bottom-left"})
                // }, 50)
                
                // <Redirect
                //     to={{
                //         pathname:props.location.pathname
                //     }}
                // />
               
            )
        }
    />
);

export default PrivateRoute;