import { Button } from "../components/ui/button"

export default function GetStarted() {
  return (
    <div className="w-full h-[300px] bg-linear-to-r from-indigo-700 to-indigo-950 
                    flex flex-col items-center justify-center gap-y-10">
         <h1 className='lg:text-5xl text-3xl text-white font-bolder '>Boost your links today</h1>
         <Button className="bg-[#00e7d5] text-white text-md rounded-4xl p-6">Get Started</Button>
    </div>
  )
}
