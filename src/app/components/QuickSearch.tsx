import React from 'react';
import Image from 'next/image';

const QuickSearch = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className="px-5 font-medium text-dark whitespace-nowrap">Tente pesquisar por</h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>

            <div className='flex justify-between mt-4'>
                <div className='flex flex-col items-center gap-1'>
                    <Image src='/hotel-icon.png' width={35} height={35} alt='hotel'/>
                    <p className='text-sm text-gray'>Hotel</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <Image src='/farm-icon.png' width={35} height={35} alt='farm'/>
                    <p className='text-sm text-gray'>Fazenda</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <Image src='/cottage-icon.png' width={35} height={35} alt='Chalé'/>
                    <p className='text-sm text-gray'>Chalé</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <Image src='/inn-icon.png' width={35} height={35} alt='Pousada'/>
                    <p className='text-sm text-gray'>Pousada</p>
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
