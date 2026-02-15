import Button from '../gen/button';

export default function Hero() {
    return (
        <div style={{height: "100vh"}} className="flex flex-col justify-center items-center gap-5">
            <div className="text-center height-screen flex flex-col justify-center items-center">
                <h1 className="font-mono text-5xl font-bold text-black mb-2">Focus Forge</h1>
                <h4 className="font-mono text-2xl text-black font-bold">Your productivity companion</h4>
            </div>
            
            <div className='flex flex-row justify-center items-center gap-5'>
                <Button text="Get Started" hLink='#'/>
                <Button text="Explore" hLink='#features'/>
            </div>
        </div>
    )
}