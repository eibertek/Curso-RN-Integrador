import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from "./DashboardModule";
import StatusPlayer from "./DashboardModule/StatusPlayer/StatusPlayer";
// import { ConnectedForm as LoginModule, SignUpForm } from "./LoginModule";


const AppNavigator = createStackNavigator({
    dashboard: Dashboard,
    statusPlayer: StatusPlayer,
}, {
        initialRouteName: "dashboard"
    });

export default createAppContainer(AppNavigator);