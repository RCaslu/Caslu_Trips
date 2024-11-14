'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/datePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface TripReservationForm {
    guests: number;
    startDate: Date | null;
    endDate: Date | null;
}

interface TripReservationProps {
    trip: Trip;
}

const tripReservation = ({ trip }: TripReservationProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<TripReservationForm>();

    const onSubmit = (data: any) => {
        console.log({ data });
    };
    return (
        <div className="flex flex-col px-5">
            <div className="flex gap-4">
                <Controller
                    name="startDate"
                    rules={{
                        required: {
                            value: true,
                            message: 'Data de início é obrigatória',
                        },
                    }}
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            placeholderText="Data de Início"
                            className="w-full"
                            onChange={field.onChange}
                            selected={field.value}  
                            error={!!errors?.startDate}
                            errorMessage={errors?.startDate?.message}
                        />
                    )}
                />
                <Controller
                    name="endDate"
                    rules={{
                        required: {
                            value: true,
                            message: 'Data final é obrigatória',
                        },
                    }}
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            placeholderText="Data Final"
                            className="w-full"
                            onChange={field.onChange}
                            selected={field.value}  
                            error={!!errors?.endDate}
                            errorMessage={errors?.endDate?.message}
                        />
                    )}
                />
            </div>

            <Input
                {...register('guests', {
                    required: {
                        value: true,
                        message: 'Número de hóspedes é obrigatório',
                    },
                })}
                error={!!errors?.guests}
                errorMessage={errors?.guests?.message}
                placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
                className="mt-4 w-full"
            />

            <div className="flex justify-between mt-3">
                <p className="font-medium text-sm text-primaryDarker">Total:</p>
                <p className="font-medium text-sm text-primaryDarker">
                    R$ 2500
                </p>
            </div>

            <div className="pb-10 border-b border-grayLighter w-full">
                <Button
                    onClick={() => handleSubmit(onSubmit)()}
                    variant="primary"
                    className="mt-3 w-full"
                >
                    Reservar
                </Button>
            </div>
        </div>
    );
};

export default tripReservation;
