export default function Signup() {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-white">
            <div className="bg-blue-500 px-10 py-8 rounded-lg shadow-lg w-1/3">
                <h2 className="text-3xl font-bold font-sans mb-6 text-center text-white">Create an Account</h2>
                <form action="#" className="flex flex-col gap-5">
                    <input type="text" name="Username" id="username" placeholder="Username" className="w-full px-4 py-2 mb-4 rounded-lg focus:ring-3 focus:ring-white bg-blue-500" />
                    <input type="email" name="Email" id="email" placeholder="Email Address" className="w-full px-4 py-2 mb-4 rounded-lg focus:ring-3 focus:ring-white bg-blue-500" />
                    <input type="password" name="Password" id="password" placeholder="Password" className="w-full px-4 py-2 mb-4 rounded-lg focus:ring-3 focus:ring-white bg-blue-500" />
                </form>
            </div>
        </div>
    )
}