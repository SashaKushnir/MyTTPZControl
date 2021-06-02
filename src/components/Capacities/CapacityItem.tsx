import React, {ChangeEvent, useEffect, useState} from 'react'
import {CapacityItem} from "../../redux/capacitiesR/capacitiesR";
import s from './CapacityItem.module.css'
import {useDispatch} from "react-redux";
import {capacitiesA} from "../../redux/capacitiesR/capacitiesA";

interface CapacityItemInterface {
    capacityItem: CapacityItem
}

export const CapacityItemComponent: React.FC<CapacityItemInterface> = ({capacityItem}) => {
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState(capacityItem.cap.toString())
    const d = useDispatch()
    const textInput = React.createRef<HTMLInputElement>()
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.match('^[1-9][0-9]?$|^100$') || e.target.value.length === 0) {
            setInputValue(e.target.value)
        }
    }

    const changeCapInfo = () => {
        d(capacitiesA.changeCap(capacityItem.id, Number(inputValue)))
        setEditMode(false)
    }

    const setEditModeTruthy = () => {
        setEditMode(true)
    }
    useEffect(() => {
        if(editMode)
            textInput.current?.focus()
    }, [editMode])

    return <div className={`${s.spaceI} ${(capacityItem.cap > 85)?s.redColored:((capacityItem.cap > 50)?s.yellowColored:s.greenColored)}`}>
        <div>Capacity Number: {capacityItem.id} </div>
        {editMode && <input ref={textInput} type="text" value={inputValue} onChange={inputChangeHandler} onBlur={changeCapInfo}/>}
        {!editMode && <div onClick={setEditModeTruthy}>Capacity: {capacityItem.cap}%</div>}
        {(capacityItem.cap > 85) && <div>
            Capacity level is more than 85!
        </div>}
    </div>
}