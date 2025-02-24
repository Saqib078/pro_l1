import './compone.css'
import { useState } from 'react'

const Compone = () => {
  const [color , setColor] =useState("blue");

  return (
    <>
    <div className='parent' style={{backgroundColor:color}}>
        <div className='children'>
           <div className='bl but_col' onClick={()=>{setColor("blue")}}>blue</div>
           <div className='blc but_col' onClick={()=>{setColor("black")}}>black</div>
           <div className='or but_col' onClick={()=>{setColor("orange")}}>orange</div>
           <div className='yl but_col' onClick={()=>{setColor("yellow")}}>yellow</div>
           <div className='pk but_col' onClick={()=>{setColor("pink")}}>pink</div>
           <div className='wt but_col' onClick={()=>{setColor("white")}}>white</div>
        </div>
    </div>
    </>
  )
}

export default Compone