import React from 'react'
import {Link} from 'react-router-dom'
import './heeader.scss'

function Header() {
    return (
        <div className="header-container">
            <ul>
                <li>
                    <Link className="header_item" to="/"> Home</Link>
                </li>
                <li>
                    <Link className="header_item" to="/pokemon"> pokemon</Link>
                </li>
                <li>
                    <Link className="header_item" to="/function1"> Function 1</Link>
                </li>
                <li>
                    <Link className="header_item" to="/function2"> Function 2</Link>
                </li>
                <li>
                    <Link className="header_item" to="/function3"> Function 3</Link>
                </li>
            </ul>
            
            
            
            
            
        </div>
    )
}

export default Header
