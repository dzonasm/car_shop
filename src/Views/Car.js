import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/httpRequests"
import { CarContext } from '../CarContext/CarContext'



export default function Car() {
    const { id } = useParams()
    const url = `https://5f608e2b90cf8d0016557f04.mockapi.io/cars/${id}`;
    let content = null
    let car = useAxiosGet(url)
    const [newCarList] = useContext(CarContext)
    let newCar = null


    if (car.error) {
        newCar = newCarList.filter(el => el.id == id)

        content =
            <div className="bg-gray-200 border rounded-lg overflow-hidden max-w-md text-center items-center w-full md:w-1/4 md:px-3">
                <div className="margin-auto">
                    <img
                        src={newCar[0].image}
                        alt={newCar[0].name}
                    />
                </div>
                <div className='p-6'>
                    <h1 className="text-xl font-bold mb-3">
                        {newCar[0].model} {newCar[0].name}
                    </h1>
                    <div className="font-bold text-l mb-3">
                        $ {newCar[0].price}
                    </div>
                    <div>
                        <ul>
                            <li>Color: {newCar[0].color}</li>
                            <li>Milage: {newCar[0].milage} mi</li>
                            <li>Year: {newCar[0].year}</li>
                        </ul>
                    </div>
                </div>
            </div>

    }


    if (car.loading) {
        content = <Loader />
    }


    if (car.data) {
        content =
            <div>
                <h1 className="text-xl font-bold mb-3">
                    {car.data.model} {car.data.name}
                </h1>
                <div>
                    <img
                        src={car.data.image}
                        alt={car.data.name}
                    />
                </div>
                <div className="font-bold text-l mb-3">
                    $ {car.data.price}
                </div>
                <div>
                    <ul>
                        <li>Color: {car.data.color}</li>
                        <li>Milage: {car.data.milage} mi</li>
                        <li>Year: {car.data.year}</li>
                    </ul>
                </div>
            </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

