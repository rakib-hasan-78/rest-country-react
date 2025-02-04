import React from 'react';
import Title from './../utilities/Title';
import Text from './../utilities/Text';

const Header = () => {
    return (
        <div className='w-10/12 glass-section rounded-xl flex items-center justify-center flex-col flex-wrap'>
            <Title tag={1} text={`GlobeVista: Explore Countries & Their Details 🌍`} />
            <Text tag={`p`}
             className={`text-center my-4`}
             text={`GlobeVista is a web application that provides detailed information about countries worldwide. Built with React and Tailwind CSS, it offers an interactive and visually appealing interface. Users can browse countries, view key details such as population, capital, currency, languages, and flags, and explore additional insights like geographical data and neighboring countries.`} />
        </div>
    );
};

export default Header;