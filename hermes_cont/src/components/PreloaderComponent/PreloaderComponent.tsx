import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Preloader from '../Preloader/Preloader'

export default function PreloaderComponent() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 10)
      }
    )()
  }, [])


  return (
    <AnimatePresence mode="wait">
      {isLoading && <Preloader />}
    </AnimatePresence>
  )
}
