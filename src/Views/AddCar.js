import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from "uuid"
import { CarContext } from '../CarContext/CarContext'




export default function AddCar(props) {
    const [newCarList, setNewCarList] = useContext(CarContext)

    let [brand, setBrand] = useState('')
    let [name, setName] = useState('')
    let [milage, setMilage] = useState('')
    let [color, setColor] = useState('')
    let [price, setPrice] = useState('')
    let [year, setYear] = useState('')


    const handleBrand = (e) => setBrand(brand = e.target.value)
    const handleColor = (e) => setColor(color = e.target.value)
    const handleName = (e) => setName(name = e.target.value)
    const handleMilage = (e) => {
        if (isNaN(e.target.value)) { return }
        else (setMilage(milage = e.target.value))
    }
    const handlePrice = (e) => {
        if (isNaN(e.target.value)) { return }
        else (setPrice(price = e.target.value))
    }
    const handleYear = (e) => {
        if (isNaN(e.target.value)) { return }
        else (setYear(year = e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCar = {
            id: uuidv4(),
            model: brand,
            name: name,
            milage: milage,
            color: color,
            price: price,
            year: year,
            image: `https://picsum.photos/200/300`
        }
        setNewCarList(() => newCarList.concat(newCar))
        setBrand('')
        setName('')
        setMilage('')
        setColor('')
        setPrice('')
        setYear('')

    }


    return (
        <div className="pt-3 text-center">
            <h1 className="font-bold text-2xl font-mono">Submit Your Car</h1>
            <div className="flex flex-col pt-8 items-center max-w-none">
                <form onSubmit={handleSubmit}>
                    <div className="pb-4 text-left" >
                        <label className="block text-gray-500 font-bold">
                            Car Brand:
                            <input
                                value={brand}
                                type='text'
                                placeholder=' e.g. Mercedes-Benz'
                                onChange={handleBrand}
                                required
                            />
                        </label>
                    </div>
                    <div className="pb-4 text-left">
                        <label className="block text-gray-500 font-bold">Car Model:
                        <input
                                value={name}
                                type='text'
                                placeholder=' e.g E203'
                                onChange={handleName}
                                required
                            />

                        </label>
                    </div>
                    <div className="pb-4 text-left">
                        <label className="block text-gray-500 font-bold">Car Milage:
                            <input
                                value={milage}
                                type='text'
                                placeholder=' e.g. 180000'
                                onChange={handleMilage}
                                required
                            />
                        </label>
                    </div>
                    <div className="pb-4 text-left">
                        <label className="block text-gray-500 font-bold"> Price:
                            <input
                                value={price}
                                type='text'
                                placeholder=' 1000 '
                                onChange={handlePrice}
                                required
                            />$
                        </label>
                    </div>
                    <div className="pb-4 text-left">
                        <label className="block text-gray-500 font-bold">Year:
                            <input
                                value={year}
                                type='text'
                                placeholder=' e.g. 2002'
                                onChange={handleYear}
                                required
                            />
                        </label>
                    </div>
                    <div className="pb-8 text-left">
                        <label className="block text-gray-500 font-bold">Car Color:
                            <input
                                value={color}
                                type='text'
                                placeholder=' e.g. white'
                                onChange={handleColor}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    )
}
