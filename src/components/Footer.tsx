import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import pininterest from '../assets/icon-pinterest.svg'
export default function Footer() {
  return (
    <div className="bg-[#232028] w-full h-auto lg:h-[280px] lg:grid lg:grid-flow-col lg:grid-rows-3 gap-5 sticky
                    flex flex-col lg:p-0 p-5">
       <div className="flex-1 lg:row-start-1 lg:row-end-4 flex items-center justify-center ">
         <h1 className="text-white text-5xl font-bold">Shortly</h1>
        </div>
        <div className="flex-1 lg:row-start-1 lg:row-end-4 flex lg:flex-row flex-col gap-5">
          <div className="flex-1  flex flex-col items-center justify-center lg:p-5 gap-2">
            <h1 className="text-xl font-bold text-white">Features</h1>
            <ul className="text-center ">
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Link Shortening</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Branded Links</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Analytics</a></li>
            </ul>
          </div>
          <div className="flex-1  flex flex-col items-center justify-center lg:p-5 gap-2">
            <h1 className="text-xl font-bold text-white">Resources</h1>
            <ul className="text-center">
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Blog</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Developers</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Support</a></li>
            </ul>
          </div>
          <div className="flex-1  flex flex-col items-center justify-center lg:p-7 gap-2">
            <h1 className="text-xl font-bold text-white lg:mt-6">Company</h1>
            <ul className=" text-center ">
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">About</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Our Team</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Careers</a></li>
              <li><a href="" className="text-gray-400 hover:text-[#00e7d5]">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1 lg:row-start-1 lg:row-end-4 flex flex-row items-center justify-center gap-5 p-5 lg:p-0">
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={pininterest} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </div>
    </div>
  )
}
