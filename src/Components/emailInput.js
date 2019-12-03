import React, { Fragment } from 'react';
import { LoginPropsConsumer } from '../context/loginPropsContext';
import Input from '@bit/mui-org.material-ui.input';
const Email = () => {
    // this is purposly immutable, just playing around. 
    // If you want to make it mutable, pass the setEmailValue function into the context and access it here.

    return (
        <Fragment >
            <LoginPropsConsumer>
                {({ emailValue }) => (<div>
                    <Input type="email" name="" label="EmailInput" value={emailValue} id="" />
                </div>)}

            </LoginPropsConsumer>
        </Fragment>

    );
}

export default Email;
