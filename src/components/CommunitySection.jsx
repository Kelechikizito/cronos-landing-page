import { IoIosArrowForward } from "react-icons/io";
import Helix from '../assets/Helix.png'


const CommunitySection = () => {
  return (
    <div className="text-white flex justify-between mt-28 px-24"
    style={{
        backgroundImage: `url(${Helix})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-13% top',
        backgroundSize: '38%'
    }}
    >
        <div className="flex flex-col gap-10">
            <div className="opacity-75 tracking-widest">
                <p>COMMUNITY-OWNED AND OPERATED</p>
            </div>

            <div>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Enter a Universe<br />of Connected<br />Services.</h1>
            </div>

            <div>
                <p className="">Cronos apps and services connect using IBC,<br />the Inter-Blockchain Communication Protocol.
                <br />This innovation enables you to freely exchange<br />assets and data across sovereign blockchains.
                </p>
            </div>

            <div className="flex">
                <button className="p-5 px-20 bg-gradient-to-r from-white to-gray-500 text-black">Learn</button>
                <button className="flex p-5 px-20 gap-2 justify-between items-center">Explore Tokens <span className=""><IoIosArrowForward className="text-white"/></span></button>
            </div>
        </div>

        <div className="flex flex-col justify-around text-right">
            <div>
                <div>
                    <h1 className="text-8xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">265+</h1>
                </div>

                <div>
                    <p>Apps & Services</p>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="text-8xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">$63B+</h1>
                </div>
                
                <div>
                    <p>Digital Assets</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunitySection