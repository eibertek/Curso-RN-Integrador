import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import Dashboard from "./DashboardModule";
import StatusPlayer from "./DashboardModule/StatusPlayer/StatusPlayer";
import { ConnectedForm as LoginModule, SignUpForm } from "./LoginModule";


const AppNavigator = createSwitchNavigator({
    dashboard: createStackNavigator({ Dashboard, StatusPlayer }),
    login: createStackNavigator({ LoginModule, })
}, {
        initialRouteName: "login"
    });

export default createAppContainer(AppNavigator);