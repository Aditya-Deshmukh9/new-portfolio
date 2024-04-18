import Image from 'next/image';
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Link from 'next/link';

function Banner() {
    return (
        <>
            <section
                id="Home"
                className="dark:bg-gray-900 dark:text-white w-full h-full flex justify-center scroll-smooth"
            >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 sm:mx-14 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-20">
                        <div className="h-auto select-none flex justify-center  overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image alt="logo" height={320} width={400} src="/logo.png" />
                        </div>

                        <div className="lg:py-24 ml-8">
                            <span className="font-bold">Hi&apos; I am</span>
                            <TextGenerateEffect className="text-3xl font-bold lg:pb-2 uppercase font-secondary sm:text-5xl" words={`Aditya Deshmukh`} />
                            <span className="text-3xl font-bold uppercase font-tertiary">
                                I am a{" "}
                            </span>
                            <TypeAnimation
                                sequence={[
                                    "Developer",
                                    2000,
                                    "Designer",
                                    2000,
                                    "Blogger",
                                    2000,
                                ]}
                                speed={60}
                                className="text-indigo-600 text-3xl font-bold uppercase"
                                wrapper="span"
                                repeat={Infinity}
                            />

                            <TextGenerateEffect words={`My future goal is to create exitsing projects that use for Industry Development`} />

                            <Link
                                href="https://github.com/Aditya-Deshmukh9"
                                className="mt-8 inline-block rounded bg-indigo-700 text-white px-8 py-2 text-bg font-medium  transition hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-900 cursor-pointer "
                                target="_blank"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                </div>
            </section></>

    )
}

export default Banner