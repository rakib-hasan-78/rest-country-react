import React from 'react';

const Text = ({tag, text, className}) => {
    const TAG = `${tag}`
    return (
        <TAG className={`${className}`}>
            {text}
        </TAG>
    );
};

export default Text;