import React from 'react';

const Title = ({tag, text, className}) => {
    const TAG = `h${tag}`
    return (
        <TAG className={`${className}`}>
            {text}
        </TAG >
    );
};

export default Title;