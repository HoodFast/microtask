import {CarsType} from "../App";


export type propsCarsType = {
    cars: Array<CarsType>
}


export const NewComponent = (props: propsCarsType) => {
    return (
        <>
            {

            }
            {props.cars.map((s,index)=>{
                return <li key={index}>
                    <div> {index+1}.</div>
                    <span>{s.manufacturer}</span>
                    <span>-- model: {s.model}</span>
                </li>
            })}
        </>
    )
}