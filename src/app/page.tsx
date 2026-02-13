import Button from "../../components/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 text-white">Welcome to Focus Forge</h1>
      <div className="flex flex-row align-center justify-center gap-5">
        <Button text="+ Create New Task" />
        <Button text="+ Create New Group" />
      </div>
    </div>
  )
}