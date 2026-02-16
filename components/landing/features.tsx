import FeatureCard from "./featureCard";

export default function Features() { 
    return (
        <div id="features" style={{height: "100%"}} className="bg-slate-100 flex flex-col justify-center items-center gap-5 p-10">
            <h1 className="font-mono text-4xl font-bold text-black mb-2">Features</h1>
            <div className="flex flex-row justify-center items-center gap-10">
                <FeatureCard title="Task Management" description="Organize your tasks with ease using our intuitive task management system." />
                <FeatureCard title="In-App Utilities" description="Enjoy a suite of useful utilities built right into the app." />
                <FeatureCard title="Focus Mode" description="Stay focused on your work with our dedicated focus mode." />
            </div>
        </div>
    )
}