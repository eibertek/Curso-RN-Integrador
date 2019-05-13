import { createStackNavigator, createAppContainer } from "react-navigation";
import { ConnectedForm as LoginModule, SignUpForm } from "./LoginModule";


const AppNavigator = createStackNavigator({
    login: LoginModule,
    signUp: SignUpForm,
}, {
        initialRouteName: "login"
    });

export default createAppContainer(AppNavigator);