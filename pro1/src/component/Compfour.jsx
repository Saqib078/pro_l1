import { useMemo, useState } from "react"


const Compfour = () => {
    const [count, setCount] = useState(0);

    const expensive = (num) => {
        console.log("function running ...")
        for (let i = 0; i < 1000000000; i++) { }
        console.log("finish")
        return num * 2
    }
    //✔️ useMemo unnecessary function execution rokta hai
    //✔️ useMemo sirf tabhi run hota hai jab dependencies change hoti hain
    //✔️ Heavy calculations optimize karne ke liye perfect hai!

    //🚀 One line rule: "Agar koi function har render pe chalta hai bina reason, to useMemo use karo!" 😃

    let a = 4
    useMemo(() => expensive(a), [a])

    return (
        <>
            <div>
                <br />
                <br />
                <h1>without memo</h1>
            </div>
            <div>
                <div onClick={() => setCount(count + 1)}>
                    increment by 1
                </div>
                <br />
                <br />

                <div>
                    count:{count}
                </div>
            </div>
        </>
    )
}

export default Compfour