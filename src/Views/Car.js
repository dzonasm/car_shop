import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/httpRequests"

export default function Car() {
    const { id } = useParams()
    const url = `https://5f608e2b90cf8d0016557f04.mockapi.io/cars/${id}`;
    let content = null
    let car = useAxiosGet(url)

    if (car.error) {
        content = <h1>Error bruh 404</h1>
    }


    if (car.loading) {
        content = <Loader />
    } else if (car.data) {
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

