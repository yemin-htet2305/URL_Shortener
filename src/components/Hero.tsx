import hero from '../assets/illustration-working.svg'
import { Button } from './ui/button'


export default function 
() {
  return (
    <div className='w-full min-h-[400px] p-5 flex flex-col md:flex-row m-5 mb-5 lg:mb-10'>
        <div className="flex flex-col md:items-start items-center justify-end mt-5 gap-5 flex-1 order-2 md:order-1 text-center md:text-left">
            <p >
                <span className='font-bold text-7xl block max-w-lg mb-2 text-center md:text-left'>More than just shorter links</span>
                <span className='text-lg block max-w-md mt-2 text-center md:text-left'>
                    Build your brand's recognition and 
                    get detailed insights on how your links are performing.</span>
            </p>
            <Button className="p-7 bg-[#00e7d5] rounded-4xl text-white hover:cursor-pointer">Getting Started</Button>
        </div>
        <div className='flex-1 flex justify-center md:justify-end order-1 md:order-2'>
             <img src={hero} alt="" className="w-full max-w-lg" />
        </div>

    </div>
  )
}
