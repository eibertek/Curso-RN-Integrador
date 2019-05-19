import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, ScrollView } from 'react-native';
import { Slider } from 'react-native-elements';
import { throwDices } from '../redux/actions';

const StatusPlayer = props => {
  const [sliderState, setSlider ] = useState(50);

  return (
    <View>
      <Text>{props.playerName}</Text>
      <Text>Stats</Text>
      <Slider
        value={sliderState}
        onValueChange={value => setSlider(value)}
      />
      <ScrollView>
        <Text>el dado dio {props.dices && props.dices.value} </Text>
      </ScrollView>
      <Text>Throw the Dice!</Text>
      <Button onPress={props.throwDicespending} title="Throw" />
    </View>
  )
}

StatusPlayer.defaultProps = {
  playerName: 'PLACEHOLDER',
}


const dispatchtoprops = dispatch => ({ 
    throwDicespending: () => throwDices(dispatch),
  });

export default connect(store => ({ dices: store.dashboard.dice,}), dispatchtoprops)(StatusPlayer);

