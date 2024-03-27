import { useState, useRef, useEffect } from 'react'

const timeoutDuration = 5000

export function useSlider(slidesAmount: number) {
  const [activeFrame, setActiveFrame] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const pauseToggle = () => {
    setIsPaused(!isPaused)
  }

  const handleChangeSlide = (index: number) => {
    setActiveFrame(index)
    setIsPaused(false)
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      if (!isPaused) {
        setActiveFrame(prev => (prev === slidesAmount - 1 ? 0 : prev + 1))
      }
    }, timeoutDuration)
  }, [activeFrame, isPaused, slidesAmount])

  return {
    pauseToggle,
    handleChangeSlide,
    isPaused,
    activeFrame,
  }
}
