import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import About from '@/components/About'
import { AboutContact } from '@/constants'

export default function Home() {
  return (
    <div className='bg-[#D5BA91]'>
      <Hero heading='Get in Touch' message='Planting Inquiries, Growing Memories | Your Celebrations Await!'/>
      <About content={AboutContact} />
      <Contact />
    </div>
  )
}
