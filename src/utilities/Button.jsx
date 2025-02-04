import React from 'react';

const Button = ({className, text, onAction}) => {
    return (
        <button
            className={`${className}`}
            onClick={onAction}
            >
            {text}
        </button>
    );
};

export default Button;