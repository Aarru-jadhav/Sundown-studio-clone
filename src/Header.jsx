import React from 'react'

const Header = () => {
  return (
    <div className='header w-full h-36 flex justify-between border-1 border-blue-300 p-6'>
      <div className='logo'>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
          alt="sundown logo" />
      </div>
      <div className='navtext flex gap-10  '>
        <h4><a href="#">Home</a></h4>
        <h4 ><a href="#">Contact</a></h4>
        <h4 ><a href="#">Help</a></h4>

      </div>
    </div>
  )
}

export default Header

