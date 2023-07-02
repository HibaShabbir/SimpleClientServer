import { useRef, useState } from 'react';
import axios from 'axios';
export function Client(){
    const n1 =useRef(0);
    const n2=useRef(0);  
    const [result, setResult] = useState('');

    const add= ()=>{
    axios.get("http://localhost:3000/add",{params: { x: n1.current.value, y: n2.current.value}})
    .then((res)=>{
        setResult(`Addtion result: ${res.data}`);
        console.log(res.data);
    })
    }
    const multiply=()=>{
    axios.get("http://localhost:3000/multiply",{params: {x: n1.current.value, y: n2.current.value}})
    .then((res)=>{
        setResult(`Multiplication result: ${res.data}`);
    })
    }
    return(
        <div>
            <input type='number' id="n1" ref={n1} placeholder='enter number 1'/>
            <input type='number' id="n2" ref={n2} placeholder='enter number 2' />
            <div>
                <button onClick={add}>Add</button>
                <button onClick={multiply}>Multiply</button>
            </div>
            <div><label >{result}</label> </div>
        </div>

    );
}