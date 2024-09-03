// import React from 'react';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-transparent p-7 h-24 '>
      <h1 className='text-3xl font-bold text-white font-Milonga hover:bg-hv-text-gradient inline-block hover:text-transparent hover:bg-clip-text cursor-pointer'>BioArtify</h1>
      <div className='flex h-16'>
        <ul className='flex text-center justify-center flex-wrap text-white gap-10 font-semibold cursor-pointer p-2 text-lg '>
            <li className="p-2 hover:border-b">Home</li>
            <li className="p-2 hover:border-b">About Us</li>
            <li className="p-2 hover:border-b">Support</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
