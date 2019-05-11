import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, Input  } from 'react-native-elements';
import { styles } from './styles';

export const LoginForm = props => {
    console.log(props);
    if(props.user.name) return <View><Text>{props.user.name} Logueado</Text></View>
    return (
        <View styles={styles.container}>
            <Text>Login</Text>
            <Card>
               <Input placeholder="Usuario" />
               <Input  placeholder="Mail" />
               <Input  placeholder="Password" />
               <View styles={styles.buttonContainer}>
                 <Button buttonStyle={styles.buttonStyle} title="Login" 
                 onPress={() => props.newUser({
                     name:'asasa', 
                     email:'',
                     password:'',
                 })} />
                </View> 
            </Card>
        </View>
    );
}

LoginForm.propTypes = {
    user: PropTypes.object,
}
export default LoginForm;