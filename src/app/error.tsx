'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='max-w-screen-2xl mx-auto my-52'>
      <h2 className="text-4xl font-bold text-[#272343] text-center">Something went wrong!</h2>
      <div className='flex justify-center mt-4'>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        } className='flex text-sm font-semibold py-3 px-7 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white transition-transform transform hover:scale-105'
      >
        Try again
      </button>
      </div>
    </div>
  )
}