import pause from '@/assets/images/pause.svg'
import play from '@/assets/images/play.svg'

type IndicatorProps = {
  slides: {
    thumbSrc: string
    alt: string
  }[]
  isPaused: boolean
  currentFrame: number
  handlePause: () => void
  handleChangeSlide: (index: number) => void
}

export function Indicator({
  slides,
  isPaused,
  currentFrame,
  handlePause,
  handleChangeSlide,
}: IndicatorProps) {
  return (
    <div className="absolute w-full flex flex-row justify-center md:justify-end gap-5 bottom-[-3.4rem] md:pr-20">
      {slides.map((element, index) => (
        <div
          key={element.thumbSrc}
          className="box-border rounded-md p-[4px] drop-shadow-md bg-[radial-gradient(192.27%_129.59%_at_0_.89%,#a7e64c_0,#029fd9_31.71%,#611fe7_53.25%,#8840e6_71.78%,#65d5ff_89.56%)] transition duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
          role="button"
          onClick={() => handleChangeSlide(index)}
        >
          <img
            src={element.thumbSrc}
            alt={element.alt}
            className={`transition hover:bg-indigo-900 grayscale hover:grayscale-0 duration-300 ${currentFrame === index ? 'grayscale-0' : ''}`}
          />
        </div>
      ))}
      <div className="md:flex items-end hidden">
        <button className="group" onClick={handlePause}>
          <img
            src={isPaused ? play : pause}
            alt="Pause icon"
            className="m-0 p-0 block group-hover:opacity-50 transition duration-200"
          />
        </button>
      </div>
    </div>
  )
}
