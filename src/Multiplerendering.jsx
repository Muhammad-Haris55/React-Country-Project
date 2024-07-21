import React from 'react'

function Multiplerendering() {
    function Rendercard(keyno, title, price) {
        // console.log((keyno))
        return (
            <div className="cardholder">
                <div className="card" key={keyno}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRZeHo20Kf0bISfM_Nk1oxR24YByMJMtkuA&s" alt="" />
                    <h5>{title}</h5>
                    <h6>{price}</h6>
                </div>
            </div>
        )

    }
    // Iterating thorugh loop for multiple rendering 
    // let num =5
    // let key=0
    // const container=[]
    // for (let i=0 ;i<=num;i++){
    //     key+=1
    //     container.push(Rendercard())

    // }
    // const container =[  Rendercard(1,"Iphone 11","1000$"), Rendercard(21,"Iphone 12","2000$")  ]

    // fetch('//dummyjson.com/test').then(res=>res.json()).then(console.log)

    return (
        <>
            <div className='cardholder'>
                {/* {Rendercard(1)}
                {Rendercard(2)}
                {Rendercard(3)} */}
                {/* {Rendercard(product.id)}
                {Rendercard()}
                {Rendercard()}
                {Rendercard()} */}
                {/* {container} */}
                {/* {container2} */}
                {/* {Rendercard()} */}
            </div>

        </>

    )

}


export default Multiplerendering
