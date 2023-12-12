import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Slider from '@/components/Slider'
import { SliderData } from '@/constants'

export default function Home() {
  return (
    <>
      <Hero heading='Create Unforgettable Memories' message='Where dreams come true'/>
      <Slider slides={SliderData} />
      <Instagram />
      <Contact />
    </>
  )
}
