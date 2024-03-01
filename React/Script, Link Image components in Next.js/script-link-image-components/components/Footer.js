import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between bg-blue-800 gap-3 text-white py-4 px-4 text-xs'>
        <div className="">Facebook © | All rights reserved </div>
        <ul className=' flex gap-3 text-sm'>
            <a href="/"><li className='text-xs'>Home</li></a>
            <a href="/about"><li className='text-xs'>About</li></a>
            <a href="/contact"><li className='text-xs'>Contact</li></a>
        </ul>
    </footer>
  )
}

export default Footer
