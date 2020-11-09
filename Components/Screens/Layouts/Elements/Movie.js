import React from 'react';
import {
    Video,
    View,
    asset
} from 'react-360';

export default class Movie extends React.Component{
    render(){
        return(
            <View style={{ margin: 0.1, hight: 2}}>
                <Video style={{hight:2}} source={asset('test.mp4')}/>
            </View>
        )
    }
}
// module.exports = Movie;
