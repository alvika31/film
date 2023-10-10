import React from 'react'
import { IconSearch } from '@tabler/icons-react';

function FormSearch({onSearch}) {
  return (
    <div className='inline-flex items-center border border-gray-300 rounded p-2'>
        <input type='text' onChange={(e) => onSearch(e.target.value)} className='focus:outline-0' placeholder='Search Film...' />
        <IconSearch />
    </div>
  )
}

export default FormSearch