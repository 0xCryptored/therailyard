import About from '@/components/About'
import Hero from '@/components/Hero'
import Content from '@/components/policy/Content'
import { AboutText } from '@/constants/policies/'

export default function Home() {
  return (
    <div className='bg-[#595D48] overflow-hidden'>
      <Hero heading='Policies' message='Harvesting good times | Our policies are as welcoming as a sunflower in bloom!'/>
      <About content={AboutText}/>
      <div className='p-5'>
        <Content />
      </div>
    </div>
  )
}
