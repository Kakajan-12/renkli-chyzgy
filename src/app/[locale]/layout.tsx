import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { routing, type Locale } from "@/i18n/routing";
import { notFound } from 'next/navigation';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const resolvedParams = await params;
    const paramLocale = resolvedParams.locale;

    const locale: Locale = routing.locales.includes(paramLocale as Locale)
        ? (paramLocale as Locale)
        : routing.defaultLocale;

    if (!routing.locales.includes(paramLocale as Locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="font-at">
                <Header />
                {children}
                <Footer />
            </div>
        </NextIntlClientProvider>
    );
}