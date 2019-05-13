import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Icon  } from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";

export default class DashBoard extends React.Component {
    static navigationOptions = {
        title: 'Mis Fondos',
      };

      gotoAddForm = (type, evt) => {
          this.props.navigation.navigate('addForm', { type, evt });
      }
    render() {
        return (
            <View style={{flex:1}}>
                <Card>
                    <Text>Money Available</Text>
                    <Text>ARS - 0</Text>
                    <Text>USD - 0</Text>
                </Card>
                <Card containerStyle={styles.card}>
                    <Text style={{height:50, fontWeight:'900'}}>Registrar movimiento de dinero</Text>
                    <View style={styles.container}>
                        <View style={styles.incomeButton}>
                             <AntIcon name="pluscircle" color="green" size={50} onPress={evt => this.gotoAddForm(1, evt)} />
                             <Text>Ingreso</Text>               
                        </View>
                        <View style={styles.outcomeButton}>
                           <AntIcon name="minuscircle" color="red" size={50}  onPress={evt => this.gotoAddForm(-1, evt)} />
                           <Text style={{ textAlignVertical:'center'}}>Egreso</Text>                              
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#dadada',
        height:140,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    incomeButton: {
        height:50,
        margin:20,
        backgroundColor:'white',
        borderRadius:50,
    },
    outcomeButton:{
        height:50,
        margin:20,
        backgroundColor:'white',
        borderRadius:50,
    }
});