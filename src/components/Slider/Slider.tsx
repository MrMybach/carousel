import { useEffect, useRef, useState } from 'react'
import { Slide } from '@/components/Slider/Slide'
import { Button } from '@/components/Button/Button'

import { Indicator } from './Indicator'

const timeoutDuration = 5000

type Slide = {
  src: string
  thumbSrc: string
  alt: string
  header?: string
  text?: string
  callToAction?: {
    text: string
    href: string
  }
}

type SliderProps = {
  slides: Slide[]
}

export function Slider({ slides }: SliderProps) {
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
        setActiveFrame(prev => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }, timeoutDuration)
  }, [activeFrame, isPaused, slides.length])

  return (
    <div className="w-full m-auto max-w-[1400px] relative drop-shadow-lg">
      <div className="w-full h-[450px] flex overflow-hidden rounded-lg transition duration-300">
        <Slide imageSrc={slides[activeFrame].src}>
          {slides[activeFrame].header && (
            <div className="w-full h-full bg-gradient-to-r from-slate-900/[.9] from-30% to-transparent p-20">
              <h1 className="text-3xl uppercase font-bold mb-10">
                {slides[activeFrame].header}
              </h1>
              {slides[activeFrame].text && (
                <p className="max-w-60 text-slate-400 mb-12">
                  {slides[activeFrame].text}
                </p>
              )}
              {slides[activeFrame].callToAction?.text && (
                <Button
                  href={slides[activeFrame].callToAction?.href}
                  text={slides[activeFrame].callToAction?.text}
                />
              )}
            </div>
          )}
        </Slide>
      </div>

      <Indicator
        handlePause={pauseToggle}
        handleChangeSlide={handleChangeSlide}
        currentFrame={activeFrame}
        isPaused={isPaused}
        slides={slides}
      />
    </div>
  )
}
