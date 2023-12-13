import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Slider from '@/components/Slider'
import { SliderData } from '@/constants'

export default function Home() {
  return (
    <>
      <Hero heading='Discover Eventful Charm' message='Our tranquil space is where memories are made and laughter echoes.'/>
      <Slider slides={SliderData} />
      <Instagram />
      <Contact />
    </>
  )
}
