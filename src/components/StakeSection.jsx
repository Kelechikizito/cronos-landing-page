import icosahedron from '../assets/Icosahedron.png'
import { IoIosArrowForward } from "react-icons/io";


const StakeSection = () => {
  return (
    <div className='mt-48 flex justify-between text-white'>
        <div>
            <img src={icosahedron} alt='' className='size-[35rem]'/>
        </div>

        <div className='text-right flex flex-col justify-around'>
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

            <div className="flex">   
                <button className="p-5 px-20 bg-gradient-to-r from-white to-gray-500 text-black">Start Staking</button>
                <button className="flex p-5 px-20 gap-2 justify-between items-center">Learn more<span className=""><IoIosArrowForward className="text-white"/></span></button>
            </div>
        </div>
    </div>
  )
}

export default StakeSection