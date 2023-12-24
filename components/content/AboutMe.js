import Image from 'next/image'
import React from 'react';

const AboutMe = () => {
    return <>
        <h1>
            Hey, I'm Michel Marini!
        </h1>
        <Image
        src="/logo.png"
        width={350}
        height={500}
        alt="Picture of the author"
        />
    </>
}

export default AboutMe;

