type SlideProps = {
  imageSrc: string
  children?: string | JSX.Element
}

export function Slide({ imageSrc, children }: SlideProps) {
  return (
    <div
      key={imageSrc}
      style={{ backgroundImage: `url(${imageSrc})` }}
      className="w-full h-full bg-cover bg-center text-white grow-0 shrink-0"
    >
      {children}
    </div>
  )
}
