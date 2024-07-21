import React, { useEffect, useState } from 'react'
import Child from './Child'



function Parent() {
    const [n, sn] = useState('')
    const [a, sa] = useState('')
    const [s, ss] = useState('')
    const [cu, setcu] = useState('')
    const imgurl = ['data:image/jpeg;base64,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', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEhASEhIVEhAPEhAVFRAVFg8QEhAWFhIYFxUVFRUYHSggGBslHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi4lHSItLy0tLS0tMC0tLSstKy0tLSstLS0tLystLS0tLS0tLS0tLS0rLS0tLS0tLS03LTcuLf/AABEIALgBEQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABGEAACAQICBQYLBgQDCQAAAAAAAQIDBAURBhIhMXEHIjJBUbETM2FydYGRobLB0RRCQ1Kj0hVTkvAjYoIkNWNlk6Kz4vH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAIDAAEFAQAAAAAAAAAAAQIRAyExQQQSIjJRQv/aAAwDAQACEQMRAD8A7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxVauTyW1+5cTWdxt8Z6kll3PvITSzGXbWVe4S1pRp1Kmr1SaXNi/Jm4+pH5vuMdva1R1ZXNVz1ltjUqQ1c/yQi+bFZdSJVfqr7R/xH/Sv2n2NbP8AEfsiu9FB5L9Jql3a/wCO9atRnKm57tfVjGSb8uU45+VMt7qve92eWXryWRKO0plL879kPoVTTPTSFjqU06la5qvKnb04wlOb4Zf37nY6VXmvyHNNDqP2jEcUvKnOnSqRtqWf4ajHOrlxbXtfaJN3Ra3KWPaRzWtG2taKf3K1RTmuPg0ka9PSjSKTajTsHk8s06+XtzLDjt1qRUF0qry4Lr70j1hlulFG04pWOXLZ1FcudJ8fpteEeF0m9qVSpOGa7UnJGB6YY5/Owj1Vv/cg9POTK9u7yrcUalKVOsoZRqSnCVPVgouPRaa2Zrj7a8+RrE+23/6k/wBhnce/Gky3PXQKOluPzzUP4ZUa2tU6k5tLtaUmbVvj+kc1nGnh+zes66a95VNBuTG9tLulcVqlKNOkptqnKc51NaDiovmpJbc3wOg1s6U1JbutdqL48csVvJZdI6WkOkVPnStLSulvp0qrpyfBzLJoXptRxDwkNSVC6o7KtrUWrUg+HWjJBppNbntKXpXD7NiWE3sObOrVla1cvxYzWdNPtyefu7CmWGpuL45OsgAzaAAAAAAAAAAAAAAAAAAAAAAAAAAArOJ2MK9BUaizp1qM4SW7ZKMU8n1HFrnk2uadVxp16Xg88teaqRqpeWMYtN8JLPyHcpPmUvMy9sY/RmhUnrVHGVPYopqpsabzeay6stntLs96VPBKdthdsnUqalKm25VJLnVakt+rFZtt5ZKKzyUVvyzJDA9PMPuqqpwm41n0VUhKnr+a3sb8m8o3LbCopWeWao6lZLLoqpnHPPy6u7gzntvQk5U/A7K05x8HTi3JwnrczJve88mQmR+qqb5s/wC+ooPJv08X9J1+6JdcKm3Rm35dpTOTVc7F/SVfuiWx/ZF8b+Ly1rmMfyQj79pPWcdiK5fS/wBtnwh8KLJaPcdP+XJl+zegj1kfIHszaMM0RWJUc0yZkjSvIbGWxquUaGDVc4OL3wfuf9srfKR08H9J2/zJrDp6lbJ7ppr6ENylLn4P6Tt/mU5OpWvHdurAA53QAAAAAAAAAAAAAAAAAAAAAAAAABsCIjQ1qdPzIfCak6E+wlLTxdPzIfCjJkTtTSrYtg6r03Tq0lUg8s4yWa2bn5H5VtIXBNAqNCetSoRpy2rwjlUqSSe9Rc5Nx9WR0PVCROzTS+zKnRcV1RfreRQuTPpYv6Tr90Tot4+ZLgznfJn0sX9J1/hiTj6XxmxzmXmb2KUIvN7tiy+RrXOm0IcyjB1ZL726Hq62RPKNiHhLmNCn+FFRqS7W3ravqz9r8hiwXDUkth38eG8e3m83JrLUTFLSa+nu1YLsUV8zfoYxfdbi/wDSjJZ2qXUSVOghZj/FJlnfljt9IKq8ZSTXbHYSULuFVZxfGL2SXqNdWy7DXrWWXOjsa60ZWT4bTLL5amIrVnGS3ppkVykyzlgzW54nbP2pktey14PPZKO9fMrumdXWhgj/AC4nQT9WZny+OjhvbsQGYOZ1AAAAAAAAAAAAAAAAAAAAAAAAB5q9GXB9x6PFboy4PuA07HxdPzIfCjOYLHxdLzIfCjOFTIAAa990JcH3HPOTSWTxhvdHErh+yMTod8+ZLg+45vyfLmY52/b7v/xovj6jLxUKDdStUqS2uc5SfFvMuOG08kip4fHKT4lpsKp6W+njX1YLc3aZG29Q3YTKWNMa2os9SMCmJVTPTWZI3EObJPqlsfrKhpZL/dsfy4rb++MvoWXHa3NKnpXUzqYd6StX7pFOSfi14b+TuNHox4LuPZ4o9GPmruPZyO4AAAAAAAAAAAAAAAAAAAAAAAAAAGlZ+Lp+ZD4UZsjDZeLp+ZD4UZwq8nyTyPTMFxuQGviNROEsnlsfbmUPkyhn/GV24jcL2xii53r5suDKfyY1FH+Myk8oxxK4bfYlGJfH1W+KrCg1UmuyT7yVo5o26lqp1pySyU3rJdiltNt2GzcdmOTy8se2O2uSTo3BDVrVrcY4V3E0l2zt0sirGKrcEOsQ8pq3OIk6PuMbu89nayN0hpbcMn24taxX+mLz7zVrXLnUgu2S7yycoFkqMcEp9axO3zfbJ5ts5+e9adn0vdtdXABxvQAAAAAAAAAAAAAAAAAAAAAAAAAABpWXi6fmQ+FGcwWXi6fmQ+FGZhUZ5lHNZH0AaN5arUlt6mcv0UrZQxWC31cWrJ8FGLfyOsXfRfBnIND3nXv12YndP3QL4+qZ9Y1cp2mrKm8ulHL2f/Td8AZ7inzIv8jXsex/IyRjsNpenJlj2jatqmRl5h5ZJwNarSLzJjlgpNzZyRFXFGRerm2TIW9tltNZk58sbFewS2crmgn11Id5buVdc7BvSlv3MjdFLbWvaX+VuX9KbJPlY6WDelLfuZz81eh9HPx26UADmdwAAAAAAAAAAAAAAAAAAAAAAAAAANGy8XT8yHwozGGy8XT8yHwozBUAAGG76L4M5Docv8a/f/NLpf8AbA67d9GXBnKdEoczFJ/kxir74L6Ivj6pyfrXSKEdaGT3NZGG3ezJ71sZ7w+ecVwPV3Tyeutz6X1NJ/GFnW3ySMFRGXXTMNSRZnk1K6ITEesmbiZXsSqOTUYrOUnkkjSOfKJLQC1zq1qvVCOquMn9F7zDytdLBvSlv3MkNFl4CuqL+/BrjJc5/NEfyt78G9KW/czDku67/p8dYSOkgAxdIAAAAAAAAAAAAAAAAAAAAAAAAAANCy8XT8yHwozmCy8XT8yHwozBUAAGG76MuDObaBUNejjqW9YjXkuMVF/I6Rd9F8GUbklW3GfSdf4UWiLNp7BK2cIvyImYsrdjHwNWpSf3ZPLyxe1P2FgpSL1hj/Grc2Mltp/0P5MjK/hVvpz9UW17iyI+kzKxF45VPla3NTZGm4p/elzEvaSOG4HGjz5PXqtdLqj5Ir5k8zDVJudquPFjj2quIT8HcUanZUjnwzNblc6WDelLfuZm0m+726y7zBytb8G9KW/cyuTXi+XSQAZOgAAAAAAAAAAAAAAAAAAAAAAAAAAGhZ+Lp+ZD4TMYLN81Lrg3B8YvL3rJ+szhUAAGC76L4Mo/JL0sZ9J1/hReblZpnPuTe6VHEMWsp5RnVqwuqWf4ilHVq5cGo+/sLQWnSa0acK8VthzZ+b1P1PvMuH3CkkyYnBNNNZppprqaZWKlGVrU1drpSfMl2f5X5UXjDOau1giz6matCumjOpkJ29sw1WenM0cQu1CLbe4ItQt7T8Lc0KS65pvzY7X7kafK10sG9K2/cywaM2LblczWTqLKCfVDt9fdxK3ygVlcYlg9jT51SnXd1VS/CjFZU3Li9b2LtGS3HNR0wAGbcAAAAAAAAAAAAAAAAAAAAAAAAAAGrXtnnrwaUmtsX0Z5bs+x+Xv2Zaquau1O3qbOtOi0+HOz9qRKAI0jfDz/AJFT9H948PU/kVP0v3kkAaRjrT/kVP0v3lP0u0QldyhVp061G6ovOncU5UoVIPjr7vIdDANOYUKelEFqqdrWy+/XpqnN8fAyaPleOlE4uM6WHSi96ar/AFOoAnZpyS3w3SeG6Nj63WZsqjpT+TD/ANf6nUgN1H2Ryx0NKfyYf+v9TUqYTpLKSlKFhPVeeo3X1XxXWdeA3T7I5lKhpRUWpKdpbp7PCUafhJRXalUlkWLQvQmlYupWlUnc3lfbVuqjznLyLsRawQnQAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z', 'data:image/jpeg;base64,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']

    let [count, setcount] = useState(0)

    let [imgurls, setimgurls] = useState(imgurl[0])
    const next = () => {
        if (count != imgurl.length) {
            setcount(count += 1)
            setimgurls(imgurl[count])
            if (count == imgurl.length) {
                setcount(0)
                setimgurls(imgurl[0])
            }
        }
    }
    // console.log("hi")

    const getcdata = (name, age, school) => {
        sn(name)
        sa(age)
        ss(school)
        
    }
    let imgsurl = []
    
    const getcdata2 = (urls) => {
        imgsurl.push(urls)
        if (imgsurl.length > 1) {
            imgsurl.shift()
        }
    }
    getcdata2()

    let [childimgurl, setming] = useState([])
    const geturl=(links)=>{
        
        console.log(childimgurl)


    }
    geturl()
    const data=()=>{
        childimgurl.map((item)=>{
            return(
                <img src='' alt='phone img'></img>
            )
        })
    }
   
    let parentname = "Imran Ahmed"

    return (
        <>

            <h1>{cu}</h1>
            {/* <img src={childimgurl} alt="" /> */}
            {/* <img src={childimgurl} alt="" /> */}
            <h2>Hi iam Parent</h2>
            {data}
            <Child getdata={getcdata} pname={parentname} updt={setcu} links={imgurls} getarr={getcdata2} geturl={setming} />
            <h6>My name is {n} My age is {a} My school name is {s}</h6>

            <div className="card" >
                <img src={imgurl[count]} alt="" />
                <h6 className='text-center'>Title: </h6>
                <h6>Item No: </h6>
                <p>Price: </p>
                <button onClick={next}>Next</button>
            </div>

            {/* {
                imgsurl.map((item) => {
                    <div className="card" >
                        <img src={item} alt="" />
                        <h6 className='text-center'>Title: </h6>
                        <h6>Item No: </h6>
                        <p>Price: </p>
                        <button onClick={next}>Next</button>
                    </div>

                })
            } */}

            {/* <div className="card" >
                <img src={imgurl[count]} alt="" />
                <h6 className='text-center'>Title: </h6>
                <h6>Item No: </h6>
                <p>Price: </p>
                <button onClick={next}>Next</button>
            </div> */}
            {/* {urls.map(() => {
                return (

                    <div className="card" >
                        <img src={imgurl[count]} alt="" />
                        <h6 className='text-center'>Title: </h6>
                        <h6>Item No: </h6>
                        <p>Price: </p>
                        <button onClick={next}>Next</button>
                    </div>

                )
            })} */}
            {/* {data} */}
            {/* <div className="card" >
                <img src={imgsurl} alt="" />
                <h6 className='text-center'>Title: </h6>
                <h6>Item No: </h6>
                <p>Price: </p>
                <button onClick={next}>Next</button>
            </div> */}

        </>

    )
}

export default Parent
