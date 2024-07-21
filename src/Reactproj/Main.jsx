import axios from 'axios'
import React, { createContext, useEffect, useRef, useState } from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'
import Carddetails from './Carddetails'


function Main() {
    const data=createContext()
    const [apidata, setapidata] = useState([])
    const [filters, setfilters] = useState('')
    const [select, setselect] = useState('Asia')
    const [names,setnames]=useState('')
    const nav = useNavigate()
    const search = useRef('')
    const name = useRef('')
    // const search = useRef('')

    useEffect(() => {
        async function getapidata() {
            try {
                const { data } = await axios.get('https://restcountries.com/v3.1/all')
                setapidata(data)


            } catch (e) {
                console.log(e.message)
            }

        }
        getapidata()
    }, [])

    const searchcountry = (event) => {
        let value = search.current.value.split(',')
        let capitalise = value[0][0]
        if (value.length > 0) {
            let capitalise2 = capitalise?.toUpperCase() + value[0].slice(1); // Capitalize the first word
            setfilters(capitalise2)
        }
        if (!search.current.value) {
            setfilters('')
        }
    }
    const handleselect = (event) => {
        setselect(event.target.value)

    }
    const updatestate = () => {
        setselect(' ')
    }

    const navhadle = (event) => {
        const card = event.currentTarget; // Reference to the clicked card
        const countryName = card.querySelector('h4').textContent; // Get the text content of the h4 element
        setnames(countryName)// Setting the name of a country in state & passing in the url
        nav(`/${names}`,{state:{fapidata:apidata}})
     }

    // Search Filter
    const filteredcountries = apidata.filter((country) => country.name.common.startsWith(`${filters}`))

    // Region Filter
    const filterregion = apidata.filter((region) => region.continents.includes(`${select}`))

    return (
        <>
            <div className='main'>

                <header class="header-container">
                    <div class="header-content">
                        <h2 class="title">Where in the world?</h2>
                        <p><i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode</p>
                    </div>
                </header>
                <main>
                    <div className='flex mb-2'>
                        <div class="group">
                            <input placeholder="Search" type="search" class="input" onChange={searchcountry} ref={search} />
                            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        </div>
                        <div class="select">
                            <div
                                class="selected"
                                data-default="Filter by region"
                                data-one="Europe"
                                data-two="Afirca"
                                data-three="Asia"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                    class="arrow"
                                >
                                    <path
                                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                    ></path>
                                </svg>
                            </div>
                            <div class="options">
                                <div title="all" >
                                    <input id="all" name="option" type="radio" checked />
                                    <label class="option" value="filter" id="check" for="all" data-txt="Filter by region" ></label>
                                </div>
                                <div title="option-1">
                                    <input id="option-1" name="option"  data="1" value="Europe" type="radio" onClick={handleselect} />
                                    <label class="option" for="option-1" data-txt="Europe"></label>
                                </div>
                                <div title="option-2">
                                    <input id="option-2" name="option" type="radio" data="2" value="Africa" onClick={handleselect} />
                                    <label class="option" for="option-2" data-txt="Africa"></label>
                                </div>
                                <div title="option-3">
                                    <input id="option-3" name="option" type="radio" data="2" value="Asia" onClick={handleselect} />
                                    <label class="option" for="option-3" data-txt="Asia"></label>
                                </div>
                            </div>
                        </div>

                    </div>
                    {
                        filters ?
                            <div class="cardholder mt-3">
                                {
                                    filters ?
                                        filteredcountries.map((items, index) => {
                                            return (
                                                <div className="card" key={index} onClick={navhadle}>
                                                    <img src={items.flags.svg} />
                                                    <div className="bottom">
                                                        <h4>{items.name.common}</h4>
                                                        <h6>Population {items.population}</h6>
                                                        <h6>Region {items.continents}</h6>
                                                        <h6>Capital {items.capital}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        apidata.map((items, index) => {
                                            return (
                                                <div className="card" key={index} onClick={navhadle}  >
                                                    <img src={items.flags.svg}/>
                                                    <div className="bottom">
                                                        <h4>{items.name.common}</h4>
                                                        <h6>Population {items.population}</h6>
                                                        <h6>Region {items.continents}</h6>
                                                        <h6>Capital {items.capital}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div> :
                            <div className="cardholder">
                                {
                                    select ? filterregion.map((element, index) => {
                                        return (
                                            <div className="card" key={index} onClick={navhadle} >
                                                <img src={element.flags.svg} alt="" />
                                                <div className="bottom">
                                                    <h4 ref={name}>{element.name.common}</h4>
                                                    <h6>Population {element.population}</h6>
                                                    <h6>Region {element.continents}</h6>
                                                    <h6>Capital {element.capital}</h6>
                                                </div>
                                            </div>

                                        )
                                    })
                                        :
                                        filteredcountries.map((items, index) => {

                                            return (
                                                <div className="card" key={index} onClick={navhadle}   >
                                                    <img src={items.flags.svg} alt="" />
                                                    <div className="bottom">
                                                        <h4 ref={name}>{items.name.common}</h4>
                                                        <h6>Population {items.population}</h6>
                                                        <h6>Region {items.continents}</h6>
                                                        <h6>Capital {items.capital}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                    }
                </main>
            </div>
        </>

    )
}

export default Main;
// export {data};
