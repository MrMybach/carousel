import { Slide } from '@/components/Slider/Slide'
import { Indicator } from './Indicator'
import { Header } from './Header'
import { Text } from './Text'
import { Cta } from './Cta'
import { useSlider } from './useSlider'

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
  const { activeFrame, isPaused, handleChangeSlide, pauseToggle } = useSlider(
    slides.length,
  )

  return (
    <div className="w-full m-auto max-w-[1400px] relative drop-shadow-lg">
      <div className="w-full h-[450px] flex overflow-hidden rounded-lg transition duration-300">
        <Slide imageSrc={slides[activeFrame].src}>
          <Header heading={slides[activeFrame]?.header} />
          <Text message={slides[activeFrame]?.text} />
          <Cta ctaProps={slides[activeFrame]?.callToAction} />
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
