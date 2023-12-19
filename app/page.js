import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Instagram from '@/components/Instagram'
import { SliderData } from '@/constants'
import SubHero from '@/components/SubHero'
import Included from '@/components/Included'
import Map from '@/components/Map'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <div className='bg-[#595D48]'>
        <Hero heading='Discover Eventful Charm' message='Our tranquil space is where memories are made and laughter echoes.'/>
        <Story />
        <Slider slides={SliderData} />
        <Instagram />
      </div>
      <div id='/#features' className='bg-[#D5BA91]'>
        <SubHero heading='Railyard Features' img='custom-img3' />
        <Map />
        <Included />
      </div>
    </div>
  )
}
