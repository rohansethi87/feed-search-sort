import React from 'react';
import './FeedCard.css';

const FeedCard = ({data}) => {
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

export default FeedCard