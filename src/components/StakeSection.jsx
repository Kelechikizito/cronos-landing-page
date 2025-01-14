import icosahedron from '../assets/Icosahedron.png'
import { IoIosArrowForward } from "react-icons/io";


const StakeSection = () => {
  return (
    <div className='mt-48 flex flex-col lg:flex-row justify-between text-white px-24 lg:pr-24 lg:pl-0'>
        <div>
            <img src={icosahedron} alt='' className='size-[35rem]'/>
        </div>

        <div className='text-center lg:text-right flex flex-col gap-4 lg:gap-0 justify-around'>
            <div>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Secured by<br />the Hedron.</h1>
            </div>

            <div>
                <p>
                    In return for securing the services on<br /> 
                    the Cronos Hub, transaction fees<br /> 
                    and staking rewards are distributed<br /> 
                    to HEDRON stakers.
                </p>
            </div>

            <div className="flex justify-between lg:justify-normal">   
                <button className="p-5 px-20 bg-gradient-to-r from-white to-gray-500 text-black">Start Staking</button>
                <button className="flex p-5 px-20 gap-2 justify-between items-center">Learn more<span className=""><IoIosArrowForward className="text-white"/></span></button>
            </div>
        </div>
    </div>
  )
}

export default StakeSection