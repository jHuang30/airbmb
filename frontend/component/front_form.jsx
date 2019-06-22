import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import { SingleDatePicker, DayPickerInput } from 'react-dates';
import moment from 'moment';


class FrontForm extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {startDate: null,
                      endDate: null,
                      num_guests: 1,
                      location: null,
                      focused1: false,
                      focused2 : false};
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.history.push('/spots')
    }

    update(field){
        return(e) => {
            this.setState({[field] : event.target.value})
        }
    }

    render(){
        debugger
        return (
            <div className='front-page-form'>
                <div className='hearder-text'>
                    Book unique places to stay and things to do.
                </div>

                <div>
                    <label className='where-guests'>
                        WHERE
                        <input type="text" placeholder="Anywhere" onChange={this.update('location')}/>
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

                        <SingleDatePicker
                            date={this.state.startDate} // momentPropTypes.momentObj or null
                            onDateChange={startDate => this.setState({ startDate })} // PropTypes.func.isRequired
                            focused={this.state.focused1} // PropTypes.bool
                            onFocusChange={({ focused: focused1 }) => this.setState({ focused1 })} // PropTypes.func.isRequired
                            id="sDate" // PropTypes.string.isRequired,
                            numberOfMonths={1}
                            placeholder={'mm/dd/yyyy'}
                            readOnly={true}
                        />

                        <SingleDatePicker
                            date={this.state.endDate} // momentPropTypes.momentObj or null
                            onDateChange={endDate => this.setState({ endDate })} // PropTypes.func.isRequired
                            focused={this.state.focused2} // PropTypes.bool
                            onFocusChange={({ focused: focused2 }) => this.setState({ focused2 })} // PropTypes.func.isRequired
                            id="eDate" // PropTypes.string.isRequired,
                            numberOfMonths={1}
                            placeholder={'mm/dd/yyyy'}
                            readOnly={true}
                        />
                    </div>
                    

                    <label className='where-guests'>
                        GUESTS
                        <input type="text" placeholder='Guests' onChange={this.update('num_guests')}/>
                    </label>

                    <button className='front-submit' type='button' onClick={this.handleSubmit}>Search</button>
                </div>

            </div>
        )
    }
};

export default withRouter(connect(null, null)(FrontForm));


