import React from 'react'

const RentItems = (props) => {
    let imgsrc=`./house${props.id}.webp`
    return (
        <div>
            <div className='items'>
                <img style={{ width: '400px', height: '250px' }} src={imgsrc} />
                <span>{props.price}</span>/month
                <h4>{props.name}</h4>
                <p>{props.address}</p>
                <div className='info'>{props.info}</div>
            </div>
        </div>
    )
}

export default RentItems