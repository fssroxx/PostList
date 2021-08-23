import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import {AuthContext} from './context/'

import AppRouter from "./components/AppRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setIsLoading(false);
    },[]);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
}
export default App;
