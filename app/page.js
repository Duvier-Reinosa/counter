'use client'
import React, { useState } from 'react'
import Button from './components/button'

export default function Home() {
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)

  const decrease = () => setCount(count - 1)

  const reset = () => setCount(0)
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center'>
        <h1 className='principalText'>Counter</h1>
        <div className='text-6xl'>{count}</div>
        <div className='flex'>
          <Button text='Reset' onClick={reset}/>
          <Button text='Increase' onClick={increase} />
          <Button text='Decrease' onClick={decrease} />
        </div>
      </div>
    </main>
  )
}
