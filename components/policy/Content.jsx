import React from 'react'
import Accordion from '../Accordion'
import { EventLogistics, FacilityGuidelines, CateringAndSeating, VenueAccessAndUsage, Responsabilities, CleanUpAndOthers } from '@/constants/policies'

const Content = () => {
  return (
    <div className='bg-[#D5BA91] rounded-lg mb-10 max-w-4xl mx-auto'>
      {EventLogistics.map((part, partIndex) => (
        <Accordion title={part.title} key={partIndex} content={part.content} />
      ))}
      {FacilityGuidelines.map((part, partIndex) => (
        <Accordion title={part.title} key={partIndex} content={part.content} />
      ))}
      {CateringAndSeating.map((part, partIndex) => (
        <Accordion title={part.title} key={partIndex} content={part.content} />
      ))}
      {VenueAccessAndUsage.map((part, partIndex) => (
        <Accordion title={part.title} key={partIndex} content={part.content} />
      ))}
      {Responsabilities.map((part, partIndex) => (
        <Accordion title={part.title} key={partIndex} content={part.content} />
      ))}
      {CleanUpAndOthers.map((part, partIndex) => (
        <Accordion title={part.title} key={partIndex} content={part.content} />
      ))}
    </div>
  )
}

export default Content