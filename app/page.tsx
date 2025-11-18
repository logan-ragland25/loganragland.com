import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6 darkbg items-center">
            <div className="flex items-center gap-16">
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
            
        </main>
    );
}
