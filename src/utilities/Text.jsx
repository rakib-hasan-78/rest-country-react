import React from 'react';

const Text = ({tag, text, className, onClick}) => {
    const Tag = `${tag}`
    return (
        <Tag className={`${className}`} onClick={onClick}>
            {text}
        </Tag>
    );
};

export default Text;