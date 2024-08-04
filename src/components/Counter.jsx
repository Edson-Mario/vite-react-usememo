import {useState, useMemo} from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, steCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () =>{
        steCounterTwo(counterTwo + 1)
    }

    const isEvent = useMemo(() =>{
        let i=0
        while(i < 900000000) i++
        return counterOne % 2 == 0
    }, [counterOne])

  return (
    <div className='flex gap-3 justify-center'>
      <button className='border bg-slate-400 py-2 px-5 flex gap-3'
      onClick={incrementOne}>Count One: {counterOne}
      <span>{isEvent ? 'Even' : 'Odd'}</span>
      </button>

    <button className='border bg-slate-400 p-2'
    onClick={incrementTwo}>Count Two: {counterTwo}</button>
    </div>
  )
}

export default Counter
