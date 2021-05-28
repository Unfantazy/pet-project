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
                <Route exact path={"/pet-project"} render={() => <Profile/>}/>
                <Route path={"/pet-project/login"} render={() => <Login/>}/>
                <Route path={"/pet-project/register"} render={() => <Registration/>}/>
                <Route path={"/pet-project/test"} render={() => <Test/>}/>
                <Route path={'*'} render={() => <NotFound/>}/>
            </Switch>
        </div>
    );
}

export default App;
