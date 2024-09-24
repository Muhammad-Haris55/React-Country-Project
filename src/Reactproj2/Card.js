import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";

function Card2({ element, index }) {

    const name = useRef('')
    const nav = useNavigate()
    const navhadle = (element) => {
        // console.log(element)
        // const card = event.currentTarget; // Reference to the clicked card
        const countryName = element.name.common; // Get the text content of the h4 element
        // console.log(countryName)
        nav(`${countryName}`)

    }
    return (
        <div className="card" key={index} onClick={() => navhadle(element)} >
            <img src={element.flags.svg} alt="" />
            <div className="bottom">
                <h4 ref={name}>{element.name.common}</h4>
                <h6>Population {element.population}</h6>
                <h6>Region {element.continents}</h6>
                <h6>Capital {element.capital}</h6>
            </div>
        </div>

    )
}

export function Card(props) {
    return (
        <>
            <div className="cardholder2" key={props?.index} >
                <div className="col-md-6 flagimg">
                    <img src={props?.items.flags.svg} alt="" />
                </div>
                <div className="col-md-6 cdetails" >
                    <h2>{props?.items?.name.common}</h2>
                    <h4>Continent: {props?.items?.continents}</h4>
                    <h4>Capital: {props?.items?.capital}</h4>
                    <h4>Population: {props?.items?.population}</h4>
                    <h4>Timezone: {props?.items?.timezones}</h4>
                </div>
            </div>
        </>
    )
}

export default Card2


