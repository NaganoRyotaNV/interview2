import { useEffect, useState } from "react"

export default function CountDown({seconds,handleAddtext}) {
    const [contdown,setCountdown] = useState(seconds)
    const timerId = useState()

    useEffect(()=>{
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        },1000)
        return () => clearInterval(timerId.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(contdown <= 0){
        return
    }


    return(
        <h1 className="timer">{contdown}</h1>
    )
}