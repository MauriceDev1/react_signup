import React from 'react'
import Form from '../componets/Form';

interface AccessProps {
    children: React.ReactNode;
}

export default function Access({children}: AccessProps) {
  return (
    <div className='w-full h-screen flex bg-blue-300'>
        <div className='w-9/12 m-auto flex bg-white rounded h-[85vh]'>
            <div className='w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 h-full realtive overflow-hidden hidden sm:block rounded-l' style={{position: 'relative',overflow:'hidden'}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='w-1/2'>
                {children}
            </div>
        </div>
    </div>  
  )
}
