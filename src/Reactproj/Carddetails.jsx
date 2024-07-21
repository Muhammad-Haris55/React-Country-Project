import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "./Carddetails.css"
function Carddetails() {

    // To fetch from url
    const param = useParams()

    // To get state from Nav hook
    const location = useLocation()
    const datas = location.state.fapidata


    // Filter Country
    const filtercountry = datas.filter((check) => check.name.common.includes(`${param.id}`))

    return (
        <>
            {
                filtercountry.map((items ,index) => {
                    return (
                        <div className="cardholder2" key={index} >
                            <div className="col-md-6 flagimg">
                                <img src={items.flags.svg} alt="" />
                            </div>
                            <div className="col-md-6 cdetails" >
                                <h2>{items?.name.common}</h2>
                                <h4>Continent: {items?.continents}</h4>
                                <h4>Capital: {items?.capital}</h4>
                                <h4>Population: {items?.population}</h4>
                                {/* <h4>Borders: {items?.borders}</h4> */}

                                {/* <h4>Language: {items.languages.zho}</h4> */}
                                <h4>Timezone: {items?.timezones}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default Carddetails
