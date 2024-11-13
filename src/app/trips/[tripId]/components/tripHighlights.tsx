import React from 'react';
import Image from 'next/image';

interface TripHighlightsProps {
    highlights: string[];
}

const tripHighlights = ({ highlights }: TripHighlightsProps) => {
    return (
        <div className="flex flex-col p-5">
            <h1 className="font-semibold text-primaryDarker mb-2">Destaques</h1>
            
            <div className='flex flex-wrap gap-y-3'>
                {highlights.map((highlight, index) => (
                    <div key={index} className='flex items-center gap-1 w-1/2'>
                        <Image
                            src='/check-icon.png'
                            width={16}
                            height={16}
                            alt={highlight}
                        />
                        <p className='text-xs leading-5 text-primaryDarker mt-1'>{highlight}</p>
                    </div>
                ))}
            </div>  
        </div>
    );
};

export default tripHighlights;
