import React from "react"

const Withusecall = React.memo((props) => {
  
    // jb hm log sirf props ka data hota ha to memo re render se ruk lete ha but callback ki zarurat apki jb pdti 
    // ha jb function ko props me bhja jaye na ki data kyuki jaise hi function bhjega jb bhi comfive me state
    // change hoga function re render kr ka idhar aa jayega to ya bhi use hona legaga 

    // yaha jb rendering hogi tb jo props ka data ho vo change ho kyuki ya memo ha 


    console.log("children callback function use component render...")

    return (
        <div onClick={props.handle}>
            {props.button} 
        </div>
    )
})

export default Withusecall