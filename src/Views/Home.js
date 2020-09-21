import React, { useContext } from 'react'

import Loader from "../Components/Loader";
import CarCard from "../Components/CarCard";
import useAxiosGet from "../Hooks/httpRequests";
import { CarContext } from '../CarContext/CarContext'

export default function Home() {
    const url = `https://5f608e2b90cf8d0016557f04.mockapi.io/cars/`;
    let content = null;
    let cars = useAxiosGet(url)
    const [newCarList] = useContext(CarContext)
    let list = null

    if (cars.error) {
        content = <h1>Error bruh 404</h1>;
    }

    if (cars.loading) {
        content = <Loader />;
    }

    if (cars.data && newCarList) {
        list = cars.data.concat(newCarList)
        content = list.map((car, key) => (
            <div key={car.id} className='flex-no-shrink w-full md:w-1/4 md:px-3'>
                <CarCard
                    car={car}
                />
            </div>
        ));
    } else if (cars.data) {
        content = cars.data.map((car, key) => (
            <div key={car.id} className='flex-no-shrink w-full md:w-1/4 md:px-3'>
                <CarCard
                    car={car}
                />
            </div>
        ));
    }


    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                Cars for Sale
            </h1>
            <div className="flex items-center justify-between flex-wrap md:-mx-3">
                {content}
            </div>
        </div>
    );
}

