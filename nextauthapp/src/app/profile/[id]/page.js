import React from 'react'

function Userprofile({params}) {
  return (
    <div className='w-screen flex gap-1 justify-center items-center min-h-screen'>
      <h1>Profile at </h1>
      <p className='text-red-300'>{params.id}</p>
    </div>
  )
}

export default Userprofile
