import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from "uuid"

export const CarContext = createContext();

export function CarProvider(props) {
    const [newCarList, setNewCarList] = useState([
        {
            id: 11,
            model: "Aston Martin",
            name: "V-10 Vantage",
            color: 'red',
            milage: 1000,
            price: 5000,
            year: 2008,
            image: `https://picsum.photos/200/300`
        }
    ])



    return (
        <CarContext.Provider value={[newCarList, setNewCarList]}>
            {props.children}
        </CarContext.Provider>
    )
}

