import React from 'react'

const Propintro = ({username,imgUrl,alertFunction}) => {
    const style = {
        imgStyle: {
            objectFit: 'cover',
            borderRadius: '100',
            width: 50,
            height:50
        }
    }
    return (
      <>
          <main className="conatiner ">
              <section className='flex flex-col justify-center items-center'>
              <section className='border w-3xs m-3 p-3 rounded'>
                  <h3 className='text-blue-600 font-bold'>What is Props?</h3>
                  <p>Props(properties)are read only object used to passed data from parent to chiled components</p>
                  </section>   
              </section>
              <h3 className='text-2xl font-bold m-0.5 text-center'>Props Exercises</h3>
                <section className="flex flex-row justify-around ">
                <section className='border rounded p-2 m-2 w-3xs'>
                      <h3>Exercise-1 Pass the username</h3>
                      <h3>UserName:{username}</h3>
                  </section>
                  <section className='border rounded p-2 m-2 w-3xs'>
                      <h3>Exercise-2 Pass the img url</h3>
                      <img src={imgUrl} className='w-32 h-32 rounded-full object-cover'/>
                  </section>
                <section className='border rounded p-2 m-2 w-3xs'>
                    <h3>Exercise-3 Pass the function as a Props</h3>
                    <button onClick={alertFunction} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>clickMe</button>
                    </section>
                    </section>
         </main>
      </>
  )
}

export default Propintro