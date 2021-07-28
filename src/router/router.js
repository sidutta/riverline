import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../mainPage/mainPage';
import PrivacyPolicy from '../privacyPolicy/privacyPolicy';
const Router = () => {
    return (
        <div>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/privacy-policy' component={PrivacyPolicy}/>
        </div>
    )
}

export default Router;