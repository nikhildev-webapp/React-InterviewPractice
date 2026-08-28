import React from 'react'
import { porductData } from './ProductData'

const ProductList = () => {
  return (
      <>
          <div className="bg-teal-950 min-h-screen p-6">
              <h1 className='text-3xl text-center font-semibold uppercase text-white cursor-pointer mb-8'>Product List</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {porductData.map((key, index) => (
                      <div 
                          className='border rounded p-4 wrap-break-word cursor-pointer border-white/10 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300' 
                          key={index}
                      >
                          <h1 className='text-teal-300 font-semibold uppercase text-sm mb-1'>ProductName: <span className='text-white'>{key.ProductName}</span></h1>
                          <p className='text-teal-300 font-semibold uppercase text-sm mb-1'>Price: <span className='text-white'>{key.Price}</span></p>
                          <p className='text-teal-300 font-semibold uppercase text-sm'>
                              Available: {key.isAvailable ? (
                                  <span className='text-emerald-400 font-semibold'>InStock</span>
                              ) : (
                                  <span className='text-red-400 font-semibold'>Out-of-Stock</span>
                              )}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </>
  )
}

export default ProductList
