import React from 'react'
import { Link } from 'react-router-dom'

export default function CarCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`./cars/${props.car.id}`}>
                <div
                    style={{ 'backgroundImage': `url("${props.car.image}")` }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`./cars/${props.car.id}`}>
                        {props.car.model}  {props.car.name}
                    </Link>
                </h3>
                <div className="font-bold mb-3">
                    Price: {props.car.price} $
                </div>
                <div className="mb-3">
                    Color: {props.car.color}
                </div>
                <Link
                    to={`./cars/${props.car.id}`}
                    className="bg-blue-500 text-white p=2 flex justify-center w-full"
                >View</Link>

            </div>
        </div>
    )
}