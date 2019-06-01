import React, { Component } from 'react';
import {View,Text,StyleSheet,NativeModules,TouchableHighlight,Image, } from 'react-native';
import GoogleSignIn from './img/googleSignIn.png';

const GoogleUtil = NativeModules.GoogleUtil;

export default class GoogleLoginButton extends Component {
    constructor (props) {
        super(props);
    
        this.onLogin = this.onLogin.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    
        this.state = {
          status: false,
          text: 'Sign out'
        };
      }

      onLogin() {
        if(this.state.status)
          this.logout()
        else
          this.login()
      }
    
      login() {
        GoogleUtil.setup()
        .then(() => {
          GoogleUtil.login(
            (err,data) => {
              this.handleLogin(err,data)
            }
          );
        });
      }
    
      logout() {
        GoogleUtil.logout((err, data) => {
          this.setState({status:false});
          this.handleLogin(err, data);
        })
      }
    
      handleLogin(e, data) {
        const result = e || data;
        if (result.eventName == "onLogin") {
          this.setState({status:true});
        } 

        if(result.eventName && this.props.hasOwnProperty(result.eventName)){
          const event = result.eventName;
          delete result.eventName;
          this.props[event](result);
        }
        console.log(result, e, data);
      }

      render(){
        const text = this.state.text;
        return (
          <TouchableHighlight onPress={this.onLogin}  >
              <Image source={GoogleSignIn}  />
          </TouchableHighlight>
        )
      }
}

const styles = StyleSheet.create({
    button: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      height: 45,
    },
    opaque: {
      padding: 10,
     flexDirection: 'row',
      alignItems: 'center',
      height: 45,
    }
  });