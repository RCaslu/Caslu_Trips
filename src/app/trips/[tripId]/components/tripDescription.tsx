import React from 'react'

interface TripDescriptionProps {
    description: string
}

const TripDescription = ({description}: TripDescriptionProps) => {
  return (
    <div className='flex flex-col p-5 gap-y-3'>
        <h1 className='font-semibold text-primaryDarker'>Sobre a viagem</h1>
        <p className='text-xs leading-5 text-primaryDarker'>{description}</p>
    </div>
  )
}

export default TripDescription