import React from 'react';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import { Trip } from '@prisma/client';

interface TripHeaderProps {
    trip: Trip
}

const tripHeader = ( {trip}: TripHeaderProps) => {
    return (
        <div className="container mx-auto">
            <div className="relative h-[280px] w-full">
                <Image
                    src={trip?.coverImage}
                    style={{
                        objectFit: 'cover',
                    }}
                    alt={trip.name}
                    fill
                ></Image>
            </div>

            {/* RESERVA */}
            <div className='flex flex-col p-5'>
              <h1 className='font-semibold text-xl text-primaryDarker'>
                {trip.name}
              </h1>
              <div className="flex items-center my-1 gap-x-1">
                    <ReactCountryFlag countryCode={trip.countryCode} svg />
                    <p className="text-gray text-xs underline">{trip.location}</p>
                </div>

                <p className="text-gray text-xs font-medium">
                    <span className="text-primary font-medium">
                        R$ {trip.pricePerDay.toString()}{' '}
                    </span>
                    Diário
                </p>
            </div>
        </div>
  )
}

export default tripHeader