import React from 'react'
import './Houses.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Houses = () => {
    return (<div className='searchBox'>
        <div className='head'>Search Property for rent</div>
        <div><NavDropdown className='search' title="Search with searchBar" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Location</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Price
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Property type</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Checkin Date
            </NavDropdown.Item>
        </NavDropdown></div>
    </div>
    )
}

export default Houses