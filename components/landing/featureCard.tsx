export default function FeatureCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-white rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-10 max-w-sm text-center hover:shadow-[0px_48px_100px_0px_rgba(17,12,46,0.15)] transition-shadow duration-200 hover:scale-101 duration-200">
            <h3 className="text-xl font-bold mb-2 text-blue-800 font-sans">{title}</h3>
            <p className="text-gray-600 font-sans">{description}</p>
        </div>
    )
}