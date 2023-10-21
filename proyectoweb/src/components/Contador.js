import { useState } from "react"
import './Style.css'
const Contador =()=>{

const [contador , setContador] = useState(0)

    const addition = () =>{
        setContador(contador + 1)
    }

    const subtraction = () =>{
        setContador(contador - 1)
    }

    return(
        <>
        <div className="section--Space">
        <h3 className="counter">{contador}</h3>
        <button className="buttonCounter" onClick={addition}> +1</button>
        <button className="buttonCounter" onClick={subtraction}> -1</button>
        </div>
        </>
    )
}

export default Contador
    