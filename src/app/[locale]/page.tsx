'use client';
import Main from "@/components/Main/Main";
import MainAbout from "@/components/Main/About";

export default function HomePage() {

    return (
        <div className="pt-20 sm:pt-16">
            <Main/>
            <MainAbout/>
        </div>
    );
}