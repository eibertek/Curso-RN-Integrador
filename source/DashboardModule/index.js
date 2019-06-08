import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { throwDices } from './redux/actions';

const Dashboard = props => {
  const goToStatus = () => {
      // llamo a la accion
      props.throwDices();
      props.navigation.navigate('StatusPlayer');
    }
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="GO to status player" onPress={goToStatus} />
      <Button title="Log out" onPress={() => props.navigation.navigate('login')} />
    </View>
  )
}

const dispatchtoprops = dispatch => ({ 
    throwDices: () => throwDices(dispatch),
  });

export default connect(()=>({}), dispatchtoprops)(Dashboard)
