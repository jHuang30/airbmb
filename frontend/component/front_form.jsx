import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { SingleDatePicker, isSameDay } from 'react-dates';
import moment from 'moment';


class FrontForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {startDate: null,
                      endDate: null};
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/spots')
    }

    render(){
        return (
            <div className='front-page-form'>
                <div className='hearder-text'>
                    Book unique places to stay and things to do.
                </div>

                <div>
                    <label className='where-guests'>
                        WHERE
                        <input type="text" placeholder="Anywhere"/>
                    </label>

                    <div className='checkin-out'>
                        <label>
                            CHECK-IN
                        </label>

                        <label>
                            CHECK-OUT
                        </label>
                    </div>
                    
                    <div className="checkin-out"> 
                        <input type="text" placeholder="mm/dd/yyyy" />
                        <input type="text" placeholder="mm/dd/yyyy" />  
                    </div>
                    

                    <label className='where-guests'>
                        GUESTS
                        <input type="text" placeholder='Guests'/>
                    </label>

                    <button className='front-submit' type='button' onClick={this.handleSubmit}>Search</button>
                </div>

                {/* <SingleDatePicker
                    date={this.state.endDate} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ endDate })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired,
                /> */}
            </div>
        )
    }
};

export default withRouter(connect(null, null)(FrontForm));


