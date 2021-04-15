

import React ,{useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(10);

    //console.log(nombre,setnombre);

    const handleAdd=(e)=>{
        setCounter(counter+1)
    }
    const handleReset=(e)=>{
        setCounter(value)
    }
    const handleSub=(e)=>{
        setCounter(counter-1)
    }
    return (
        <>
         <h1>CounterApp</h1> 
         <h2>{counter}</h2> 

         <button onClick={handleAdd}>boton +1</button> 
         <button onClick={handleReset}>reset</button>
         <button onClick={handleSub}>boton -1</button>
        </>
    )
}

CounterApp.propTypes = {

    value: PropTypes.number.isRequired

}

export default CounterApp
