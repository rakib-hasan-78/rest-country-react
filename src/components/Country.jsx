import React, { useState } from 'react';
import Text from './../utilities/Text';
import Title from './../utilities/Title';
import Button from './../utilities/Button';

const Country = ({country, index, onTarget, visitedFlag, setVisitedFlag}) => {

    const [isVisited, setIsVisited] = useState(false);

    const {
        name: {common},
        cca3,

        flags:{svg}

    } = country;

    const visitHandler = () => {
        setIsVisited(!isVisited);
        if (!isVisited) {
            setVisitedFlag(prev=>[...prev, country])
        } else {
            setVisitedFlag(prev=> prev.filter(pre=> pre.cca3 !== cca3))
        }
    }

    return (
        <div className='glass-card'>
            <div className={`w-full h-auto flex items-center justify-start p-2 pb-0.5 font-bold`}>
                <Text tag={`span`} text={index+1<10?`# 0${index+1}.`:`# ${index+1}.`} />
            </div>
            <div className='w-full h-48 flex items-center justify-center rounded-md overflow-hidden p-1.5 '>
                <img
                className='max-h-52 w-full object-contain m-0 rounded-md'
                 src={svg} alt="" />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <Title tag={3} text={`${common}`} className={`p-1`} />
                <Text tag={`span`} text={`code name : ${cca3} `} />
            </div>
            <div className='w-full flex flex-col justify-center items-center mb-3 space-y-3'>
                <Button className={`btn-card btn-primary text-base px-6 py-2 w-10/12`}
                onAction={onTarget}
                    text={`search`}
                />
                <Button
                    onAction={visitHandler} 
                    className={`btn-card btn-mark text-base px-6 py-2 w-10/12`} 
                    text={isVisited?'visited':'visit'}
                    />
            </div>
        </div>
    );
};

export default Country;