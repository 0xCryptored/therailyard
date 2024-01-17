import About2 from '@/components/About2'
import About from '@/components/About'
import Hero from '@/components/Hero'
import SubHero from '@/components/SubHero'
import PhotoGrid from '@/components/events/PhotoGrid'
import { AboutText, AboutText2 } from '@/constants/events/'
import Rates from '@/components/events/Rates'


export default function Home() {
  return (
    <div className='bg-[#595D48] overflow-hidden'>
      <Hero heading='Weddings & Events' message='Nurturing Love, Crafting Memories | Unveil the magic of your events in our idyllic wedding setting.'/>
      <About content={AboutText} />
      <PhotoGrid /> 
      <SubHero heading='Other Events' img='custom-img2' />
      <About2 content={AboutText2} />
      <Rates />
    </div>
  )
}
