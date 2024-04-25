import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    // useState will re-render when the content change and update in UI

    // useRef doesn't notify you when its content changes.Mutating the 
    // (.current) property doesn't cause a re-render

    const data = useRef()
    const timerRef = useRef(null)
    const interalRef = useRef(null)

    const startTimer = () => {
        let seconds = 0;

        interalRef.current = setInterval(() => {
            seconds++;

            timerRef.current.textContent = `Timer:${seconds} seconds`
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(interalRef.current)
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data.current.value)
    // }

    // useEffect(() => {
    //     data.current.focus()
    // }, [])

    return (
        <center>
            <h2>UseRefHook</h2> 
            {/* <form>
                <input ref={data} type='text' placeholder='Enter your name' />
                <button 
                onClick={handleSubmit}
                >Submit</button>
            </form>   */}
            <p ref={timerRef}> 0 seconds</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </center>
    )
}

export default UseRefHook