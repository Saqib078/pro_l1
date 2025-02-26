import { useCallback, useState } from "react"
import Withoutusecall from "./Withoutusecall"
import Withusecall from "./Withusecall"

const Compfive = () => {
    const [count , setCount] =useState(0);

    const handle = ()=>{
        setCount(count+1)
    }
    const handlecall = useCallback(()=>{
        setCount(count+1)
    },[])
  return (
   <>
   <div>
    <div onClick={handle}>increment by 1</div>
    <div> count :{count}</div>
   </div>
   <div>
    children component without callback
    <Withoutusecall button="without callback" handle={handle}/>
   </div>
   <div>
    children component with callback
    <Withusecall button="with callback" handle={handlecall}/>
   </div>
   </>
  )
}

export default Compfive