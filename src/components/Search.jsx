import React from 'react';
import Title from './../utilities/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from './../utilities/Button';



const Search = ({searchData, setSearchData, cancelHandler, searchHandler}) => {

    return (
        <section>
            <div className='glass-section w-10/12 pb-10'>
                <div className='w-full h-auto py-3 flex items-center justify-center'>
                    <Title tag={`2`} text={`search country by name`} />
                </div>
                <div className='w-full flex xl:flex-row lg:flex-row flex-wrap md:flex-col sm:flex-col xm:flex-col xxm:flex-col items-center justify-center gap-3'>
                    <div className='xl:w-5/12 lg:w-5/12 sm:w-full  xm:w-full xxm:w-full relative'>
                        <input
                        value={searchData} onChange={(e)=> setSearchData(e.target.value)}
                        className=' caret-blue-50 text-blue-50 input-gradient input-primary'
                        type="text" name="search" id="search"
                        placeholder='search country'
                        />
                        {searchData && ( <span
                                            onClick={cancelHandler}
                                            className='absolute top-1/2 right-0 translate-y-[-50%] px-1 cursor-pointer'> <FontAwesomeIcon icon={faX}  /> 
                                         </span> )}
                        
                    </div>
                    {searchData && (

                        <Button
                         onAction={searchHandler}
                         className={`btn btn-primary xl:w-2/12 lg:w-2/12 w-full shadow-xl`} text={`search`} />

                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default Search;