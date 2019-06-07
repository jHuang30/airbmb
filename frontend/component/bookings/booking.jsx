import React from 'react';

import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { DateRangePicker, isSameDay } from 'react-dates';
import moment from 'moment';

class BookingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.booking;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculateDays = this.calculateDays.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.blockedDates = this.blockedDates.bind(this);
        this.isBlocked = this.isBlocked.bind(this);
        this.blocked = [];
    }


    handleSubmit(e){
        const start = moment(this.state.startDate).format('L')
        const end = moment(this.state.endDate).format('L')
        const spotId = this.props.spot.id
        e.preventDefault();
        if (this.state.startDate && this.state.endDate){
            this.props.action({start_date: start, end_date: end, num_guests: this.state.numGuest}, spotId).then(
                (action) => {
                this.props.history.push(`${this.props.history.location.pathname}/${action.booking.id}`)}
            )
        }
    }


    blockedDates(){
        this.props.spot.bookings.forEach(booking => {
            const sDate = new Date(booking.start_date);
            const eDate = new Date(booking.end_date);
            while (sDate <= eDate){
                this.blocked.push(sDate)
                sDate = new Date(sDate.setTime(sDate.getTime() + 86400000))
            }
        });
    }

    
    
    isBlocked(day1){
        return this.blocked.some(day2 => {
            return isSameDay(day1, day2)
        })
    }
    
    
    update(field){
        return(e) => {
            this.setState({[field]: e.target.value})    
        }
    }
    
    calculateDays(start, end){
        if (start, end){
            return Math.floor(end.diff(start) / 86400000);
        }
    }
    
    handleClear() {
        this.setState({startDate: null, endDate: null, numGuest: null})
    }
    
    
    render(){
        
        const formClass = (this.state.startDate && this.state.endDate) ? 'longer-form' : 'shorter-form'
        
        
        const nights = this.state.startDate && this.state.endDate ? this.calculateDays(this.state.startDate, this.state.endDate) : null;
        const text_night = nights > 1 ? "nights" : "night"
        const price = this.props.spot.price;
        const roomFee = nights * price;
        const serviceFee = 16 * nights;
        const otherFee = 17*nights;
        const totalFee = roomFee + serviceFee + otherFee;
        
        // if (this.props.spots.bookings){
        //     console.log(this.blockedDates());
        // }
        
        const displayFees = (this.state.startDate && this.state.endDate) ? (
            <div className='fees'>
                <div className="fee">
                    <div>
                        ${price} x {nights} {text_night}
                    </div>
                    <div>
                        ${roomFee}
                    </div>
                </div>

                <div className='fee'>
                       <div>
                           Service fees 
                       </div> 
                       <div>
                           ${serviceFee}
                       </div>
                </div>

                <div className='fee'>
                    <div>
                        Occupancy taxes and fees
                    </div>
                    <div>
                        ${otherFee}
                    </div>
                </div>

                <div className='fee no-under-border'>
                    <div>
                        Total
                    </div>
                    <div>
                        ${totalFee}
                    </div>
                </div>
                <button className='clear-date' onClick={this.handleClear}>Clear Date</button>
            </div>
        ) : null;


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
        
        const options = [];
        if (this.props.spot.num_guests){
        const maxGuests = this.props.spot.num_guests;
        for (let i = 0; i < maxGuests; i++) {
            options.push(<option key={i} value={i+1}>{i+1}</option>)
        }};


        return (
            <div className={formClass}>
                <div className='order-form-price'>
                    <span className='form-price'>$ {this.props.spot.price} </span>
                    <span className='per-night'>per night</span>
                    <p className='rating-star'>{stars}</p>
                </div>

                <div className='form-date'>
                    Dates
                 </div>

                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    startDatePlaceholderText="Check In"
                    endDatePlaceholderText="Check Out" 
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isDayBlocked={this.isBlocked}
                />


                <div className='form-date'>
                    Guest
                </div>

                <form className='guest-num'>
                    <select onChange={this.update('numGuest')}>
                        {/* <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option> */}
                        {options}
                    </select>
                    
                </form>

                {displayFees}

                <button type='button' className='form-button' onClick={this.handleSubmit}>Book</button>
                <p className='per-night won-charge'>You won’t be charged yet</p>
{/* 

                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">
                        <div id="guest" class="input">1 Guest</div>
                        <svg class="slider" height="16px" width="20px">
                            <path id="sv" d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" />
                        </svg>
                    </button>
                    <div id="myDropdown" class="dropdown-content">
                        <div id="home1" class="home">
                            <div class="Children">
                                <span class="c1">Adults</span>
                                <br/>
                                    <span class="children2"></span>
                            </div>
                            <div class="buttonbox">
                                <button class="add" onclick='countdown("adultnum")' >-</button>
                                <div id="adultnum" class="num">1</div>
                                <button class="add" onclick='countup("adultnum")'>+</button>
                            </div>
                        </div>
                         <div class="home">
                            <div class="Children">
                                <span class="c1">Children     </span>
                                <br/>
                                    <span class="children2"> Ages 2-12</span>
                            </div>
                            <div class="buttonbox">
                                <button class="add" onclick="countdown('Childrennum')">-</button>
                                <div id="Childrennum" class="num">0</div>
                                <button class="add" onclick="countup('Childrennum')">+</button>
                            </div>
                        </div>
                            <div class="home">
                                <div class="Children">
                                    <span class="c1">Infants</span>
                                    <br/>
                                        <span class="children2">Under 2</span>
                                </div>
                                <div class="buttonbox">
                                    <button class="add" onclick="countdown('Infantnum')">-</button>
                                    <div id="Infantnum" class="num">0</div>
                                    <button class="add" onclick="countup('Infantnum')">+</button>
                                </div>
                            </div>
                        </div>
                    </div> */}


            </div>
        )
    }

}

export default withRouter(BookingForm)