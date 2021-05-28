import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Profile} from "../components/Profile";
import {Login} from "../components/Login";
import {Registration} from "../components/Registration";
import {Test} from "../components/Test";
import {NotFound} from "../components/NotFound";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} render={() => <Profile/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/register"} render={() => <Registration/>}/>
                <Route path={"/test"} render={() => <Test/>}/>
                <Route path={'*'} render={() => <NotFound/>}/>
            </Switch>
        </div>
    );
}

export default App;
