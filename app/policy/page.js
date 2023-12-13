import Hero from '@/components/Hero'
import Cover from '@/components/policy/Cover'
import Items from '@/components/policy/Items'

export default function Home() {
  return (
    <>
      <Hero heading='Policies' message='Harvesting good times | Our policies are as welcoming as a sunflower in bloom!'/>
      <Cover />
      <Items />
    </>
  )
}
