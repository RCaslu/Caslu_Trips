import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { NextAuthProvider } from '@/providers/auth';
import Header from '../components/Header';
import Footer from '@/components/footer';
import ToastProvider from '@/providers/toast';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'SkyCode Trips',
    description: 'Sistema de reserva de viagens',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <NextAuthProvider>
                    <ToastProvider>
                        <Header />
                        {children}
                        <Footer />
                    </ToastProvider>
                </NextAuthProvider>
            </body>
        </html>
    );
}
