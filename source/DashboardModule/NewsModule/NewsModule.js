import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ScrollView  } from 'react-native';
import NewsCell from './NewsCellModule/CellModule';


export default class News extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    try {
      
    
   fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=189a443163814db28eb186f42d331901')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    } catch (error) {
      console.log(error);
      
      
    }
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{ padding: 10, marginBottom: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
      // console.log(this.state);
      {this.state.dataSource.map(item => console.log(item.title))}
      
    return(
        <ScrollView>
        {this.state.dataSource.map((item, index) => <NewsCell {...item}></NewsCell>)}
        </ScrollView>
      
        
    
    );
  }
}
