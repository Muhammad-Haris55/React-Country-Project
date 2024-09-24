import React from 'react'

function ContextForm({position,setposition,rowtitle,titles,settitles}) {

    const deleting = () => {
        setposition({ "top": '' })
        const index=titles.findIndex((index)=>index.title===rowtitle)
        let newarr=[...titles]
        newarr.splice(index,1)
        settitles(newarr)
    }


    return (
        <>
            {
                (position.top) ?
                    <div className="menu" style={{ top: `${position.top}px`, left: `${position.left}px` }}>
                        {/* <span onClick={editing}>Edit</span> */}
                        <span onClick={deleting}>Delete</span>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default ContextForm
