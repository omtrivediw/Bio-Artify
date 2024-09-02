// import React from 'react';

const NavBar = () => {
  return (
    <div className='flex justify-between bg-transparent p-10 '>
      <h1 className='text-3xl font-bold text-white font-Milonga '>BioArtify</h1>
      <div className='flex'>
        <ul className='flex text-white gap-5'>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Support</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
