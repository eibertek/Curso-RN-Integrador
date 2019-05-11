import React from 'react';
import { Text, View } from 'react-native';
import LoginModule from "./LoginModule";
import { Provider } from 'react-redux';
import { store } from './store';


store.dispatch({
    type: 'NUEVO USUARIO',
    info:{ 
      man:'asasas',
      age:20,
    }
  });
  
export const App = props => (
    <Provider store={store}>
        <View>
            <Text>AAAA</Text>
            <LoginModule />
        </View>
    </Provider>
);

export default App;