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
            {/* Header */}
            <div className='flex justify-around items-start gap-16 w-full min-h-screen pt-5 pb-20'>
                <div className='flex flex-col w-5/6 m-10 gap-1 z-1'>
                    <p className='font-serif text-[50px] font-bold'>Logan Ragland</p>
                    <p className='font-serif text-[30px] italic'>Computer Scientist</p>
                    <p className='font-serif text-[15px]'>"Technology should be created and utilized for the greater good.</p> 
                    <p className='font-serif text-[15px]'>Merging my skills as a developer with my passion for the environment,</p>
                    <p className='font-serif text-[15px]'>I aim to build programs that create positive change in the world"</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-[3rem] w-1/6 min-h-screen text-slate-400'>
                    <a href="#skills" className='font-serif text-[20px] sectionlink'>skills</a>
                    <a href="#certifications" className='font-serif text-[20px] sectionlink'>certifications</a>
                    <a href="#projects" className='font-serif text-[20px] sectionlink'>projects</a>
                    <a href="#photography" className='font-serif text-[20px] sectionlink'>photgraphy</a>
                </div>
            </div>

            {/* skills */}
            <div className="flex flex-col justify-center items-center gap-16 grad1 w-full pt-40 pb-40" id='skills'>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for quick side certifications. Python allowed me to connect to the OpenAI API and send queries to ChatGPT from inside my programs. While I often prefer statically typed skills for their structure and stronger performance, Pythons unrivaled ability to connect to APIs, plug ins, and more make it undoubtably the best option to write many programs.</p>
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

            {/* certifications */}
            <div className="flex flex-col justify-center items-center gap-16 grad2 w-full pt-40 pb-40" id='certifications'>
                <p className='text-2xl font-bold underline italic'>Certifications</p>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-start pr-20 items-center w-full'>{/*card*/}
                        <div className='flex flex-col justify-start'>
                            <p className='p-10 pb-5 pt-5 text-left italic'>Information Technology Specialist - HTML and CSS</p>
                            <p className='p-10 pb-5 pt-5 text-left italic'>Information Technology Specialist - Javascript</p>
                            <p className='p-10 pb-5 pt-5 text-left italic'>Information Technology Specialist - Software Development</p>
                        </div>
                        <Image src="/certiport.png" alt="Certiport Logo" width={450} height={100} className="object-cover z-10"/>
                    </div>
                    <div className='flex flex-row justify-start pl-20 items-center w-full'>{/*card*/}
                        <Image src="/dacclogo.png" alt="Certiport Logo" width={450} height={100} className="object-cover z-10"/>
                        <div className='flex flex-col justify-start'>
                            <p className='p-10 pb-5 pt-5 text-left italic'>App Development - Database Application Development</p>
                            <p className='p-10 pb-5 pt-5 text-left italic'>App Development - Computer & Mobile Applications</p>
                            <p className='p-10 pb-5 pt-5 text-left italic'>App Development - Programming</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* projects */}
            <div className="flex flex-col justify-center items-center gap-4 grad3 w-full pt-40 pb-40" id='projects'>
                <p className='text-2xl font-bold underline italic'>Business Professionals of America | Web Application Team | 3rd Nationally (2023)</p>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-start items-center w-full'>{/*card*/}
                        <Image src="/bpa.png" alt="Logan Ragland Web App Award" width={750} height={750} className="w-54 object-cover z-10"/>
                        <div className='flex flex-col justify-start'>
                            <p className='p-10 pt-2 text-left'>
                                I lead a team for the Business Professionals of America{" "}
                                <a href="https://bpa.org/students/compete/competitive-event-listing/" className='font-bold underline'>Web Application Team (V04)</a>. 
                                For this competition, we were tasked with creating a database-driven Website with server-side functionality. 
                                We chose to make an "all in one" educational website, similar to Canvas, Schoology, and Powerschool. 
                                This required us to create a complex database, with each page displaying different information based on authorization levels. 
                                Teachers could upload content, create and join courses, create lessons, quizzes, grade assignments, and much more. 
                                Students, on the other hand, could only join classes, not create them. They could complete assignments, watch videos, see their grades, and more.
                                Admins could delete accounts, change authorization level, see all responses, and perform similar backend jobs.
                                All accounts could change their information, profile picture, username, password, what classes they were in, etc.
                                If you want to learn more about this site, we made a {" "}
                                <a href="https://youtu.be/Tp6o5Ow78bU" className='font-bold underline'>walk through video</a> that shows off the capabilities of our website.  
                            </p>
                        </div>
                    </div>
                </div>
                <p className='text-2xl font-bold underline italic mt-20'>Business Professionals of America | Web Design Team | National Competitor (2022)</p>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-start items-center w-full'>{/*card*/}
                        <Image src="/bpadesign.jpg" alt="Web Design Group Photo" width={750} height={750} className="w-54 object-cover z-10"/>
                        <div className='flex flex-col justify-start'>
                            <p className='p-10 pt-2 text-left'>
                                I was a national competitor for {" "}
                                <a href="https://bpa.org/students/compete/competitive-event-listing/" className='font-bold underline'>Web Design (435) Competition</a>. 
                                For this event, we were tasked with creating a purely front end website.
                                This project was our first dive into the world of web languages. We coded this website only using raw HTML, CSS, and JavaScript. 
                                As our first major project, this was a significant learning experience. 
                                We quickly realized how difficult creating websites without a library was, which gave us a new found appreciation for why modern tools like Tailwind, React, and Bootstrap exist.   
                                Although this project had a significant number of issues that, due to our inexperience, we were unable to see before it was too late, we learned from our errors. 
                                We improved on many of the shortcomings of this project to create a far more industry-acceptable program the following year, in the Web Application Competition mentioned prior. 
                                Working on this project was a strong introduction to programming in a team and managing a development workflow. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* photos */}
            <div className="flex flex-col justify-center items-center gap-4 grad4 w-full pt-40 pb-40" id='photography'>
                <p className='text-[40px] font-bold italic'>I also love photography! Here are some of my favorite pictures I've taken:</p>
                
                <div className="w-full max-w px-48 columns-3 space-x-2 space-y-2">
                    <Image src="/vogue.jpg" alt="Vogue Style" width={1440} height={1920} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/birds.jpg" alt="Birds" width={1440} height={960} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />
                    
                    <Image src="/birdhouse-min.jpg" alt="Birdhouse" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />
                    
                    <Image src="/ducks-min.jpeg" alt="Ducks" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />
                    
                    <Image src="/twins-min.jpg" alt="Twins" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/liam-min.jpg" alt="Liam" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />
                    
                    <Image src="/bus-min.jpg" alt="Bus" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/mountains-min.png" alt="Mountains" width={4032} height={3024} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />
                   
                    <Image src="/max-min.jpg" alt="Max" width={3521} height={4454} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/vegas-min.png" alt="Vegas" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/grandcanyon-min.png" alt="Grand Canyon" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/grasshopper-min.jpeg" alt="Grasshopper" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />

                    <Image src="/waterfall-min.png" alt="Waterfall" width={6000} height={4000} className="w-full h-auto object-cover z-10 transition-transform hover:scale-110" />
                    
                </div>
            </div>
        </main>
    );
}

