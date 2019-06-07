import React from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';


class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null
        };
    }

    render() {
        return (
            <div>

                <DayPickerRangeController
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    noBorder
                    onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    numberOfMonths={2}
                    />
            </div>

        );
    }
}

export default DatePicker;