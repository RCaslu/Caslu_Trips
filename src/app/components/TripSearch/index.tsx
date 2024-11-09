"use client"

import React from 'react';
import Input from '../../../../components/Input';
import DatePicker from '@/app/components/datePicker';
import CurrencyInput from '../currencyInput';

const TripSearch = () => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-center font-semibold text-2xl text-primaryDarker">
                Encontre Sua Próxima{' '}
                <span className="text-primary">Viagem!</span>
            </h1>

            <div className="flex flex-col gap-4 mt-5">
                <Input placeholder="Onde você quer ir?" />
                
                <div className="flex gap-4">
                    <DatePicker placeholderText="Data de ida" classname="w-full"/>
                    <CurrencyInput placeholder="Orçamento" />
                </div>
            </div>
        </div>
    );
};

export default TripSearch;
