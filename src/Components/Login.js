import React, { Fragment } from 'react';

import { Password } from "@bit/primefaces.primereact.password";
import { LoadingButton } from "@bit/sladesoftware.react-components.loading-button";
import Email from "./emailInput"

import { LoginStateConsumer } from "../context/loginContext";

const Login = () => {
    return (
        <LoginStateConsumer>
            {({ passwordValue, setPasswordValue, emailValue, setEmailValue, loading, setLoading }) => (
                <div className="LoginWrapper">
                    <p class="SignInCopy" align="center">Sign in</p>
                    <Email />
                    <Password
                        value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        label="Password Input"
                    />
                    <LoadingButton
                        loading={loading}
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => setLoading(false), 3000);
                        }}
                        buttonProps={{
                            variant: "contained",
                            color: "primary",
                            style: {
                                width: 250,
                                height: 50,
                                overflow: "hidden"
                            }
                        }}
                    >
                        Click Me
                    </LoadingButton>

                </div>
            )
            }
        </ LoginStateConsumer>

    );
}

export default Login;
