import Button from "../gen/button"

export default function CTA() {
    return (
        <div className="bg-slate-900 py-10 px-5 flex flex-col items-center justify-center gap-7">
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-white font-sans text-4xl">Ready to Forge your Focus?</h1>
                <p className="text-gray-300 text-xl font-sans">Let's start by creating an account</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full">
                <input type="mail" placeholder="Email" name="Email" id="ctaMail" className="bg-slate-300 backdrop-blur-md text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-1/3 max" />
                <Button text="Sign In" hLink="#"/>
            </div>
        </div>
    )
}