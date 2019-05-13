/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import Flow from './navigation';

export default class App extends Component {
  render() { 
    return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={()=> <View><ActivityIndicator></ActivityIndicator></View>}>
          <Flow />
         </PersistGate>
      </Provider>
    );
  }
}



