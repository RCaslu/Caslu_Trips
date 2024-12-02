'use client';

import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const { status, data } = useSession();

    const handleLoginClick = () => signIn();

    const handleLogoutClick = () => [
        signOut().then(() => setMenuIsOpen(false)),
    ];

    const handleMyTripsClick = () => {

    }

    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <div className="relative h-[32px] w-[182px]">
                <Link href="/">
                    <Image src={'/Logo.svg'} alt="Logo Image" fill />
                </Link>
            </div>

            {status === 'unauthenticated' && (
                <button
                    onClick={handleLoginClick}
                    className="text-primary text-sm font-semibold"
                >
                    Login
                </button>
            )}

            {status === 'authenticated' && data.user && (
                <div className="border border-solid rounded-full p-2 px-3 border-grayLighter flex items-center gap-3 relative">
                    <AiOutlineMenu
                        className="cursor-pointer"
                        size={16}
                        onClick={handleMenuClick}
                    />
                    <Image
                        className="rounded-full shadow-md"
                        src={data.user.image!}
                        alt={data.user.image!}
                        width={35}
                        height={35}
                    />

                    {menuIsOpen && (
                        <div className="absolute top-12 bg-white right-0 shadow-lg rounded-lg p-4 z-50">
                            <Link href="/my-trips">
                            <button
                                className="text-primary mb-2 text-sm font-semibold"
                            >
                                Minhas Viagens
                            </button>
                            </Link>

                            <button
                                onClick={handleLogoutClick}
                                className="text-primary text-sm font-semibold"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
