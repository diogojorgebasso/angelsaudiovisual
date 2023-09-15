'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Pedimos desculpas pelo incoveniente!</h2>
      <p>Algum erro ocorreu, tente restaurar clicando no botão abaixo:</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Tentar de novo
      </button>
    </div>
  )
}