import { prisma } from '@/lib/prisma';
import React from 'react';
import TripHeader from './components/tripHeader';
import TripReservation from './components/tripReservation';
import TripDescription from './components/tripDescription';
import TripHighlights from './components/tripHighlights';
import TripLocation from './components/tripLocation';
import { tr } from 'date-fns/locale';

const getTripDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId,
        },
    });

    return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
    const trip = await getTripDetails(params.tripId);

    if (!trip) return null;

    return (
        <div className="container mx-auto">
            {/* RESERVA */}
            <TripHeader trip={trip} />

            {/* RESERVA */}
            <TripReservation tripId={trip.id} pricePerDay={trip.pricePerDay as any} tripStartDate={trip.startDate} tripEndDate={trip.endDate} maxGuests={trip.maxGuests}/>

            <TripDescription description={trip.description} />

            <TripHighlights highlights={trip.highlights} />

            <TripLocation location={trip.location} locationDescription={trip.locationDescription} countryCode={trip.countryCode}/>
        </div>
    );
};

export default TripDetails;
