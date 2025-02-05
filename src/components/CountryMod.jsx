import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import Text from './../utilities/Text';

const CountryMod = ({country, onClick}) => {
    console.log(country);
    // api json info extract
    const {
        name:{common, official},
        cca3,
        independent,
        unMember,
        currencies={},
        capital=[],
        region,
        subregion,
        languages,
        latlng=[],
        landlocked,
        borders=[],
        area,
        population,
        side,
        timezones=[],
        continents=[],
        flags:{svg, alt},
        startOfWeek,

    } = country;

    return (
        <div className='modal-glass'>
            {/* closing modal---> */}
            <div className='w-full flex items-center justify-end'>

                <Text
                className={`cursor-pointer`} 
                tag={`span`}
                onClick={onClick}
                text={

                <FontAwesomeIcon icon={faX} />

                } />

            </div>
            <div className='basic-modal-body xxm:flex-col-reverse lg:flex-row xxm:space-y-10 lg:space-x-10 lg:space-y-0'>
            {/* info section */}
            <div className='w-8/12 border'></div>
            {/* flag section */}
            <div className='w-3/12 border'></div>
            </div>
        </div>
    );
};

export default CountryMod;

