import React, {MouseEventHandler, useState} from 'react';
import {NewComponent} from "./site/NewComponent";
import {MouseEvent} from 'react';
import {Button} from "./site/button";

export type CarsType = {
    manufacturer: string
    model: string
}
type SubsType = string

const topCars: Array<CarsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


function App() {
    const Button1Foo = (subs:string, age:number) => {
        console.log(subs,age)
    }

    const Button2Foo = (subs:string,age:number) => {
        console.log(subs,age)

    }
    const Button3Foo = () => {
        console.log('im stuped button')

    }


    return (
        <>
            <NewComponent cars={topCars}/>

            <Button name={"MyYoutube-1"} callBack={()=>Button1Foo('Im vasya',21)}/>
            <Button name={"MyYoutube-2"} callBack={()=>Button2Foo('Im vitalya',25)}/>
            <Button name={"stuped button"} callBack={Button3Foo}/>


        </>
    )
}

export default App;