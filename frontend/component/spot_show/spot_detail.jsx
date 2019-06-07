import React from 'react';
import SpotShow from './spot_show';
import IndexNavbar from '../navbar/index_nav';
import { openModal } from'../../action/modal_actions';

import DatePicker from '../calendar/show_calendar';
import BookingContainer from '../bookings/create_booking_container'

const SpotDetail = (props) => {
    const {spot} = props

    const amenitiesNums = [];
    
    if(spot.amenities){
        Object.keys(spot.amenities).map(num => {
            amenitiesNums.push(parseInt(num))
        });


    }


    const symbol = sym => {
        switch(sym){
            case 'kitchen':
                return <i className="fas fa-utensils"></i>
            case 'wifi':
                return <i className="fas fa-wifi"></i>
            case 'elevator':
                return <i className="fas fa-dungeon"></i>
            case 'cable_tv':
                return <i className="fas fa-tv"></i>
            case 'iron':
                return <i className="fas fa-location-arrow"></i>
            case 'washer':
                return <i className="fas fa-dumpster"></i>
            case 'shampoo':
                return <i className="fas fa-wine-bottle"></i>
            default:
                return null
        }
    }

    const allAmenities = [];
    amenitiesNums.map((num,idx) => {
        allAmenities.push(<span className='each-ame' key={idx}>{symbol(spot.amenities[num].sym)} &nbsp; &nbsp; {spot.amenities[num].name}</span>)
    })


    const bedrooms = spot.num_bedrooms + ((spot.num_bedrooms) > 1 ? ' bedrooms' : ' bedroom');
    const guests = spot.num_guests + ((spot.num_guests) > 1 ? ' guests' : ' guest');
    const beds = spot.num_beds + ((spot.num_beds) > 1 ? ' beds' : ' bed');
    const bathrooms = spot.num_bathrooms + ((spot.num_bathrooms) > 1 ? ' bathrooms' : ' bathroom');
    


    return (
        <div>
            <IndexNavbar />
            <div className='spot-detail'>
                <div className="row">
                    <div className="columna">
                        <img src={spot.photoUrls[0]}  />
                    </div>

                    <div className="columnb">
                        <div className="column1">
                            <img src={spot.photoUrls[1]}  />
                        </div>

                        <div className="column1">
                            <img src={spot.photoUrls[2]}  />
                        </div>
                    </div>

                    <div className="columnb">
                        <div className="column1">
                            <img src={spot.photoUrls[3]}  />
                        </div>

                        <div className="column1">
                            <img src={spot.photoUrls[4]}  />
                        </div>
                    </div>

                </div>
            </div>



            <div className='des-form-container'>

                <div className='des-container'>
                    <div className='spot-title'>
                        {spot.title}
                    </div>

                    <div className='spot-location'>
                        {spot.location}
                    </div>

                    <div className='spot-type'>
                        {/* <div> */}
                        <i className="fas fa-house-damage"></i>
                        {spot.spotType}
                        {/* </div> */}
                    </div>

                    <div className='spot-info'>
                        <span>{guests}</span>
                        <span>{bedrooms}</span>
                        <span>{beds}</span>
                        <span>{bathrooms}</span>
                    </div>

                    <div className='spot-des'>
                        <p>{spot.description}</p>
                    </div>

                    <div className='spot-ame'>
                        Amenities:
                        <div className='ame-container'>
                            <div className='ame2'>
                                {allAmenities[0]}
                                {allAmenities[1]}
                            </div>

                            <div className='ame2'>
                                {allAmenities[2]}
                                {allAmenities[3]}
                            </div>
                        </div>

                        <button className='showall' onClick={() => dispatch(openModal('amenities', spot))}>
                            Show all {allAmenities.length} amenities
                        </button>

                    </div>

                    <div className='avail'> 
                        Availability:
                    </div> 

                        <DatePicker />
                </div>

                    <BookingContainer spot={spot}/>
            </div>

        </div>
        )
    }
    
export default SpotDetail