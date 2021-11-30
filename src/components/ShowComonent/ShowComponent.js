
import React ,{useState}from 'react'
import Msn from './Msn';
function ShowComponent() {

    const [show,setShow]= useState(false);
    const compoent=()=>{
        setShow(!show)
    }
    return (
        <div>

            <button onClick={compoent} >click here</button>
            {show ? <Msn/> :''}
        </div>
    )
}

export default ShowComponent
