import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Card, Button, Input, Icon } from 'react-native-elements';
import CardButton from './img/card.png';
import OrDivider from './img/orDivider.png';
import GoogleSignIn from './img/googleSignIn.png';
import FacebookSignIn from './img/facebookSignIn.png';
import { styles } from './styles';

export const LoginForm = props => {
    return (
        <View>
            <ImageBackground  
            source={CardButton}
            style={{ width:null, height:null, backgroundColor: 'rgba(200,200,200,0.1)'}}
            imageStyle={{ width: 340, height:460, resizeMode: 'contain', }}
            >
            <Text style={{position: 'absolute', marginTop:50, marginLeft:60,}}>Sign Up</Text>
            <Text style={{position: 'absolute', marginTop:50, marginLeft:130,}}>Log In</Text>
            </ImageBackground>
         <View style={{position: 'absolute', marginTop:100, marginLeft:30, width:270, zIndex:999,}}>
            <Input 
            placeholder="Usuario" 
            inputContainerStyle={{borderWidth: 1, borderColor: 'black', borderRadius: 30, marginBottom:10 }}
            overflow="hidden"
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={(text)=>{ console.log(text)}}
            />
            <Input placeholder="Password" 
            inputContainerStyle={{borderWidth: 1, borderColor: 'black', borderRadius: 30 }}
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            />          
         </View>
         <Image source={OrDivider} style={{position: 'absolute', marginTop:420, marginLeft:30, width:270}}></Image>
         <Image source={GoogleSignIn} style={{position: 'absolute', marginTop:450, marginLeft:90 }}></Image>
         <Image source={FacebookSignIn} style={{position: 'absolute', marginTop:450, marginLeft:170 }}></Image>
        </View>
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
export default LoginForm;