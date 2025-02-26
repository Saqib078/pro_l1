import { useCallback, useEffect, useRef, useState } from "react"
import './compsix.css'

const Compsix = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [char, setChar] = useState(false);
    const [password, setPassword] = useState("")
    let copy = useRef(null)



    const passwordGenator = useCallback(() => {
        let pass = ""
        let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
        let numbers = "0123456789";
        let specialChars = "!@#$%^&*()_+{}[]|:;'<>,.?/~";

        if (numberAllowed) {
            str += numbers;
            pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        if (char) {
            str += specialChars;
            pass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }

        for (let i = 0; i < ((numberAllowed && char) ? length - 2 : numberAllowed ? length - 1 : char ? length - 1 : length); i++) {
            let chars = Math.floor(Math.random() * str.length + 1)
            pass = pass + str.charAt(chars)
        }

        function shuffle(strs) {
            let arr = [...strs];
            for (let i = 0; i <= (arr.length / 2); i++) {
                let j = Math.floor(Math.random() * (i + 1))
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            return arr.join('');
        }
        let sh = shuffle(pass)
        setPassword(sh)

    }, [length, numberAllowed, char, setPassword])

    useEffect(() => {
        passwordGenator()
    }, [length, numberAllowed, char, passwordGenator])


    const copypassword = useCallback(() => {
        copy.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])


    return (
        <>
            <div className="parent">
                <div className="head_first">
                    <h1>Password generator</h1>
                </div>
                <div className="Copy">
                    <div><input type="text" value={password} readOnly ref={copy} /><p onClick={copypassword}>Copy</p></div>
                </div>
                <div className="conditions">
                    <div><input type="range" min={6} max={15} value={length} onChange={(e) => setLength(e.target.value)} /><br/>
                    <label htmlFor="">Length :{length}</label></div>
                    <div>
                        <input type="checkbox" defaultChecked={numberAllowed}
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }} />
                        <label htmlFor="">number</label>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={char}
                            onChange={() => {
                                setChar((prev) => !prev);
                            }} />
                        <label htmlFor="">char</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compsix