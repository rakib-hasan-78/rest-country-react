import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Title from './../utilities/Title';
import Button from './../utilities/Button';

const Sort = () => {
    return (
        <section>
            <div className='w-10/12 glass-section'>
                <div className='w-full flex items-center justify-center py-5'>
                    <Title tag={`2`} text={`sort the countries`} />
                </div>
                <div className='w-full flex items-center justify-center flex-wrap xxm:flex-col lg:flex-row xxm:gap-y-5 lg:gap-y-0 lg:gap-x-8'>
                    <div className='sub-section bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl'>
                        <Title tag={`3`} text={`search by continents`} />
                        <select className='capitalize w-10/12 rounded-md py-3 outline-none xxm:text-xs sm:text-sm md:text-base lg:text-lg' name="select" id="select">
                            <option value="#">select continents</option>
                            <option value="asia">asia</option>
                            <option value="africa">africa</option>
                            <option value="europe">europe</option>
                            <option value="	north america">	North America</option>
                            <option value="south america">south America</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                        <Button text={`search`} className={`w-10/12 btn btn-secondary `} />
                    </div>
                    <div className='sub-section bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl'>
                        <Title tag={`3`} text={`search by capital`} />
                        <div className='w-full flex items-center justify-center relative'>
                        <input type="text" className='w-10/12 rounded-md outline-none border-none px-2 py-2 xxm:text-xs sm:text-sm md:text-base lg:text-lg' placeholder='search by capital' />
                        <span className='absolute top-1/2 right-5 translate-y-[-50%] cursor-pointer text-black text-xs px-2'> <FontAwesomeIcon icon={faX}/> </span>
                        </div>
                        <Button text={`search`} className={`w-10/12 btn btn-secondary `} />
                    </div>
                    <div className='sub-section bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl'>
                    <Title tag={`3`} text={`search by continents`} />
                        <select className='capitalize w-10/12 rounded-md py-3 outline-none xxm:text-xs sm:text-sm md:text-base lg:text-lg' name="select" id="select">
                            <option value="#">country status</option>
                            <option value="true">independent</option>
                            <option value="false">not independent</option>
                        </select>
                        <Button text={`search`} className={`w-10/12 btn btn-secondary `} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sort;