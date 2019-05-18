import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from "./DashboardModule";
// import { ConnectedForm as LoginModule, SignUpForm } from "./LoginModule";


const AppNavigator = createStackNavigator({
    dashboard: Dashboard,
}, {
        initialRouteName: "dashboard"
    });

export default createAppContainer(AppNavigator);