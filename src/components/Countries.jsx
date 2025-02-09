import React, { useEffect, useState } from 'react';
import Country from './Country';
import CountryMod from './CountryMod';
import Search from './Search';
import Error from './Error';
import Sort from './Sort';
import VisitedCountry from './VisitedCountry';


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [singleCountry , setSingleCountry] = useState(null);
    const [searchData, setSearchData] = useState('');
    const [filterData , setFilterData] =  useState([]);
    const [searchCity, setSearchCity] = useState('');
    const [independentCountry, setIndependentCountry] = useState('');
    const [visitedFlag, setVisitedFlag] = useState([]);


    console.log(countries);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response=> response.json())
            .then(data=>{
                setCountries(data);
                setFilterData(data);
            })
    },[]);
    // country card data sender===>
    const singleCountryHandler = (country) => {
        setSingleCountry(country);
    }
    // modal data clean & close ====>
    const modalHandler = () => {
        setSingleCountry(null);
    };

    // cancel search handler ===>

    const cancelHandler = () => {
        setSearchData('')
        setFilterData(countries)
    }

    // filtering country ====>
    
    const filterCountryHandler = () => {
        const filterCountry = filterData.filter(country=>country.name.common.toLowerCase().includes(searchData.toLowerCase()));
        if (filterCountry) {
            setFilterData(filterCountry);
            setSearchCity('');
        } else {
            setFilterData([]);
        }
    }

    // 

    const capitalCityHandler = (e) => {
        e.preventDefault();
        if (!searchCity) {
            setFilterData(countries); // Reset to all countries if input is 
            return;
        }
        const filtered = countries.filter(country => 
            country.capital && country.capital.some(cap => cap.toLowerCase().includes(searchCity.toLowerCase()))
        );
        setFilterData(filtered);
    }

    return (
        <>
        <Sort country={filterData} setCountry={setFilterData} countries={countries}  searchCity={searchCity} setSearchCity={setSearchCity} capitalCityHandler={capitalCityHandler} independentCountry={independentCountry} setIndependentCountry={setIndependentCountry}   />

        <Search searchData={searchData} setSearchData={setSearchData} cancelHandler={cancelHandler}  searchHandler={filterCountryHandler} />
        <VisitedCountry visitedFlag={visitedFlag} />
        <section>
            <div className='bg-blue-800/30 rounded-md bg-opacity-40 inset-0 shadow-lg border border-white/30 w-10/12 flex items-center justify-center flex-wrap flex-col md:flex-row gap-8 py-10'>

            {filterData.length > 0 ? (
                        filterData.map((country, index) => (
                            <Country key={country.cca3} country={country} index={index} onTarget={() => singleCountryHandler(country)}  visitedFlag={visitedFlag} setVisitedFlag={setVisitedFlag}/>
                        ))
                    ) : (
                        <Error searchCountry={searchData || searchCity} type={searchCity ? 'city' : 'country'} />
                    )}

                {singleCountry&&( <CountryMod country={singleCountry}
                onClick={modalHandler}
                 /> )}
                 
            </div>
        </section>

        </>
    );
};

export default Countries;