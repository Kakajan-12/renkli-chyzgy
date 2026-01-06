'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('Header');
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // const languages = ["tk", "ru", "en"];

    const handleLanguageChange = (newLocale: string) => {
        const newPathname = `/${newLocale}${pathname.replace(`/${locale}`, '') || ''}`;
        router.push(newPathname);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="main-bg-color fixed w-full z-20">
            <div className="container mx-auto px-4">
                <div className="hidden md:flex justify-between items-center py-4">
                    <Link href={`/${locale}`}>
                        <Image
                            src="/logo.png"
                            width={25}
                            height={25}
                            alt="logo"
                            className="cursor-pointer"
                        />
                    </Link>

                    <div className="flex items-center space-x-6">
                        <Link
                            href={`/${locale}/projects`}
                            className="font-medium hover:opacity-80 transition text-white"
                        >
                            {t('projects')}
                        </Link>
                        <Link
                            href={`/${locale}/about`}
                            className="font-medium hover:opacity-80 transition text-white"
                        >
                            {t('about')}
                        </Link>

                        {/*<div className="flex items-center space-x-2">*/}
                        {/*    {languages.map((lang) => (*/}
                        {/*        <button*/}
                        {/*            key={lang}*/}
                        {/*            onClick={() => handleLanguageChange(lang)}*/}
                        {/*            className={`text-sm font-medium hover:opacity-80 transition uppercase px-2 py-1 rounded text-white ${*/}
                        {/*                locale === lang*/}
                        {/*                    ? "bg-white/20 font-bold"*/}
                        {/*                    : ""*/}
                        {/*            }`}*/}
                        {/*        >*/}
                        {/*            {lang}*/}
                        {/*        </button>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="flex justify-between items-center py-4">
                        <Link href={`/${locale}`}>
                            <Image
                                src="/logo.png"
                                width={25}
                                height={25}
                                alt="logo"
                                className="cursor-pointer"
                            />
                        </Link>

                        <button
                            ref={buttonRef}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 focus:outline-none relative z-50 active:bg-white/10 rounded-md transition"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <div className="relative w-6 h-5 text-white">
                                <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                                <span className={`absolute w-6 h-0.5 bg-current top-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
                            </div>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div
                            ref={menuRef}
                            className="fixed h-full inset-x-0 top-[73px] bg-inherit z-40 p-4 border-gray-700 shadow-lg main-bg-color"
                            style={{ backdropFilter: 'blur(10px)' }}
                        >
                            <div className="flex flex-col items-end space-y-3">
                                <Link
                                    href={`/${locale}/projects`}
                                    className="font-medium py-3 px-4 transition rounded active:bg-white/20 text-center text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t('projects')}
                                </Link>

                                <Link
                                    href={`/${locale}/about`}
                                    className="font-medium py-3 px-4 transition rounded active:bg-white/20 text-center text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t('about')}
                                </Link>

                                {/*<div className="pt-4 border-gray-700">*/}
                                {/*    <div className="flex justify-center space-x-2">*/}
                                {/*        {languages.map((lang) => (*/}
                                {/*            <button*/}
                                {/*                key={lang}*/}
                                {/*                onClick={() => handleLanguageChange(lang)}*/}
                                {/*                className={`text-sm font-medium hover:opacity-80 transition uppercase px-2 py-2 active:scale-95 text-white ${*/}
                                {/*                    locale === lang*/}
                                {/*                        ? "font-bold"*/}
                                {/*                        : ""*/}
                                {/*                }`}*/}
                                {/*            >*/}
                                {/*                {lang}*/}
                                {/*            </button>*/}
                                {/*        ))}*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}