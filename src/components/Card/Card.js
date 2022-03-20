import React from 'react';
import './Card.css';

const Card = ({data}) => {
  return (
    <>
      <div className='card item'>
        <img className='thumbnail-image' alt="Thumbnail" src={data.image} />
        <div>
          {data.name}
        </div>
        <div>
          {data.description}
        </div>
      </div>
    </>
  )
}

export default Card