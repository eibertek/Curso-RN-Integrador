import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';
import { styles } from './styles';

export const LoginForm = props => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Card containerStyle={{ alignSelf: 'stretch' }}>
                <Input placeholder="Usuario" />
                <Input placeholder="Mail" />
                <Input placeholder="Password" />
            </Card>
            <View >
                <Button containerStyle={styles.buttonStyle} title="Login"
                    onPress={() => {
                        props.newUser({
                            name: 'asasa',
                            email: '',
                            password: '',
                        })
                        this.props.navigation.navigate('SiguientePagina')
                    }} />
            </View>
            {props.user.name && <View><Text>{props.user.name} Logueado</Text></View>}
        </View>
    );
}

LoginForm.propTypes = {
    user: PropTypes.object,
}
export default LoginForm;