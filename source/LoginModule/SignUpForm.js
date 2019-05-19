import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import { Card, Button, Input, Icon } from 'react-native-elements';
// import CardButton from './img/card-button.svg';
import { styles } from './styles';

export const SignUpForm = props => {
    return (
        <ImageBackground  
        source={require('./img/card-button.svg')}
        />
    );
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Card containerStyle={{ alignSelf: 'stretch', height:250, }}>
                <Input 
                placeholder="Usuario" 
                inputContainerStyle={{borderWidth: 1, borderColor: 'black', borderRadius: 30 }}
                overflow="hidden"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                />
                <Input placeholder="Mail" 
                inputContainerStyle={{borderWidth: 1, borderColor: 'black', borderRadius: 30 }}
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                />
                <Input placeholder="Password" 
                inputContainerStyle={{borderWidth: 1, borderColor: 'black', borderRadius: 30 }}
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                />          
            </Card>
            <View style={{top:-50}}>
                <Card containerStyle={{ height:70, width:70, borderRadius:30,  position:'absolute', zIndex:-99, }}>
                <Button 
                    containerStyle={{ position:'absolute', zIndex:999, }}
                    buttonStyle={styles.buttonStyle}   
                    icon={
                        <Icon
                        type="font-awesome"
                        name="arrow-right"
                        size={15}
                        color="white"
                        />
                    }
                    onPress={() => {
                        props.newUser({
                            name: 'asasa',
                            email: '',
                            password: '',
                        })
                        props.navigation.navigate('signUp')
                    }} />                
                </Card>                  
            </View>
            {props.user && props.user.name && <View><Text>{props.user.name} Logueado</Text></View>}
        </View>
    );
}

LoginForm.propTypes = {
    user: PropTypes.object,
}
export default SignUpForm;