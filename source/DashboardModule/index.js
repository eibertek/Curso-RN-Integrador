import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StatusPlayer from './StatusPlayer/StatusPlayer';
import News from './NewsModule/NewsModule';



export default class componentName extends Component {
  render() {
    return (
      <View>
      <Text>Dashboard</Text>
      <StatusPlayer />
      <News />
    </View>
    )
  }
}
