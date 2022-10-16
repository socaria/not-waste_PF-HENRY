import React from 'react';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import '../Card/card.css'

function Card({name, image, price}) {
    return (
    
        <div>
        <div className="card">
            <img src={image} className='imgbig' alt="imgcard"/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <div className='h4price'>
                        <Link to='/detail:id' className="btn btn-primary">Detalle</Link>
                        <h5 >${price}</h5>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Card