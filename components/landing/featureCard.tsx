export default function FeatureCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-10 max-w-sm text-center">
            <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}