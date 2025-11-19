import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import Particles from './ui/particles';

export default function Page() {
    return (
        <main className="flex relative min-h-screen flex-col darkbg items-center grad0">
            <Particles 
                    particleCount={1200}
                    particleColors={['#ffffff']} // Set your dot colors
                    speed={0.1}
                    alphaParticles={true}
                    cameraDistance={50}
                    />
            <div className='flex justify-around items-start gap-16 w-full min-h-screen pt-5 pb-20'>
                <div className='flex flex-col w-5/6 m-10 gap-1 z-1'>
                    <p className='font-serif text-[50px] font-bold'>Logan Ragland</p>
                    <p className='font-serif text-[30px] italic'>Computer Scientist</p>
                    <p className='font-serif text-[15px]'>"Technology should be created and utilized for the greater good.</p> 
                    <p className='font-serif text-[15px]'>Merging my skills as a developer with my passion for the environment,</p>
                    <p className='font-serif text-[15px]'>I aim to build programs that create positive change in the world"</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-[3rem] w-1/6 min-h-screen gap-12 text-slate-400'>
                    <a href="#skills" className='font-serif text-[20px]'>skills</a>
                    <a href="#awards" className='font-serif text-[20px]'>awards</a>
                    <a href="#projects" className='font-serif text-[20px]'>projects</a>
                    <a href="#associations" className='font-serif text-[20px]'>associations</a>
                    <a href="#photography" className='font-serif text-[20px]'>photgraphy</a>
                </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col justify-center items-center gap-16 grad1 w-full pt-40 pb-40" id='skills'>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for quick side projects. Python allowed me to connect to the OpenAI API and send queries to ChatGPT from inside my programs. While I often prefer statically typed skills for their structure and stronger performance, Pythons unrivaled ability to connect to APIs, plug ins, and more make it undoubtably the best option to write many programs.</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level, high-performance programs. My c++ courses have deepened my understanding of memory management, pointers, and advanced data structures (like linked lists, queues, stacks, etc). While I explicitly learned how to use these in c++, the ideas transfer to my other known skills very well.</p>
                        </div>
                        <Image src="/cpplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>

                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/jslogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>JavaScript</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>The foundational language for all my web development. While I often use frameworks, my knowledge of core JavaScript is essential for understanding how to utilize the strengths of said frameworks.</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>React</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My go-to library for building clean, and more importantly, component-based UX/UI. The stars in the background, for example, are a component I downloaded and easily applied to this page. This website was built from scratch using React and NextJS (as well as Tailwind!). Having used raw HTML/CSS/JS to build a website before, the benefits of using this framework are very noticable.</p>
                        </div>
                        <Image src="/reactlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/phplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>PHP</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>While somewhat outdated, the first full stack website I created utilized php as the main logic language. I used PHP to query/adjust a database, check input using regex, and maintain security. PHP is also where I was first introduced to key-value pairs, which quickly became one of my most used data structures.</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>SQL</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>SQL is the main language I have used for interacting with a database. Using SQL, and a MySQL database, I learned how to construct a database to fit my needs, understood how to use relationships (like One-to-One connections, One-to-Many Connections, etc.), and applied these skills to a full stack website.</p>
                        </div>
                        <Image src="/sqllogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
            </div>

            {/* Awards */}
            <div className="flex flex-col justify-center items-center gap-16 grad2 w-full pt-40 pb-40" id='awards'>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/cpplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>

                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/jslogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/nodelogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/phplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/sqllogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className="flex flex-col justify-center items-center gap-16 grad3 w-full pt-40 pb-40" id='projects'>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/cpplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>

                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/jslogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/nodelogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/phplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/sqllogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
            </div>

            {/* Associations */}
            <div className="flex flex-col justify-center items-center gap-16 grad4 w-full pt-40 pb-40" id='associations'>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/cpplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>

                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/jslogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/nodelogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/phplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/sqllogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
            </div>

            {/* Photography */}
            <div className="flex flex-col justify-center items-center gap-16 grad5 w-full pt-40 pb-40" id='photography'>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/cpplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>

                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/jslogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/nodelogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/phplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI plug in</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <div>
                            <p className='text-2xl font-bold underline'>C++</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My main language for low level programs, applications that need high-performance, and programs that use advanced data structures.</p>
                        </div>
                        <Image src="/sqllogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
            </div>
            
            
        </main>
    );
}
