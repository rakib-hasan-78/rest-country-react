import React from 'react';

const Text = ({tag, text, className, onClick}) => {
    const TAG = `${tag}`
    return (
        <TAG className={`${className}`} onClick={onClick}>
            {text}
        </TAG>
    );
};

export default Text;