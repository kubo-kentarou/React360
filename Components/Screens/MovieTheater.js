import React from 'react';
import{
    View,
    Video
} from 'react-360';

import MovieProjector from './Layouts/MovieProjector.js';

export default class MovieTheater extends React.Component{
    render(){
        return(
            <MovieProjector/>
        )
    }
}

// module.exports = MovieTheater;