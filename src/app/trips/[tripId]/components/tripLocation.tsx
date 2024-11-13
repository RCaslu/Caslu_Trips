import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import ReactCountryFlag from 'react-country-flag';

interface TripLocationProps {
    location: string;
    locationDescription: string;
    countryCode: string;
}

const tripLocation = ({
    location,
    locationDescription,
    countryCode,
}: TripLocationProps) => {
    return (
        <div>
            <div className="flex flex-col p-5 gap-y-3">
                <h1 className="font-semibold text-primaryDarker">
                    Localização
                </h1>
                <div className="relative h-[280px] w-full">
                    <Image
                        className="rounded-lg shadow-md"
                        src="/map-mobile.png"
                        fill
                        alt={location}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className="flex items-center gap-x-1 mt-3">
                    <ReactCountryFlag countryCode={countryCode} svg />
                    <p className="text-sm text-primaryDarker font-semibold">
                        {location}
                    </p>
                </div>
                <p className="text-xs text-primaryDarker leading-5">
                    {locationDescription}
                </p>

                <Button className="mt-5" variant="outlined">
                    Ver no Google Maps
                </Button>
            </div>
        </div>
    );
};

export default tripLocation;
