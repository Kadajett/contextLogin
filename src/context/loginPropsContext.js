import React, {createContext} from 'react';


const {Provider, Consumer} = createContext({});

const LoginPropsProvider = ({children, value}) => {
    return <Provider value={value}>{children}</Provider>;
}

export {LoginPropsProvider, Consumer as LoginPropsConsumer};