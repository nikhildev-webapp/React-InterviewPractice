import React from 'react'

const AlertButton = () => {
    const showAlert = () => {
        alert('Warning...')
        alert('System Hacked!');
    }
  return (
      <>
          <div className="flex flex-col justify-center items-center">
              <p className='text-gray-900 font-semibold text-xl underline mt-0.5'>Click the Button to show the alert the page.</p>    
              <button onClick={showAlert} className='bg-red-900 text-white p-2 m-2 w-3xs rounded-2xl text-2xl hover:bg-red-950 cursor-pointer'>Alert</button>
         </div>
      </>
  )
}

export default AlertButton