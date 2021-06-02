import {ActionsTypes} from "../store";
import {capacitiesA} from "./capacitiesA";

export interface InitialCapacityType {
    capacities: Array<CapacityItem>
}

export interface CapacityItem {
    id: number
    cap: number
}

const initialCapacities: InitialCapacityType = {
    capacities : []
}



export const capacitiesR = (capacityState: InitialCapacityType = initialCapacities, action: ActionsTypes<typeof capacitiesA>) => {
    switch (action.type) {
        case "CREATE_CAPACITIES":
            return {
                ...capacityState,
                capacities: createCapacities(action.num)
            }
        case "CHANGE_CAPACITY":
            return {
                ...capacityState,
                capacities: [...capacityState.capacities].map((capacityI) => {
                    if(capacityI.id === action.id) {
                        capacityI.cap = action.cap
                    }
                    return capacityI
                })
            }
        default:
            return capacityState
    }
}

export const createCapacities = (num: number) :Array<CapacityItem> => {
    const capacityItems: Array<CapacityItem> = []
    for(let i = 0; i < num; i++) {
        capacityItems.push(
            {
                cap: Math.floor(Math.random() * 100) + 1,
                id: i + 1
            }
        )
    }
    return capacityItems
}