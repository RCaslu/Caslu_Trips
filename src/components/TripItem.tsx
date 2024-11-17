import { Trip } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import Link from 'next/link';

interface TripItemProps {
    trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
    return (
        <Link href={`/trips/${trip.id}`}>
            <div className="flex flex-col gap-1">
                <div className="relative h-[280px] w-[380px]">
                    <Image
                        src={trip.coverImage}
                        fill
                        className="rounded-lg shadow-md"
                        alt={trip.name}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <h3 className="text-primaryDarker font-medium text-sm mt-2">
                    {trip.name}
                </h3>
                <div className="flex items-center my-1 gap-x-1">
                    <ReactCountryFlag countryCode={trip.countryCode} svg />
                    <p className="text-gray text-xs">{trip.location}</p>
                </div>
                <p className="text-gray text-xs font-medium">
                    <span className="text-primary">
                        R$ {trip.pricePerDay.toString()}{' '}
                    </span>
                    Diário
                </p>
            </div>
        </Link>
    );
};

export default TripItem;
