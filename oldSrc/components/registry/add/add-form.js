import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Card, Button, Input  } from 'react-native-elements';

export default class AddRegistry extends React.Component {
    static navigationOptions = ({ navigation}) => {
        const type = navigation.getParam('type', 1);
        return {
            title: type > 0 ? 'Nuevo Ingreso' : 'Nuevo Egreso',
        }
      };
    state = {
        amount:0,
        description: '',
        label: '',
    }

    onChanged = (text, id, isNum) => {
        this.setState({
            [id]: isNum === true ? parseFloat(text.replace(/[^\d.,-]/g,'')) : text,
        });
    }

    onClickOk = () => {
        const { amount, description, label } = this.state;
        const type = this.props.navigation.getParam('type', 1);  
        console.log(type);
        this.props.addRegistry({
            description,
            label,
            amount: (type > 0) ? amount : amount * -1,
        });
        this.props.navigation.navigate('home');
    }

    onClickCancel = () => {
        this.props.navigation.navigate('home');
    }
    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle={styles.card}>
                    <Text style={styles.title}>Valor</Text>
                    <Input
                        style={styles.value}
                        keyboardType='numeric'
                        placeholder="00.00"
                        value={this.state.amount}
                        onChangeText={text => this.onChanged(text, 'amount', true)}
                    />
                    <Input
                        style={styles.value}
                        placeholder="Descripcion"
                        onChangeText={text => this.onChanged(text, 'description', false)}
                    />
                    <Text style={styles.title}>Etiqueta</Text>
                    <Input
                        placeholder="xxxxx"
                        style={styles.value}
                        onChangeText={text => this.onChanged(text, 'label', false)}
                    />
                </Card>
                <View style={styles.buttonContainer}>
                    <Button  icon={
                        <AntIcon
                            name="pluscircle"
                            size={15}
                            color="green"
                        />
                        }
                        title=" Agregar"
                        style={{marginStart: 10, marginEnd:10,}}
                        onPress={this.onClickOk}
                    />
                    <Button
                        title="Cancelar"
                        color="red"
                        onPress={this.onClickCancel}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf:'stretch',
    },
    title: {
        fontSize:30,
        marginBottom:5,
    },
    value: {
        fontSize:20,
        alignSelf:'flex-start',
        margin:20,
    },
    card:{
        alignSelf: "stretch",
        backgroundColor:'#eee',
    },
});