import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
      <>
            <div className="flex flex-col justify-center items-center">
              <h1 className='text-2xl font-bold'>UseState Project-Counter</h1>
              <div className="border border-gray-300 p-10 mt-10">
                  <p className='text-center m-4 text-xl'>Counter: <span>{count}</span></p>
                  <div className="space-x-4">
                  <button onClick={() => setCount(count + 1)} className='bg-blue-500 text-white px-4 py-2 rounded'>Increment</button>
                  <button onClick={() => setCount(0)} className='bg-gray-500 text-white px-4 py-2 rounded'>Reset</button>
                  <button onClick={() => setCount(count - 1)} className='bg-red-500 text-white px-4 py-2 rounded'>Decrement</button>
                 </div>       
                  </div>
            </div>
      </>
  )
}

export default Counter