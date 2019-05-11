import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, Input  } from 'react-native-elements';
import { styles } from './styles';

export const LoginForm = props => {
    return (
        <View styles={styles.container}>
            <Text>Login</Text>
            <Card>
               <Input placeholder="Usuario" />
               <Input  placeholder="Mail" />
               <Input  placeholder="Password" />
               <View styles={styles.buttonContainer}>
                 <Button buttonStyle={styles.buttonStyle} title="Login" onPress={()=>{}} />
                </View> 
            </Card>
        </View>
    );
}

export default LoginForm;