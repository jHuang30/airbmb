import React from 'react';
import {Link} from 'react-router-dom';



const SpotIndexItem = ({spot}) => {

    const rating = 4;
    const stars = [];
    let i = 0
    while (i < rating){
        stars.push(<i key={i} className="fas fa-star"></i>);
        i++;
    }

    while (stars.length < 5){
        stars.push(<i key={stars.length} className="far fa-star"></i>);
    }
    const beds = spot.num_beds + (((spot.num_beds)> 1 ? ' beds' : ' bed')).toUpperCase();
    const type = spot.spotType.toUpperCase();

    // const bgImage = {
    //     background: spot.photoUrls[0]
    // }
    
    

    return (
        <div>
            <div className="singeSpotContainer">
                    <Link className='no-underline' to={`/spots/${spot.id}`}>
                        <div className='spot-image'>
                            <img src={spot.photoUrls[0]}/>
                        </div>
                        <h1 className='spot-type'>{type} · {beds}</h1>
                        <h1 className='spot-title'>{spot.title}</h1>
                        <h1 className='spot-price'> $ {spot.price} per night</h1>
                        <p className='rating-star'>{stars}</p>
                    </Link>
            </div>
        </div>
       )
}

export default SpotIndexItem
