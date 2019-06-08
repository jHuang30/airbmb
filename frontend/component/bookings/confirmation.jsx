import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBooking, deleteBooking, fetchBooking}  from '../../action/booking_action';
import { fetchSpot } from '../../action/spot_action'
import IndexNavbar from '../navbar/index_nav'
import moment from 'moment';
import 'react-dates/initialize';

const msp = (state, ownProps) => {
    debugger

    const bookingId = parseInt(ownProps.match.params.bookingId);
    const booking = state.entities.bookings[bookingId];
    const spot = state.entities.spots[parseInt(ownProps.match.params.spotId)];
    return {
        bookingId,
        booking,
        spot,
    }
};

const mdp = dispatch => {
    return {
        // updateBooking: booking => dispatch(updateBooking(booking)),
        // deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
        fetchBooking: id => dispatch(fetchBooking(id)),
        fetchSpot: (id) => dispatch(fetchSpot(id))
    }

}



class Confirmation extends React.Component{
    constructor(props){
        super(props);
        this.calculateDays = this.calculateDays.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    calculateDays(start, end) {
        if (start, end) {
            return Math.floor(end.diff(start) / 86400000);
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/spots')
    }

    componentDidMount(){
        const spotId = parseInt(this.props.match.params.spotId);
        const bookingId = parseInt(this.props.match.params.bookingId);
        this.props.fetchBooking(bookingId);
        this.props.fetchSpot(spotId);
        
    }

    render(){
        if(!(this.props.booking && this.props.spot)){
            return null;
        }

        const {booking} = this.props
        const {spot} = this.props
        const guestText = booking.num_guests > 1 ? 'guests' : 'guest'
        const startD = moment(booking.start_date);
        const endD = moment(booking.end_date);
        const nights = this.calculateDays(startD, endD);
        const text_night = nights > 1 ? "nights" : "night"
        const price = spot.price;
        const roomFee = nights * price;
        const serviceFee = 16 * nights;
        const otherFee = 17 * nights;
        const totalFee = roomFee + serviceFee + otherFee;


        const rating = 4;
        const stars = [];
        let i = 0
        while (i < rating) {
            stars.push(<i key={i} className="fas fa-star"></i>);
            i++;
        }

        while (stars.length < 5) {
            stars.push(<i key={stars.length} className="far fa-star"></i>);
        }

        return (
            <div>
     
                <IndexNavbar />

                <div className='whole-container'>

                    <div className='left-container'>
                        <div className='review-text'>
                            Booking Confirmed!
                        </div>
                        
                        <div className='rare-find'>
                            <span><img src="https://a0.muscache.com/airbnb/static/packages/icon-uc-diamond.296a9c25.gif" alt="" /></span>
                            <span>YAY!  This is a rare find.</span>
                        </div>

                        <div className='keep-in-mind'>
                            Things to keep in mind
                        </div>

                        <div className='some-rules'>
                            <div className='icon-text'>
                                <div className='rule-pic'>
                                    <i className="fas fa-child"></i>
                                </div>
                                <div className='rule-text'>
                                    Suitable for children (2-12 years)
                                </div>
                            </div>

                            <div className='icon-text'>
                                <div className='rule-pic'>
                                    <i className="fas fa-baby-carriage"></i>
                                </div>
                                <div className='rule-text'>
                                    Suitable for infants (under 2 years)
                                </div>
                            </div>

                            <div className='icon-text'>
                                <div className='rule-pic'>
                                    <i className="fas fa-paw"></i>
                                </div>
                                <div className='rule-text'>
                                    Pet friendly
                                </div>
                            </div>

                            <div className='icon-text'>
                                <div className='rule-pic'>
                                    <i className="fas fa-glass-cheers"></i>
                                </div>
                                <div className='rule-text'>
                                    No parties or events
                                </div>
                            </div>

                            <div className='icon-text'>
                                <div className='rule-pic'>
                                    <i className="fas fa-smoking-ban"></i>
                                </div>
                                <div className='rule-text'>
                                    No smoking
                                </div>
                            </div>

                        </div>

                        <button type='button' className='confirm-button' onClick={this.handleSubmit}>
                            Looking for more awesome places?</button>
                    </div>

                    <div className='right-container'>
                        <div className='item-inside'>
                            <div className='final item-inside-pic'>
                                <div className='final-desc'>
                                    {spot.title}
                                    <p className='rating-star'>{stars}</p>
                                </div>
                                <div className='pic-holder'>
                                    <img src={spot.photoUrls[0]}/> 
                                </div>
                            </div>

                            <div className='final final-date'>
                                <div className='holder date-holder'>
                                    <div>
                                        <i className="fas fa-user-friends"></i> {booking.num_guests}&nbsp;{guestText}
                                    </div>
                                    <div>
                                        <i  className="far fa-calendar-alt"></i>{booking.start_date}
                                        <i id="arrow" className="fas fa-arrow-right"></i>{booking.end_date}
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='final final-fee-detail'>
                                <div className='final-fee-con'>
                                    <div className="final-fee">
                                        <div>
                                            ${price} x {nights} {text_night}
                                        </div>
                                        <div>
                                            ${roomFee}
                                        </div>
                                    </div>

                                    <div className='final-fee'>
                                        <div>
                                            Service fees
                                        </div>
                                        <div>
                                            ${serviceFee}
                                        </div>
                                    </div>

                                    <div className='final-fee'>
                                        <div>
                                            Occupancy taxes and fees
                                        </div>
                                        <div>
                                            ${otherFee}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='final final-fee-total'>
                                <div className='final-fee '>
                                    <div>
                                        Total(USD)
                                        </div>
                                    <div>
                                        ${totalFee}
                                    </div>
                                </div>
                            </div>

                            <div className='final-info'>
                                <div>
                                    Free cancellation!
                                </div>
                                <div>
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default connect(msp, mdp)(Confirmation)