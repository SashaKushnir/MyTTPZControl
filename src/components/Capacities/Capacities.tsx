import React, {ChangeEvent, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {capacitiesA} from "../../redux/capacitiesR/capacitiesA";
import {CapacityItemComponent} from "./CapacityItem";
import s from './Capacities.module.css'

export const Capacities = () => {
    const capacities = useSelector((state: RootState) => state.capacitiesR.capacities).map((capacityI, index) => {
        return <CapacityItemComponent capacityItem={capacityI} key={index}/>
    })
    const d = useDispatch()
    const [capacitiesAmount, setCapAmount] = useState("")
    const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if ((e.target.value.match(/^[2-5]{1}$/) && !(e.target.value.length > 1)) || e.target.value.length === 0) {
            setCapAmount(e.target.value)
        }
    }
    const submitHandleClick = () => {
        if (capacitiesAmount.length > 0)
            d(capacitiesA.createCapacities(Number(capacitiesAmount)))
    }
    return <div>
        {(capacities.length === 0) && <div>
            You want to control (2-5): <input value={capacitiesAmount} onChange={inputHandleChange}/>
            <button onClick={submitHandleClick}>Submit</button>
        </div>}
        {(capacities.length > 0) && <div className={s.capacitiesWrapper}>
            {capacities}
        </div>}
    </div>
}