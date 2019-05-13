import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ConnectedForm as LoginModule } from "./LoginModule";


const AppNavigator = createStackNavigator({
    login: LoginModule,
}, {
        initialRouteName: "login"
    });

export default createAppContainer(AppNavigator);