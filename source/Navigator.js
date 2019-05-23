import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from "./DashboardModule";
import StatusPlayer from "./DashboardModule/StatusPlayer/StatusPlayer";
import { ConnectedForm as LoginModule, SignUpForm } from "./LoginModule";


const AppNavigator = createStackNavigator({
    loginmodule: LoginModule,
    dashboard: Dashboard,
    statusPlayer: StatusPlayer,
}, {
        initialRouteName: "loginmodule"
    });

export default createAppContainer(AppNavigator);