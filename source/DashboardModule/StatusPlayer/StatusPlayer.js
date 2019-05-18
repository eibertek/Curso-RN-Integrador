import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { Slider } from 'react-native-elements';

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
        <Text>Stats</Text>
        <Text>Stats</Text>
        <Text>Stats</Text>
        <Text>Stats</Text>
        <Text>Stats</Text>
      </ScrollView>
      <Text>Throw the Dice!</Text>
      <Button title="Throw" />
    </View>
  )
}

StatusPlayer.defaultProps = {
  playerName: 'PLACEHOLDER',
}

export default StatusPlayer

