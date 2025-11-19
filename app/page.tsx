import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col darkbg items-center grad0">
            <div className='flex justify-around items-start gap-16 w-full min-h-screen pt-5 pb-20'>
                <div className='flex flex-col w-5/6 m-10 gap-1'>
                    <p className='font-serif text-[50px] font-bold'>Logan Ragland</p>
                    <p className='font-serif text-[30px] italic'>Computer Scientist</p>
                    <p className='font-serif text-[15px]'>"Technology should be for the benefit of us all.</p> 
                    <p className='font-serif text-[15px]'>I aim to build impactful programs that create positive change in the world.</p>
                    <p className='font-serif text-[15px]'>I'm driven to find solutions that are sustainable and purposeful."</p>
                </div>
                <div className='flex flex-col justify-start w-1/6'>
                    <p>languages</p>
                    <p>certifications</p>
                    <p>projects</p>
                    <p>photography</p>
                    <p>associations</p>
                </div>
            </div>
            {/* <div className="flex justify-center items-center gap-16 w-full pt-20 pb-20">
                <div className="flex flex-col text-center">
                    <div className="pageheader">Hey, I'm Logan Ragland!</div>
                    
                    <div className="flex flex-row justify-center items-center">
                        <span className="redtext"><a href='#here'>Computer Scientist</a></span>
                        <span className='mx-4'>|</span>
                        <span className="greentext"><a href='#here'>Environmentalist</a></span>
                        <span className='mx-4'>|</span>
                        <span className="skybluetext"><a href='#here'>Photographer</a></span>
                    </div>
                </div>
                <div>
                    <Image src="/headshot.jpg" alt="Logan Ragland Headshot" width={500} height={500} className="rounded-full w-52 h-52 object-cover border-4 border-[var(--burgendy)]"/>
                </div>
            </div> */}
            <div className="flex flex-col justify-center items-center gap-16 grad1 w-full pt-20 pb-20">
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <div>
                            <p className='text-2xl font-bold underline'>Python</p>
                            <p className='flex w-full justify-items-start items-center p-10 pt-2'>My primary language for simple side projects. Used to create applications that use the OpenAI Plug In</p>
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
                        <Image src="/nodelogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <p className='flex w-full justify-items-start items-center p-10'>C++ is my main language. I have taken multiple courses which utilize cpp, and I work with it whenever I can</p>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <p className='flex w-full justify-items-start items-center p-10'>C++ is my main language. I have taken multiple courses which utilize cpp, and I work with it whenever I can</p>
                        <Image src="/reactlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>

                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/phplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <p className='flex w-full justify-items-start items-center p-10'>C++ is my main language. I have taken multiple courses which utilize cpp, and I work with it whenever I can</p>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <p className='flex w-full justify-items-start items-center p-10'>C++ is my main language. I have taken multiple courses which utilize cpp, and I work with it whenever I can</p>
                        <Image src="/sqllogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                    </div>
                </div>
            </div>
            
            
        </main>
    );
}
