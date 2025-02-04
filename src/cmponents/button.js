 import React from 'react';
 import './button.css';
 import {Link} from 'react-router-dom';

 const STYLES = ['btn--primary','btn--outline'];

 const SIZES = ['btn--medium','btn--large'];

 export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <link to='/sighn-up' className='btn-mobile'>
            <button
            className={'btn ${checkButtonStyle} ${checkButtonSize}'}
            onclick={onclick}
            type={type}
            >
                {children}
            </button>
        </link>
    )
};