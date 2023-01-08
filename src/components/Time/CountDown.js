import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



export default function CountDown({TextValue}) {
    const [contdown,setCountdown] = useState(200)
    const timerId = useState()

    useEffect(()=>{
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        },1000)
        return () => clearInterval(timerId.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const navigate = useNavigate();
    console.log(TextValue)
    //const zero = "a"
    if(contdown === 0){
        const name = TextValue.current.value;
        window.location.href = "/Feedback";
        navigate('/Feedback',  
        {state: {name}}) 
    }

     
    
    return(
        <h1 className="timer">{contdown}</h1>
    )
}