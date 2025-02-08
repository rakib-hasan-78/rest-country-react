import React from 'react';
import Header from './Header';
import Countries from './Countries';
import Error from './Error';
const Base = () => {
    return (
        <section>
        <Header />
        <Error />
        <Countries />
        </section>

    );
};

export default Base;