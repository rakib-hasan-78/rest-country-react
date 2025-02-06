import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import Text from './../utilities/Text';
import Title from './../utilities/Title';


const CountryMod = ({country, onClick}) => {

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
        languages={},
        latlng=[],
        landlocked,
        borders=[],
        area,
        population,
        car:{side},
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
                    <Text tag={`p`} text={`${capital.length>1 ? 'capital cities':'capital city'} : ${capital.join(' , ') || 'not found'}`} />
                    <Text tag={`p`} text={`area : ${area} SqKm.`}/>
                    <Text tag={`p`} text={`${continents.length>1 ? 'continents':'continent'} : ${continents.join(', ')}`} />
                    <Text tag={`p`} text={`region : ${region}`}/>
                    <Text tag={`p`} text={`subregion: ${subregion ||'not mentioned.'}`}/>
                    <Text tag={`p`} text={`${borders.length<2 ? 'neighbor country ': 'neighbor Countries'} : ${borders.join(' , ') || 'lone island or islands.'} `}/>
                    <Text tag={`p`} text={`independent status : ${independent?'independent country':'not independent country'}`} />

                    <div className='card-row-sided-info'>

                    {/* to get currency name */}

                        <Text tag={`span`}
                        className={`text-white/70 font-bold`}
                         text={`${Object.keys(currencies).length >1 ? 'currencies : ':'currency : '} ${Object.values(currencies).map(currency=> `${currency.name}`).join(`, `)} ,`}/>

                    {/* to get currency symbols--> */}

                        <Text
                        className={`font-bold text-white/70`}
                        text={`${Object.keys(currencies).length > 1 ? 'currency symbols' : 'currency symbol'}: ${Object.values(currencies)
                            .map(value => value.symbol)
                            .join(', ')}`}
                        />


                    </div>

                    <Text tag={`p`} text={`${Object.keys(languages).length>1 ? 'languages':'language'} :  ${Object.values(languages).join(', ')}`} />

                    <Text tag={`p`} text={`population : ${population}`} />
                    <Text tag={`p`} text={`latitude & longitude : ${latlng.join(', ')}`}/>
                    <div className='card-row-sided-info'>
                    <Text tag={`p`} text={`landlocked status : ${landlocked? 'landlocked country':'not a landlocked country'} ,  `} />
                    <Text tag={`p`} text={`UN Status: ${unMember? 'UN member':'not UN Member'}`} />
                    </div>
                    <div className='card-row-sided-info'>
                    <Text tag={`p`} text={`country code name : ${ cca3}`} /> 
                    <Text tag={`p`}  text={`driving side : ${side || 'info not available on server'}`}/>
                    </div>
                    <Text tag={`p`} text={`${timezones.length>1 ?` timezones`:'timezone'} : ${timezones.join(', ')}`} />
                    <Text tag={`p`} text={`week starts from : ${startOfWeek}`} />
                </div>
            </div>
            {/* flag section */}
            <div className='w-3/12'>
                <img src={svg} alt={alt} className='rounded-md shadow-xl shadow-zinc-800 inset-0' />
            </div>
            </div>
        </div>
    );
};

export default CountryMod;

