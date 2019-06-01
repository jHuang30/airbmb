import React from 'react';
import {Link} from 'react-router-dom';



const SpotIndexItem = ({spot}) => {
    return (
        <div>
            <div className="singeSpotContainer">
                    <Link className='no-underline' to={`/spots/${spot.title}`}>
                        <div className='spot-image'>
                            <img src="https://skift.com/wp-content/uploads/2018/10/london-airbnb-living-room-e1539104712815.jpg" alt="" />
                        </div>
                        {/* Main picture goes here :) */}
                    <h1 className="price"> {spot.price} per night<br /><br /></h1>$
                        {spot.title}
                        {/* rating goes here */}
                    </Link>
            </div>
        </div>
       )
}

export default SpotIndexItem
