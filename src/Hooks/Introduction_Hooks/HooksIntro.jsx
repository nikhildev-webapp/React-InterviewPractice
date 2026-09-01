import React from 'react'

const HooksIntro = () => {
  return (
      <div className='min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8'>
          <h1 className='text-3xl sm:text-4xl uppercase cursor-pointer mb-8 font-bold text-center hover:underline text-gray-800 transition-all duration-300'>Introduction to Hooks</h1>
           
          {/* Introduction Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
              <div className="border-2 border-blue-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 bg-white">
                  <h2 className='font-bold text-blue-700 underline uppercase text-lg sm:text-xl mb-3'>Hooks:</h2>
                  <p className='font-semibold text-gray-700 leading-relaxed'>React Hooks are special functions introduced in React 16.8 that allow functional components to use state, lifecycle methods, and other core features without writing class components.</p>
              </div>
              <div className="border-2 border-blue-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 bg-white">
                  <h2 className='font-bold text-blue-700 underline uppercase text-lg sm:text-xl mb-3'>Two Golden Rules of Hooks</h2>
                  <p className='font-semibold text-gray-700 mb-2'>1 - Only call hooks at the top level</p>
                  <p className='font-semibold text-gray-700'>2 - Only call hooks from React functions</p>
              </div>            
          </div>
          {/* Core React Hooks */}
          <h2 className='uppercase text-3xl sm:text-4xl hover:underline text-center mb-8 font-bold cursor-pointer text-gray-800 transition-all duration-300'>The Core React Hooks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useState</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Allows you to add state to functional components. It returns an array with the current state value and a function to update it.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useEffect</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Lets you perform side effects in functional components. It combines componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useContext</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Allows you to consume context values without wrapping in a Consumer component, making it easier to access global state.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useReducer</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Alternative to useState for complex state logic. It takes a reducer function and returns state and dispatch method.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useCallback</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Memoizes a function to prevent unnecessary re-renders of child components that depend on the function reference.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useMemo</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Memoizes expensive computations and returns the cached value only when dependencies change.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useRef</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Provides a way to access DOM nodes directly or keep a mutable value that persists across renders.</p>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <h3 className='font-bold text-green-700 underline uppercase text-base sm:text-lg mb-3'>useLayoutEffect</h3>
                  <p className='font-semibold text-gray-700 text-sm sm:text-base leading-relaxed'>Similar to useEffect but fires synchronously after DOM mutations, useful for measuring DOM elements.</p>
              </div>
          </div>
      </div>
  )
}

export default HooksIntro