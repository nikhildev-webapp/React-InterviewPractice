import React from 'react'

const HandlButtonClick = () => {
    const clickButton = (e) => {
        e.preventDefault();
        let para = document.getElementById('para');
        let p = document.createElement('p');
        p.innerText = 'You Clicked the button';
        para.appendChild(p);
    }
  return (
      <>
          <div className='flex flex-col justify-center items-center'>
           <h1>Handle Button Click</h1>
           <button onClick={clickButton} className='bg-cyan-600 rounded-2xl p-2 m-2 text-white hover:bg-cyan-500 cursor-pointer font-semibold'>Click Me</button>
            <p id='para' className='text-slate-700 underline'></p>
          </div>
          </>
  )
}

export default HandlButtonClick