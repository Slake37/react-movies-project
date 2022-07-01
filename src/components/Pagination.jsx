import React from 'react'
import {FcNext,FcPrevious} from 'react-icons/fc'

function Pagination({page,prevPage,nextPage}) {
    

  return (
    <div className='text-white flex justify-center align-middle text-xl'>
        
        <button onClick={prevPage}><FcPrevious/></button>
        <p className='mx-3 my-2'>{page}</p>
        <button onClick={nextPage}><FcNext/></button>
        
    </div>
  )
}

export default Pagination