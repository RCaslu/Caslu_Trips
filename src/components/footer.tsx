import React from 'react';
import Image from 'next/image';

const footer = () => {
    return (
        <div className="flex flex-col bg-walterwhite p-5 justify-center items-center">
            <Image src="/Logo.svg" alt="Logo Image" width={133} height={23} />
            <p className="text-sm text-primaryDarker font-medium mt-1 text-center">
                Todos os direitos reservados.
                <br/>@RCaslu
            </p>
        </div>
    );
};

export default footer;
