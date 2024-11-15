'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/datePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';
import React from 'react';

interface TripReservationProps {
    trip: Trip;
}

const tripReservation = ({ trip }: TripReservationProps) => {
    return (
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <DatePicker
                    placeholderText="Data de Início"
                    className="w-full"
                />
                <DatePicker placeholderText="Data Final" className="w-full" />
            </div>

            <Input
                placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
                className="mt-4 w-full"
            />

            <div className="flex justify-between mt-3">
                <p className="font-medium text-sm text-primaryDarker">
                    Total:
                </p>
                <p className="font-medium text-sm text-primaryDarker">
                    R$ 2500
                </p>
            </div>

            <div className='pb-10 border-b border-grayLighter w-full'>
            <Button variant="primary" className="mt-3 w-full">
                Reservar
            </Button>
            </div>
        </div>
    );
};

export default tripReservation;
