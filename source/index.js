import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedForm as LoginModule} from "./LoginModule";
import { Provider } from 'react-redux';
import { store, persistor } from './store';

  
export const App = props => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={()=> null}>
            <LoginModule />
        </PersistGate>
    </Provider>
);

export default App;