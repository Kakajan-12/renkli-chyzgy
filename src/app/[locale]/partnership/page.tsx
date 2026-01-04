'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PartnershipPage() {
    const t = useTranslations('Partnership');

    return (
        <div className="py-20 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="p-6">
                    <Image src="/partnership/partnership.png" alt="Partnership"
                           width={900} height={900} className="w-full"/>
                </div>
                <div className="space-y-4">
                    <p className="text-3xl sm:text-4xl md:text-5xl">{t('title')}</p>
                    <p className="text-md md:text-lg">{t('description')}</p>
                </div>
            </div>
        </div>

    );
}