import Particles from '../assets/ui/particles.tsx';
import '../assets/style/global.css'

function Index() {
    return (
        <>
            <main className="primary_background relative h-screen overflow-hidden">
                <Particles 
                        particleCount={1200}
                        particleColors={['#dbdf00']}
                        speed={0.1}
                        alphaParticles={true}
                        cameraDistance={50}
                        />
                {/* Header */}
                <div className='flex'>
                    <div className='flex flex-col w-5/6 m-10  z-1'>
                        <p className='font-serif text-[50px] font-bold'>Logan Ragland</p>
                        <p className='font-serif text-[30px] italic'>Computer Science Undergrad at MSU</p>
                        <p className='font-serif text-[15px]'>"Hi! I'm Logan Ragland. This is my website where I keep track all my random</p>
                        <p className='font-serif text-[15px]'>projects and photos. I hope you find them interesting!</p>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-[3rem] w-1/6 min-h-screen text-slate-400'>
                        <a href="breakpointcalculator.html" className='font-serif text-[20px] link'>Diablo II Breakpoint Calculator</a>
                        <a href="#certifications" className='font-serif text-[20px] link'>certifications</a>
                        <a href="#projects" className='font-serif text-[20px] link'>projects</a>
                        <a href="photography.html" className='font-serif text-[20px] link'>photgraphy</a>
                    </div>
                </div>
            </main> 
        </>
    )
}

export default Index
