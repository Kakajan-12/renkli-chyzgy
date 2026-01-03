import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const AT = localFont({
    src: [
        {
            path: '../fonts/ATLang-Regular.Trial.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/ATLang-Medium.Trial.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/ATLang-Bold.Trial.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-at',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Renkli Chyzgy",
    icons: {
        icon: [{ url: "/logo.png", type: "image/svg+xml" }],
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={AT.variable}>
        <body>{children}</body>
        </html>
    );
}