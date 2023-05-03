import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Button = ({ backgroundColor, textColor, dispatch }) => {
    const [buttonColor, setButtonColor] = useState(backgroundColor);
    const [buttonTextColor, setButtonTextColor] = useState(textColor);

    const handleClick = () =>  dispatch({ type:'TOGGLE_CONVERTER_VISIBILITY' })
    useEffect(() => setButtonColor(backgroundColor), [backgroundColor]);
    useEffect(() => setButtonTextColor(textColor), [textColor]);

    return (
        <button
            className="button-cnv" style={{ backgroundColor:buttonColor, color:buttonTextColor }}
            onClick={handleClick}
        >
            Конвертер валют
        </button>
    );
};

Button.propTypes = {
    backgroundColor:PropTypes.string.isRequired,
    textColor:PropTypes.string.isRequired,
};

export default connect()(Button);
