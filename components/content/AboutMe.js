import React from 'react';
import Image from 'next/image'

const AboutMe = () => {
    return <div id="aboutMe" className="text-white h-screen justify-center p-10">
        <h1>About Me</h1>
        <div class="grid grid-cols-2 gap-2">
            <div>
                I'm a passionate software engineer based in the vibrant tech hub of Sophia Antipolis, France. With a solid foundation from my master's degree and three years of professional experience, I specialize in the intricate world of back-end development. My commitment to crafting robust, efficient solutions is matched only by my enthusiasm for staying at the forefront of evolving technologies. Let's build the future together!
            </div>
            <div>
            <Image
                src="/logo.png"
                width={300}
                height={500}
                alt="Picture of the author"
              />
            </div>
        </div>
    </div>
}

export default AboutMe;

