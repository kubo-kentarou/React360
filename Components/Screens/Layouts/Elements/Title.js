import React from 'react';
import {
    Text,
    View,
} from 'react-360';

class Title extends React.Component{
    render(){
        return(
            <View style={{margin: 0.1, hight: 0.5}}>
                <Text style={{
                    fontSize: 0.5,
                    fontWeight: '400',
                    textAligin: 'center',
                    textAliginVertical: 'center'
                }}>
                    INS Vilatzara
                </Text>
            </View>
        )
    }
}

module.exports = Title;