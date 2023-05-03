import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { selectDate } from '../redux/typies';

const CustomDatePicker = React.forwardRef((props, ref) => {
    const selectedDate = useSelector((state) => state.date.selectedDate);
    const dispatch = useDispatch();
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <div className="datepicker-input" onClick={onClick}>
            <span className="datepicker-value">{value}</span>
            <span className="datepicker-icon"></span>
        </div>
    ));

    const handleChangeDate = (date) => dispatch(selectDate(date));

    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 7);

    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            customInput={<CustomInput ref={ref}/>}
            dateFormat="dd.MM.yyyy"
            calendarClassName="custom-datepicker-calendar"
            minDate={minDate}
            maxDate={new Date()}
        />
    );
});

export default CustomDatePicker;