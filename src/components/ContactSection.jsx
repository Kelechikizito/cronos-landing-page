import sphere from '../assets/Sphere.png'
import { MdArrowOutward } from "react-icons/md";
import copySuccess from '../assets/copy-success.png'
import formatSquare from '../assets/format-square.png'
import people from '../assets/people.png'

const ContactSection = () => {
  return (
    <div className='text-white mt-28 flex gap-40 flex-col'>
      <div className='flex flex-col gap-28 px-8 sm:px-24'>
        <div className='text-center'>
          <h1 className="text-3xl sm:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Join the network.</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 grid-rows-1 text-center sm:text-justify'>
          <div className='bg-[#141414] py-10 px-4 flex flex-col justify-between gap-8'>
            <div className="opacity-75 tracking-widest mb-10">
              <p>CONNECT</p>
            </div>

            <div>
              <h1 className='text-xl sm:text-4xl font-bold'>Connect chains</h1>
            </div>

            <div>
              <p>
                Grow the economy of your chain<br /> 
                by connecting to Cronos Hub<br /> 
                services using IBC protocol.
              </p>
            </div>

            <div className='mt-10'>
              <img src={formatSquare}/>
            </div>
          </div>

          <div className='bg-[#141414] py-10 px-4 flex flex-col justify-between gap-8'>
            <div className="opacity-75 tracking-widest mb-10">
              <p>INTEGRATE</p>
            </div>

            <div>
              <h1 className='text-xl sm:text-4xl font-bold'>Provide services</h1>
            </div>

            <div>
              <p>
                Get support to bring users to<br /> 
                Cronos by providing services<br /> 
                such as exchanges, wallets<br />
                and more.
              </p>
            </div>

            <div className='mt-10'>
              <img src={copySuccess}/>
            </div>
          </div>

          <div className='bg-[#141414] py-10 px-4 flex flex-col justify-between gap-8'>
            <div className="opacity-75 tracking-widest mb-10">
              <p>VALIDATE</p>
            </div>

            <div>
              <h1 className='text-xl sm:text-4xl font-bold'>Validator level</h1>
            </div>

            <div>
              <p>
                Join the ranks of trusted<br /> 
                decentralized validator<br /> 
                operators in the network and<br /> 
                help secure the interchain. 
              </p>
            </div>

            <div className='mt-10'>
              <img src={people}/>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-8 sm:px-24 text-center lg:text-justify'
      style={{backgroundImage:`url(${sphere})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
              backgroundPosition: '-25% center'
    }}
      >
        <div className='flex flex-col justify-center gap-4 lg:gap-10'>
          <div>
            <h1 className="text-3xl sm:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Meet the<br />worldwide<br />community.
            </h1>
          </div>

          <div>
            <p>
              Join a fast-growing community of<br /> 
              developers and innovators connected<br /> 
              all over the world, building the new<br /> 
              era of the internet.
            </p>
          </div>

          <div>
            <h1 className='flex gap-1 text-xl sm:text-4xl font-bold justify-center lg:justify-normal'>Community <MdArrowOutward /></h1>
          </div>
        </div>

        <div className='flex flex-col gap-12 lg:gap-36'>
          <div className='flex flex-col gap-2 lg:gap-8'>
            <div><h1 className='flex gap-1 text-xl sm:text-4xl font-bold justify-center lg:justify-normal'>Community Chat<MdArrowOutward /></h1></div>

            <div><p>Ask general questions and chat with the<br /> 
            worldwide community on Telegram</p></div>
          </div>

          <div className='flex flex-col gap-2 lg:gap-8'>
            <div><h1 className='flex gap-1 text-xl sm:text-4xl font-bold justify-center lg:justify-normal'>Twitter<MdArrowOutward /></h1></div>

            <div><p>Follow @cronos to get the latest news<br /> 
            and updates from across the ecosystem.</p></div>
          </div>

          <div className='flex flex-col gap-2 lg:gap-8'>
            <div><h1 className='flex gap-1 text-xl sm:text-4xl font-bold justify-center lg:justify-normal'>Developer Chat<MdArrowOutward /></h1></div>

            <div><p>Have technical questions about Cronos<br /> 
            tools? Ask a developer on the Discord.</p></div>
          </div>

          <div className='flex flex-col gap-2 lg:gap-8'>
            <div><h1 className='flex gap-1 text-xl sm:text-4xl font-bold justify-center lg:justify-normal'>Cronos Forum<MdArrowOutward /></h1></div>

            <div><p>Thinking about becoming a validator or<br />interested in network matters? </p></div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 px-8 sm:px-24'>
        <div className='flex flex-col gap-2'>
          <div><h1 className='flex gap-1 text-xl sm:text-4xl font-bold'>Receive transmissions</h1></div>

          <div><p className='flex gap-1 '>Unsubscribe at any time. Privacy Policy<MdArrowOutward /></p></div>
        </div>

        <div>
          <div className='bg-[#141414] flex h-[100%] p-4 justify-between'>
            <input type='text' placeholder='Your email' className='bg-[#141414] w-[50%]'/>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection