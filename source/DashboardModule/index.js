import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import StatusPlayer from './StatusPlayer/StatusPlayer';
import { Button } from 'react-native-elements';

const Dashboard = props => {
  const goToStatus = () => {
      // llamo a la accion
      props.actionFetch();
      props.navigation.navigate('statusPlayer');
    }
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="GO to status player" onPress={goToStatus} />
    </View>
  )
}

const action = async (dispatch) => {
  let data = await fetch('http://roll.diceapi.com/json/d6', { contentType:'application/json'});
  data = await data.json(); 
  console.log(dispatch, data);
  dispatch ({
      type:'fetch', 
      data         
    });
}

const dispatchtoprops = dispatch => ({ 
    actionFetch: () => action(dispatch),
  });

export default connect(()=>({}), dispatchtoprops)(Dashboard)
