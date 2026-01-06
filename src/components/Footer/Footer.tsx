'use client'

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Address {
    id: number;
    address: string;
}

interface Mail {
    id: number;
    mail: string;
}

interface Phone {
    id: number;
    number: string;
}

interface SocialLink {
    id: number;
    text: string;
    url: string;
}


export default function Footer() {
    const t = useTranslations('Footer');

    const [address, setAddress] = useState<Address | null>(null);
    const [mails, setMails] = useState<Mail[]>([]);
    const [phones, setPhones] = useState<Phone[]>([]);
    const [links, setLinks] = useState<SocialLink[]>([]);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const [
                    addressRes,
                    mailsRes,
                    phonesRes,
                    linksRes,
                ] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-address`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-mails`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-numbers`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/links`),
                ]);

                setAddress(addressRes.data[0]); // 👈 массив → первый элемент
                setMails(mailsRes.data);
                setPhones(phonesRes.data);
                setLinks(linksRes.data);
            } catch (err) {
                console.error('Error loading footer data', err);
            }
        };

        fetchFooterData();
    }, []);


    return (
        <footer className="py-12 border-t">
            <div className="container mx-auto px-4">
                <div className="hidden md:block">
                    <div className="flex justify-between gap-8">
                        <div className="max-w-xl">
                            <div className="space-y-2">
                                {address && (
                                    <div className="mb-4">
                                        <p>{t('address')}:</p>
                                        <div
                                            className="text-md"
                                            dangerouslySetInnerHTML={{ __html: address.address }}
                                        />
                                    </div>
                                )}

                                {phones.map((p) => (
                                    <p key={p.id}>
                                        {t('phone')}: {p.number}
                                    </p>
                                ))}

                                {mails.map((m) => (
                                    <p key={m.id}>
                                        {t('email')}: {m.mail}
                                    </p>
                                ))}

                            </div>
                        </div>

                        <div className="">
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" className="">
                                        {t('about')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/partnership" className="">
                                        {t('partnership')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline capitalize"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    <div className="col-span-3 text-right">
                        <p className="text-sm">
                            2026 Renkli Chyzgy
                        </p>
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="space-y-4">
                                <div>
                                    <p>{t('address')}:</p>
                                    <p className=""> Turkmenbasy sayoly, Olimpiya otel, Ashgabat Email:
                                        renklicyzgy@gmail.com Telephone: +993 (62) 00 00 00</p>
                                </div>
                                <p>{t('phone')}: +99364572209</p>
                                <p>{t('email')}: example@mail.com</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/about"
                                              className="text-sm">
                                            {t('about')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/partnership"
                                              className="text-sm">
                                            {t('partnership')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/jobs"
                                              className="text-sm">
                                            {t('job')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm"
                                        >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm"
                                        >
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-6">
                            <p className="text-sm text-center">
                                {new Date().getFullYear()} Renkli Chyzgy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}