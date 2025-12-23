import brand from "../assets/icon-brand-recognition.svg"
import detail from "../assets/icon-detailed-records.svg"
import customize from "../assets/icon-fully-customizable.svg"

export default function 
() {
  return (
    <div className='w-full lg:h-[700px] h-full bg-gray-200 relative p-5 '>
        <div className="article w-full lg:w-1/3 h-1/3  lg:absolute lg:right-1/3 lg:top-[25px] flex items-center
        justify-center mb-15 lg:mb-0">
        <p className="text-center">
            <span className='font-bold text-5xl block max-w-[500px] mb-3 text-center md:text-left'>Advanaced Statistics</span>
            <span className='text-lg font-light block max-w-[400px] mt-3 text-center text-gray-700'>
                Track how your link are performing across with our advaneced statistics dashboard</span>
        </p>
        </div>
        <div className="card-one w-4/5 lg:w-1/5 h-[280px] bg-white lg:absolute  left-[250px] top-[270px] rounded-2xl m-5 ml-10 lg:ml-0 mb-15 lg:mb-2">
            <div className="w-full h-full relative p-5">
                <div className="w-[70px] h-[70px] bg-violet-900 rounded-full items-center
                 justify-center flex p-4 absolute lg:left-[20px] left-3/8 top-[-40px]">
                    <img src={brand} alt="" className="object-cover" />
                </div>
                <p className="absolute text-2xl top-[50px] font-bold pl-3 pr-3 text-gray-500">Brand Reconginition</p>
                <p className="absolute text-lg top-[100px] pl-3 pr-3 text-gray-500">
                    Boost your brand recognition with each click.
                    Generic links don't mean a thing. Branded links help 
                    instil confidence in your content.
                </p>
            </div>
            
           
        </div>
        <div className="card-two w-4/5 lg:w-1/5  h-[280px] bg-white lg:absolute  left-[680px] top-[320px] rounded-2xl m-5 ml-10 lg:ml-0 mb-15 lg:mb-2">
         <div className="w-full h-full relative p-5">
                <div className="w-[70px] h-[70px] bg-violet-900 rounded-full items-center
                 justify-center flex p-4 absolute lg:left-[20px] left-3/8 top-[-40px]">
                    <img src={detail} alt="" className="object-cover" />
                </div>
                <p className="absolute text-2xl top-[50px] font-bold pl-3 pr-3 text-gray-500">Detail Records</p>
                <p className="absolute text-lg top-[100px] pl-3 pr-3 text-gray-500">
                    Gain insights into who is clicking your links. Knowing when and where people engage with 
                    your content helps inform better decisions.
                </p>
            </div>
        </div>
        <div className="card-three w-4/5 lg:w-1/5  h-[280px] bg-white lg:absolute  left-[1110px] top-[370px] rounded-2xl m-5 ml-10 lg:ml-0 mb-15 lg:mb-2">
             <div className="w-full h-full relative p-5">
                <div className="w-[70px] h-[70px] bg-violet-900 rounded-full items-center
                 justify-center flex p-4 absolute lg:left-[20px] left-3/8 top-[-40px]">
                    <img src={customize} alt="" className="object-cover" />
                </div>
                <p className="absolute text-2xl top-[50px] font-bold pl-3 pr-3 text-gray-500">Brand Reconginition</p>
                <p className="absolute text-lg top-[100px] pl-3 pr-3 pb-3 text-gray-500">
                    Boost your brand recognition with each click.
                    Generic links don't mean a thing. Branded links help 
                    instil confidence in your content.
                </p>
            </div>
        </div>

    </div>
  )
}
