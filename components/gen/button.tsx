import Link from "next/link"

export default function Button({ text, hLink }: { text: string, hLink: string }) {
    return (
        <Link href={hLink} className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            {text}
        </Link>
    )   
}