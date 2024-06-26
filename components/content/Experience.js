import React from 'react';
import Tabs from '../Tabs';


const Experience = () => {
    return <section id="experience" className='pt-15 mb-4'>
        <div className="flex w-full" >
            <div className='ml-auto mr-0'>
                <h1>Experiences</h1>
            </div>
        </div>
        <div style={{'overflow': 'auto'}}>    
            <Tabs></Tabs>
        </div>
    </section>
}

export default Experience;