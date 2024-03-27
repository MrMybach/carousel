import { Slider } from '@/components/Slider/Slider'

const images = [
  {
    src: 'https://fastly.picsum.photos/id/866/1500/450.jpg?hmac=WRIhp3nttVGQqTMX2w2lGLfWOsFviGDmQ-Gu6NQQeuo',
    thumbSrc:
      'https://fastly.picsum.photos/id/866/100/100.jpg?hmac=ci1nxrYzr9SaVQenyuqBybKgVslILw_KRPf-cZjq4yg',
    alt: 'Mountains',
    header: 'Did you know?',
    text: 'Did you know that water on Mount Everest boils at 68 degrees Celsius? Find out more.',
    callToAction: {
      text: 'Find out more',
      href: 'https://dydaktyka.fizyka.umk.pl/4_i_pol_stany_skupienia/Wrzenie_wody_2.html',
    },
  },
  {
    src: 'https://fastly.picsum.photos/id/237/1500/450.jpg?hmac=4-fIt5IDCnxNL-kNN0MNc1QQ-ak0WJ-pUnhArDIgoZU',
    thumbSrc:
      'https://fastly.picsum.photos/id/237/100/100.jpg?hmac=Pna_vL4vYBRMXxFMY-lYXcZAL34T7PZWdNDlEOwqqE4',
    alt: 'Dog',
  },
  {
    src: 'https://fastly.picsum.photos/id/28/1500/450.jpg?hmac=K-A0Ru-e_-AIC3edtmnGPFazpTvr9yxcnrYfRfERkvg',
    thumbSrc:
      'https://fastly.picsum.photos/id/28/100/100.jpg?hmac=T7360vJtFEkg0zVPCgXIy9jOcuJHaq6wC-qVNE0EDBQ',
    alt: 'Forest',
  },
]

function App() {
  return (
    <div className="bg-sky-900 w-full h-screen min-w-fit">
      <header className="bg-sky-800 h-15 p-5 mb-10 drop-shadow-md">
        <h1 className="text-sky-100">Company LTD.</h1>
      </header>

      <section className="lg:container lg:mx-auto mx-4">
        <Slider slides={images} />
      </section>
    </div>
  )
}

export default App
