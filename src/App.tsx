import React, {MouseEventHandler, useState} from 'react';
import {NewComponent} from "./site/NewComponent";
import {MouseEvent} from 'react';
import {Button} from "./site/button";
import {NewComponent_1} from "./site/NewComponent_1";

export type CarsType = {
    manufacturer: string
    model: string
}
type SubsType = string
export type corrMoneyType = Array<MoneyType>
type MoneyType = {
    banknote: string
    nominal: number
    number: string
}
export type FilterType = 'all' | 'dollar' | 'ruble'
const topCars: Array<CarsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


function App() {
    const Button1Foo = (subs: string, age: number) => {
        console.log(subs, age)
    }
    const Button2Foo = (subs: string, age: number) => {
        console.log(subs, age)

    }
    const Button3Foo = () => {
        console.log('im stuped button')

    }
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    let [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }
    const zeroDown = () => {
        setA(a = 0);
    }



    return (
        <>
            <NewComponent cars={topCars}/>
            <Button name={"MyYoutube-1"} callBack={() => Button1Foo('Im vasya', 21)}/>
            <Button name={"MyYoutube-2"} callBack={() => Button2Foo('Im vitalya', 25)}/>
            <Button name={"stuped button"} callBack={Button3Foo}/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={zeroDown}>000</button>
            <NewComponent_1 sand={money}/>
        </>
    )
}

export default App;