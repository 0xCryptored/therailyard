import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Instagram from '@/components/Instagram'
import Slider from '@/components/Slider'
import { SliderData } from '@/constants'
import SubHero from '@/components/SubHero'

export default function Home() {
  return (
    <div className='bg-[#595D48] overflow-hidden'>
      <Hero heading='Discover Eventful Charm' message='Our tranquil space is where memories are made and laughter echoes.'/>
      <div className='relative'>
        <Story />
        <div className='gradient-04 z-0'/>
        <Slider slides={SliderData} />
      </div>
      <Instagram />
      <SubHero heading='Railyard Features'/>
    </div>
  )
}
