import React, {createContext} from 'react';
import loginDefaultData from "./loginDefaultState";

const {Provider, Consumer} = createContext(loginDefaultData);

const LoginStateProvider = ({children, value}) => {
    return <Provider value={value}>{children}</Provider>;
}

export {LoginStateProvider, Consumer as LoginStateConsumer};