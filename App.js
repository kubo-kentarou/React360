import React from 'react';
import { Gradient } from 'react-gradient';

const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
];

export default function App(){
    return(
        <div className="app">
            <Gradient
                gradints = {gradients}
                property = "background"
                duration = { 3000 }
                angle = "45deg"
            />
        </div>
    );
}