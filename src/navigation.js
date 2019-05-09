import { createStackNavigator, createAppContainer } from "react-navigation";
import AddForm from './components/registry/add';
import Wallet from './components/wallet';

const AppNavigator = createStackNavigator({
    home:  Wallet,
    addForm: AddForm,
  });

  export default createAppContainer(AppNavigator);