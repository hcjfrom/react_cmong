import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Login from '../FormBox/Login.js';
import LoginForm from '../FormBox/LoginForm.js';
import MainPage from '../Main/MainPage.js';



class TotalHome extends Component {
    render(){
        return (
            <div id="cmong">
                {/* <UtileHead />
                <InfoConts />
                <Footer /> */}
                <Route exact path="/" component={MainPage} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/LoginForm" component={LoginForm} />
            </div>
        );
    }
}

export default TotalHome;