import Hero from '@/components/Hero'
import Content from '@/components/policy/Content'
import Cover from '@/components/policy/Cover'
import Items from '@/components/policy/Items'

export default function Home() {
  return (
    <>
      <Hero heading='Policies' message='Harvesting good times | Our policies are as welcoming as a sunflower in bloom!'/>
      <Cover />
      <div className='p-5'>
        <Content />
      </div>
    </>
  )
}
