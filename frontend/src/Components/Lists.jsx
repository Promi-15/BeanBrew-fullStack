import React from 'react'

const Lists = () => {
  return (
    <div className='my-10'>
          <p className='text-center text-5xl font-bold italic'>Our Menu</p>
          <div className='grid lg:grid-cols-3  gap-5 mt-10 ml-15 grid-cols-1'>
              <div>
                  <img src="../../public/coldCof1.jpg" className='rounded-xl hover:shadow-2xl lg:h-[480px]' alt="" />
                  <p className='text-center font-semibold italic mt-5 text-2xl'>Cold coffee</p>
              </div>
              <div>
                  <img src="../../public/expresso.jpg" className='rounded-xl hover:shadow-2xl lg:h-[480px]' alt="" />
                  <p className='text-center font-semibold italic mt-5 text-2xl'>Espresso</p>
              </div>
              <div>
                  <img src="../../public/matcha1.jpg" className='rounded-xl hover:shadow-2xl lg:h-[480px]' alt="" />
                  <p className='text-center font-semibold italic mt-5 text-2xl'>Matcha</p>
              </div>
          </div>
          <button className='btn'>See More...</button>
    </div>
  )
}

export default Lists
