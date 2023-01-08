import React, {useState} from "react";
import {corrMoneyType, FilterType} from "../App";



type SandMoneyType = {
    sand:corrMoneyType
}



export const NewComponent_1 = (props:SandMoneyType) => {

    const[filter,setFilter]=useState<FilterType>('all')


    let corrMoney = filter=='all'? props.sand: props.sand.filter((filterMoney) => filterMoney.banknote === filter)

    const onClickFHandler = (name: FilterType) => {
        setFilter(name)
    }
    return (
        <>
            <ul>
                {corrMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => onClickFHandler('all')}>all</button>
                <button onClick={() => onClickFHandler('ruble')}>rubles</button>
                <button onClick={() => onClickFHandler('dollar')}>dollar</button>
            </div>
        </>
    )
}