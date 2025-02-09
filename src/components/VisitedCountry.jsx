import React from 'react';
import Title from './../utilities/Title';

const VisitedCountry = ({visitedFlag}) => {
    return (
        <div className='w-10/12 glass-section'>
            {/* title for visited countries====>  */}
            <div className='w-full flex flex-col items-center justify-center py-5'>
                    <Title tag={`2`} text={`visited countries`} />
            </div>
            <div className='w-full flex flex-row flex-wrap items-center justify-center overflow-hidden'>
                {
                    visitedFlag.map(flag=>(
                        <div className='w-16 h-14  flex items-center justify-center p-1.5 object-contain' key={flag.cca3}>
                            <img title={flag.name.common} className='w-full h-auto rounded-sm shadow-lg' src={flag.flags.svg} alt="flag.name.common" />
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default VisitedCountry;