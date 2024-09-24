import React, { useRef, useState } from 'react';

function Commentsreply() {
    const [data, setdata] = useState([]);
    const [cinput, setinput] = useState(false)
    const comment = useRef('');
    const replies = useRef('');
    let [counter, setCounter] = useState(0);

    const Addcoment = () => {
        setinput(false)
        const c = comment.current?.value.trim();
        if (c !== "") {
            setdata([...data, { id: counter, "Comments": c, "Reply": [] }])
            setCounter(counter + 1);
            comment.current.value = "";
        }
    };


    const Reply = async (singlecomment) => {
        setinput(true)
        let r = replies.current?.value  
        if (r !== undefined) {
            let newreply = r.trim()
            if (r !== "") {
                const updateddata = data.map((item) => {
                    if (item.id === singlecomment.id) {
                        return { ...item, Reply: [...item.Reply, newreply] }
                    }
                    return item
                })
                setdata(updateddata)
                replies.current.value=""
            }
            else{
                alert("Reply can not be empty")
            }
        }
       
    };

    return (
        <>
            <h3>Comments Section</h3>
            <input type='text' id="inputbox" placeholder='' ref={comment}></input>
            <button onClick={Addcoment}>Add Comment</button>
            <div>
                <h5>Comments</h5>
                {
                    data.map((singlecomment) => (
                        <div key={singlecomment.id}>
                            <div>{singlecomment.Comments}</div>
                            <div>
                                {singlecomment.Reply.map((r, idx) => (
                                    <div key={idx}><span>Reply:</span>{r}</div>
                                ))}
                            </div>
                            {cinput ?
                                <input type='text' id="inputbox2" placeholder='Reply' ref={replies}></input>
                                : null}
                            <button onClick={() => Reply(singlecomment)}>Reply?</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Commentsreply;
