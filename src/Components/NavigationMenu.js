import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                The Menu
        </div>
            <ul>
                <li>
                    <Link
                        to='/'
                        className='text-blue-500  py-3 border-t border-b block'
                        onClick={props.closeMenu}
                    >
                        Home
                </Link>
                </li>
                <li>
                    <Link
                        to='/addcar'
                        className='text-blue-500  py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Post Car
                </Link>
                </li>
            </ul>
        </div>
    )
}
