import { useState } from 'react';
import Image from 'next/image'

const AboutMe = () => {

    const [isHovered, setIsHovered] = useState(false);

    return <section id="aboutMe">
        <div>
            <h1 className="w-full">About Me</h1>
            <div class="grid grid-cols-3 gap-2">
                <div class="col-span-2">
                    I'm a passionate software engineer based in the vibrant tech hub of Sophia Antipolis, France. With a solid foundation from my master's degree and three years of professional experience, I specialize in the intricate world of back-end development. My commitment to crafting robust, efficient solutions is matched only by my enthusiasm for staying at the forefront of evolving technologies. Let's build the future together!
                </div>
                <div class="col-start-3">
                    <Image
                        className={`hover:scale-105 hover:text-white transition duration-300 ${isHovered ? 'filter-none' : 'grayscale'}`}
                        src="/pp.jpeg"
                        width={300}
                        height={500}
                        alt="Picture of the author"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </div>
        </div>
    </section>
}

export default AboutMe;

