import React from 'react';

function Header() {
    return (
		<div className="flex items-stretch bg-black text-white">
        <div className='flex-auto'>
          <img src="../../public/assets/favicon_io/apple-touch-icon.png"></img>
        </div>
        <div className='flex-auto items-center text-right pt-20 mr-10'>
          <button className="text-xl md:text-xl dark:text-black inline-block px-2 py-1 border-2 border-white rounded-md hover:bg-white hover:text-black">Login</button>
        </div>
    </div>
    )
}

export default Header;