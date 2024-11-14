'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/datePicker';
import Input from '@/components/Input';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { differenceInDays } from 'date-fns';

interface TripReservationForm {
    guests: number;
    startDate: Date | null;
    endDate: Date | null;
}

interface TripReservationProps {
    tripStartDate: Date;
    tripEndDate: Date;
    maxGuests: number;
    pricePerDay: number;
}

const tripReservation = ({ maxGuests, tripEndDate, tripStartDate, pricePerDay }: TripReservationProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm<TripReservationForm>();

    const onSubmit = (data: any) => {
        console.log({ data });
    };

    const startDate = watch('startDate'); 
    const endDate = watch('endDate');

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
                            minDate={tripStartDate}
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
                            maxDate={tripEndDate}
                            minDate={startDate ?? tripStartDate}
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
                placeholder={`Número de hóspedes (max: ${maxGuests})`}
                className="mt-4 w-full"
            />

            <div className="flex justify-between mt-3">
                <p className="font-medium text-sm text-primaryDarker">Total:</p>
                <p className="font-medium text-sm text-primaryDarker">
                {startDate && endDate ? `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1 : "R$0"}
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
