import Thorus from '../assets/Thorus.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/chart-dynamic-premium.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import { IoIosArrowForward } from "react-icons/io";

const HubSection = () => {
  return (
    <div className="text-white mt-48 flex flex-col gap-12 px-32">
        <div 
        className="flex flex-col gap-10 text-center py-12"
        style={{
                backgroundImage: `url(${Thorus})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '47%'
            }}
        >
            <div>
                <p className="opacity-75 tracking-widest">ENTER THE CRONOS HUB</p>
            </div>

            <div>
                <h1 className="text-2xl sm:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">The Heart of the<br />Interchain.</h1>
            </div>

            <div>
                <p>Serving as the economic center of Cronos,<br />the Cronos Hub is a blockchain that provides<br />vital 
                services to the interchain.
                </p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-12 text-center sm:text-justify'>
            <div className='flex flex-col gap-4'>
                <div><img src={image5} alt='' className=' size-25 sm:size-60'/></div>

                <div>
                    <h1 className=' text-xl sm:text-4xl font-bold'>MarketPlace</h1>
                </div>

                <div>
                    <p>
                        Set to operate a next-gen<br /> 
                        decentralized exchange, swapping<br /> 
                        digital assets from across the<br /> 
                        Interchain, with very low fees and<br />  
                        instant transaction confirmation.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div><img src={image6} alt='' className=' size-25 sm:size-60'/></div>

                <div><h1 className=' text-xl sm:text-4xl font-bold'>Security provider</h1></div>

                <div>
                    <p>
                        Set to operate a next-gen<br /> 
                        decentralized exchange, swapping<br /> 
                        digital assets from across the<br /> 
                        Interchain, with very low fees and<br />  
                        instant transaction confirmation.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div><img src={image4} alt='' className='size-25 sm:size-60'/></div>

                <div><h1 className=' text-xl sm:text-4xl font-bold'>Router</h1></div>

                <div>
                    <p>
                        Set to operate a next-gen<br /> 
                        decentralized exchange, swapping<br /> 
                        digital assets from across the<br /> 
                        Interchain, with very low fees and<br />  
                        instant transaction confirmation.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div><img src={image3} alt='' className='size-25 sm:size-60'/></div>

                <div><h1 className=' text-xl sm:text-4xl font-bold'>Custodian</h1></div>

                <div>
                    <p>
                        Set to operate a next-gen<br /> 
                        decentralized exchange, swapping<br /> 
                        digital assets from across the<br /> 
                        Interchain, with very low fees and<br />  
                        instant transaction confirmation.
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div>
                <button className="flex p-5 sm:px-20 w-[100%] sm:w-max gap-2 justify-center sm:justify-between items-center bg-gradient-to-r from-white to-gray-500 text-black">
                    Cosmos Hub<span className=""><IoIosArrowForward className="text-black"/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HubSection