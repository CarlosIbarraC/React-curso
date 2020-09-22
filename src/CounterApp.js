import React,{useState} from 'react';
import PropTypes from 'prop-types'; 

const CounterApp = ({value=10})=>{
     
    const [counter, setCounter] = useState(value);

    

    const handleAdd = (e)=>{
        setCounter(counter +1);
        //setCounter((c)=>c+1)
    }
    const handleDis = (e)=>{setCounter(counter -1)}
    const handleDef = (e)=>{setCounter(value)}
    return(<>
    <h1>CounterApp</h1>
    <p>{counter}</p>
    <button onClick={handleAdd}>+1</button>
    <button onClick={handleDef}>Reset</button>
    <button onClick={handleDis}>-1</button>
    </>
    ) 
}
CounterApp.prototype={
    value:PropTypes.number.isRequired
}
export default CounterApp;
//prueba

