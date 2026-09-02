import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const countColor = count < 0 ? 'text-red-500' : count > 0 ? 'text-blue-500' : 'text-black'

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6">
      <h3 className="text-center text-2xl font-semibold uppercase sm:text-3xl">
        UseState hook example
      </h3>
      <div className="flex justify-center">
        <div className="mt-8 w-full max-w-md rounded-lg border border-gray-300 p-5 shadow-lg sm:p-8">
          <p className="m-3 text-center text-2xl font-bold">
            Counter: <span className={countColor}>{count}</span>
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => setCount((currentCount) => currentCount + 1)}
            >
              Increment
            </button>
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              onClick={() => setCount((currentCount) => currentCount - 1)}
            >
              Decrement
            </button>
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Counter