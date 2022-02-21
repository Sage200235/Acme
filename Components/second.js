import React from 'react';
import './second.css'


const Second = () => {
    return(
        <>
           <section className='container'>
                <div className='web'>
                    <h1>Web & Application Development</h1>
                    <div className='webdown'>
                        <div className='left'>
                            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing <br/>
                             elit. Saepe sint eligendi possimus? Unde officiis <br/>
                              magnam laborum ipsa distinctio odio, vero dolores</p>
                        </div>
                        <div className='right'>
                            <p className='lorem'>dicta aliquam aperiam repellendus. Perferendis <br/> 
                            officiis deserunt velit voluptas nobis sequi animi <br/>
                             totam, accusantium, ex eius quia, natus quo?</p>
                        </div>
                    </div>
                </div>
                <div className='brownbg'>
                    <div className='tech'>
                        <div className='webpic'></div>
                        <h1>Web Development</h1>
                        <p>Lorem ipsum dolor sit amet<br/>
                        consectetur adipisicing elit.<br/>
                        Nostrum culpa neque quo<br/>
                        eum et quasi velit<br/>
                        voluptatum cum maiores<br/>
                        exercitationem.</p>
                    </div>
                    <div className='tech'>
                         <div className='mobilepic'></div>
                         <h1>Mobile Applications</h1>
                         <p>Lorem ipsum dolor sit amet<br/>
                         consectetur adipisicing elit.<br/>
                         Nostrum culpa neque quo<br/>
                         eum et quasi velit<br/>
                         voluptatum cum maiores<br/>
                         exercitationem.</p>
                    </div>
                    <div className='tech'>
                         <div className='techpic'></div>
                         <h1>Tech Marketing</h1>
                         <p>Lorem ipsum dolor sit amet<br/>
                         consectetur adipisicing elit.<br/>
                         Nostrum culpa neque quo<br/>
                         eum et quasi velit<br/>
                         voluptatum cum maiores<br/>
                         exercitationem.</p>
                    </div>
                </div>
           </section>
        </>
    )
}

export default Second