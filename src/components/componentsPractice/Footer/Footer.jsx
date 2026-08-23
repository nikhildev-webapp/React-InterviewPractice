import React from 'react'

const Footer = () => {
  return (
      <>
          <div className="conatiner bg-gray-800 mx-auto p-4 ">
              <div className="flex flex-row justify-around">
                  <div>
                      <h3 className='text-gray-300'>React Learn</h3>
                      <p className='text-gray-300'>@rights are reserved in 2026</p>
                  </div>
                  <div>
                      <h3 className='text-gray-300'>Important Links</h3>
                      <ul className='list-none text-gray-600 '>
                          <li className='hover:underline cursor-pointer'>Career</li>
                          <li className='hover:underline cursor-pointer'>contact</li>
                          <li className='hover:underline cursor-pointer'>Blogs</li>
                          <li className='hover:underline cursor-pointer'>Gallery</li>
                      </ul>
                  </div>
                  <div>
                      <h3 className='text-gray-300'>Social Media Links</h3>
                      <ul className="list-none text-gray-600">
                          <li className='hover:underline cursor-pointer'>Instagram</li>
                          <li className='hover:underline cursor-pointer'>Facebook</li>
                          <li className='hover:underline cursor-pointer'>Twitter</li>
                      </ul>
                  </div>
                  
              </div>
          </div>
      </>
  )
}

export default Footer