<div className="flex flex-col justify-center items-center gap-4 grad4 w-full pt-40 pb-40" id='photography'>
    <p className='text-[30px]'>I also love photography! Here are some of my favorite pictures I've taken:</p>
    
    {/* 1. This container uses 'flex' but NO 'flex-wrap'.
      2. We remove 'gap-10' and add a big negative 'space-x-'.
         Try changing '-space-x-48' to '-space-x-64' or '-space-x-32'.
    */}
    <div className="flex flex-row justify-center w-full max-w-6xl px-4 -space-x-48 py-20">

        {/* 3. We give each image 'relative' positioning and a 'z-index'.
          4. We add 'rotate-' and 'hover:' effects for the "stack"
        */}
        <Image 
            src="/vogue.jpg" 
            alt="Vogue style photo" 
            width={400} 
            height={400} 
            className="object-cover relative z-10 -rotate-12 transition-transform hover:scale-110 hover:z-50 hover:rotate-0"
        />
        
        <Image 
            src="/birds.jpg" 
            alt="Birds photo" 
            width={400} 
            height={400} 
            className="object-cover relative z-20 rotate-3 transition-transform hover:scale-110 hover:z-50 hover:rotate-0"
        />
        
        <Image 
            src="/twins.jpg" 
            alt="Twins photo" 
            width={400} 
            height={400} 
            className="object-cover relative z-30 -rotate-6 transition-transform hover:scale-110 hover:z-50 hover:rotate-0"
        />

        <Image 
            src="/liam.jpg" 
            alt="Liam photo" 
            width={400} 
            height={400} 
            className="object-cover relative z-20 rotate-12 transition-transform hover:scale-110 hover:z-50 hover:rotate-0"
        />
        
        <Image 
            src="/ducks.jpeg" 
            alt="Ducks photo" 
            width={400} 
            height={400} 
            className="object-cover relative z-10 -rotate-3 transition-transform hover:scale-110 hover:z-50 hover:rotate-0"
        />
    </div>
</div>
