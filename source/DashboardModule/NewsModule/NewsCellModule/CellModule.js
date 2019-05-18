import React, { Component } from 'react';
import { Text} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
export default class NewsCell extends Component {
  render() {
    return (
        <Card
        title={this.props.title}
        image={{uri:this.props.urlToImage}}>
        <Text style={{marginBottom:5}}>
          {this.props.description}
        </Text>
        <Button
          backgroundColor='#03A9F4'
          title='VIEW NOW' />
      </Card>
    )
  }
}