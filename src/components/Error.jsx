import React from 'react';
import notFoundImage from '../assets/404.webp';
import Title from './../utilities/Title';
import Text from './../utilities/Text';

const Error = ({searchCountry, type, }) => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className={`w-11/12 h-96 shadow-2xl shadow-black/60 relative z-10  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/60 before:to-black/60 before:rounded-lg before:z-20`}>
                <img
                className='w-full h-full rounded-md absolute  left-0 top-0'
                src={notFoundImage} alt="bad-search-image"/>
                <div className='w-full flex flex-col items-center justify-center space-y-2  absolute top-[50%] z-50'>
                    <Title tag={2} text={`bad search request - 404 !`} className={`font-black text-rose-600  uppercase`} />
                    <Text tag={`p`} text={`sorry  !! your searched ${type}  ${searchCountry}  isn't found. `}/>
                    <Text tag={`span`} text={`please search again`} className={`text-white font-extrabold`} />
                </div>
            </div>
        </div>
    );
};

export default Error;