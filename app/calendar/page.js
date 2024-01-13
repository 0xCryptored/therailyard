import Hero from '@/components/Hero'
import About from '@/components/About'
import { AboutCalendar } from '@/constants'
import Calendly from '@/components/Calendly'

export default function Home() {
  return (
    <div className='bg-[#595D48]'>
        <Hero heading='Calendar' message='Checkout our available dates'/>
        <About content={AboutCalendar} />
        <Calendly />
    </div>
  )
}
