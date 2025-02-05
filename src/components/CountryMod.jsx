import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import Text from './../utilities/Text';
import Title from './../utilities/Title';
import Countries from './Countries';

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
        <div className='modal-glass z-40'>
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
            <div className='w-8/12'>
                <div className='w-full flex items-center justify-start'>
                    <Title tag={3} text={`country : ${common}`} className={`text-white/70`} />
                </div>
                <div className='w-full flex flex-col items-start justify-start'>
                    <Title tag={3} text={`official name: ${official}`} className={`text-white/70`} />
                    <Text tag={`p`} text={`area : ${area} SqKm.`}/>
                    <Text tag={`p`} text={`${continents.length>1 ? 'continents':'continent'} : ${continents.join(', ')}`} />
                    <Text tag={`p`} text={`region : ${region}`}/>
                    <Text tag={`p`} text={`subregion: ${subregion ||'not mentioned.'}`}/>
                    <Text tag={`p`} text={`${borders.length<2 ? 'neighbor country ': 'neighbor Countries'} : ${borders.join(' , ') || 'lone island or islands.'} `}/>
                    <Text tag={`p`} text={`independent status : ${independent?'independent country':'not independent country'}`} />
                    <Text tag={`p`} />
                    <Text tag={`p`} />
                    <Text tag={`p`} />
                    <Text tag={`p`} />
                </div>
            </div>
            {/* flag section */}
            <div className='w-3/12 border'></div>
            </div>
        </div>
    );
};

export default CountryMod;

