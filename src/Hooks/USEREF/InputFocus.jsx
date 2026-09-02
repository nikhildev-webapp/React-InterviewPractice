import React ,{useRef,useEffect}from 'react'

const InputFocus = () => {
    const inputRef =useRef(null)

   useEffect(() => {
        inputRef.current.focus()
    }, [])
  return (  
      <>
          <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
              <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Input Focus Example</h1>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">Name</label>
                      <input
                        type="text"
                              id="name"
                              ref={inputRef}
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                  </form>
                </div>
              </div>
      </>
  )
}

export default InputFocus