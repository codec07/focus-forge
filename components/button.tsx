export default function Button({ text }: {text: string}) {
    return (
        <button className="px-4 py-3 bg-white hover:bg-gray-200 hover:cursor-pointer text-black text-center rounded-lg mt-5">
            {text}
        </button>
    )   
}