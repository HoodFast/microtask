import React, {useState} from 'react';
import {NewComponent} from "./site/NewComponent";



export type CarsType = {
    manufacturer: string
    model: string
}

const topCars: Array<CarsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


function App() {

    return (
        <NewComponent cars={topCars}/>
    );
}

export default App;