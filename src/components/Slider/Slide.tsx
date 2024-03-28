import { useEffect, useRef, useState } from 'react'

type SlideProps = {
  imageSrc: string
  children?: string | JSX.Element
}

export function Slide({ imageSrc, children }: SlideProps) {
  const imageSrcRef = useRef<ReturnType<typeof String> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)
  const [isApplied, setIsApplied] = useState(true)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (imageSrcRef.current !== imageSrc) {
      imageSrcRef.current = imageSrc
      setIsApplied(true)
    }

    timeoutRef.current = setTimeout(() => {
      setIsApplied(false)
    }, 300)
  }, [imageSrc])

  return (
    <div
      style={{ backgroundImage: `url(${imageSrc})` }}
      className="w-full h-full bg-cover bg-center text-white grow-0 shrink-0"
    >
      <div
        className={`w-full h-full ${isApplied ? 'animate-fade' : ''} ${children ? 'bg-gradient-to-r from-slate-900/[.9] from-30% to-transparent p-20' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
