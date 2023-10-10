import React from 'react'
import FormSearch from './FormSearch'

function Navbar({onSearch}) {
  return (
    <div className='border-b bg-white'>
    <div className='flex justify-between container items-center py-3'>
        <h1 className='font-bold text-2xl text-slate-700'>Film Asik</h1>
        <FormSearch onSearch={onSearch}/>
    </div>
    </div>
  )
}

export default Navbar