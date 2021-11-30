import React ,{useState} from 'react'

import {Progress} from 'reactstrap'
function Card(props) {
    const [value,setValue]=useState(0)
    const increment =()=>{
        setValue(value +10)
        
        
    }
    

    const decrement =()=>{
        setValue(value-10)
    }
    return (
        
        <div className='Card-funcional' >
            <div className='Card-funcional__titulo'>{props.titulo}</div> 
            <div className='Card-funcional__desc'>{props.descripcion}</div> 
             
            <Progress

            id ='Card-funcional__progress-bar'
            color="blue"
            value={value}/>
            
            <button onClick={increment} className='Card-funcional__button me-2'>{props.buttonText}</button>
            <button onClick={decrement} className='Card-funcional__button ms-2' >{props.buttonText_less}</button>
        </div>
    )
}

export default Card
