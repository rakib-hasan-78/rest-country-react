import React from 'react';
import Header from './Header';
import Search from './Search';
import Sort from './Sort';

const Base = () => {
    return (
        <section>
        <Header />
        <Sort />
        <Search />
        </section>
    );
};

export default Base;