import { useState, useRef , useEffect } from "react"
import './compsec.css'
const Compsec = () => {
    const [count , setCount] =useState(0)
    let refcount = useRef(0)
    let displayRef = useRef(null);

    useEffect(()=>{
        console.log("rendering")
    })

    const handleIncrement = () => {
        refcount.current += 1;
        if (displayRef.current) { // ✅ Null check added
            displayRef.current.innerText = `${refcount.current}`;
        }
    };
    const handledecrement = () => {
        refcount.current -= 1;
        if (displayRef.current) { 
            displayRef.current.innerText = `${refcount.current}`;
        }
    };
  return (
   <>
   <div className="state_style">
    <div>
        <div >using useState</div>
        <div>value : {count}</div>
        <div onClick={()=> setCount(count+1)}>increment by 1</div>
        <div onClick={()=> setCount(count-1)}>decrement by 1</div>
    </div>
   </div>
   <div className="ref_style">
    <div>
        <div >using useRef</div>
        <div ref={displayRef}>0</div>
        <div onClick={handleIncrement}>increment by 1</div>
        <div onClick={handledecrement} >decrement by 1</div>
    </div>
   </div>
   </>
  )
}

export default Compsec