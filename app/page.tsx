import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col darkbg items-center grad0">
            <div className="flex justify-center items-center gap-16 w-full pt-20 pb-20">
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
                    <Image src="/headshot.jpg" alt="Logan Ragland Headshot" width={500} height={500} className="rounded-full w-52 h-52 object-cover"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-16 grad1 w-full pt-20 pb-20">
                <div className="flex flex-row text-center pageheader">Skills</div>
                <div className="flex flex-row text-center justify-around w-full pl-40 pr-40">
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <Image src="/cpplogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
                        <p className='flex w-full justify-items-start items-center p-10'>C++ is my main language. I have taken multiple courses which utilize cpp, and I work with it whenever I can</p>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>{/*card*/}
                        <p className='flex w-full justify-items-start items-center p-10'>C++ is my main language. I have taken multiple courses which utilize cpp, and I work with it whenever I can</p>
                        <Image src="/pythonlogo.png" alt="Logan Ragland Headshot" width={250} height={250} className="w-28 object-cover"/>
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
