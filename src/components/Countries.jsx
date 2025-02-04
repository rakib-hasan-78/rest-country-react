import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    console.log(countries);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response=> response.json())
            .then(data=>{
                setCountries(data);
            })
    },[])

    return (
        <section>
            <div className='bg-blue-800/30 rounded-md bg-opacity-40 inset-0 shadow-lg border border-white/30 w-10/12 flex items-center justify-center flex-wrap flex-col md:flex-row gap-8 py-10'>
                {countries && countries.map((country, index)=>(
                    <Country key={country.cca3} country={country} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Countries;