import { useState } from "react"


const Compthird = () => {
    const [count , setCount]=useState(0);

    const expensive =(num)=>{
        console.log("function running ...")
        for (let i =0; i<1000000000;i++){}
        console.log("finish")
        return num*2

    }
    let a= 4

    let expenvalue= expensive(a)
  return (
    <>
    <div>
        <br />
        <br />
        <h1>without memo</h1>
    </div>
    <div>
        <div onClick={()=> setCount(count+1)}>
            increment by 1
        </div>
        <br />
        <br />
        
        <div>
            count:{count}
        </div>
        <br />
        <div>
            double:{expenvalue}
        </div>
    </div>
    </>
  )
}

export default Compthird