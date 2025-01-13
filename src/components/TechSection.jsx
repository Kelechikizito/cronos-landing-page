import Cylinder from '../assets/Cylinder.png'

const TechSection = () => {
  return (
    <div 
        className='mt-48 text-white flex flex-col gap-16 pb-28'
        style={{backgroundImage: `url(${Cylinder})`,
                backgroundSize: '60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '150% 100%'}}
    >
        <div className="flex justify-between">
            <div className="flex flex-col gap-8">
                <div className="opacity-75 tracking-widest">
                    <p>TECHNOLOGY</p>
                </div>

                <div>
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">The most trusted<br />way to build<br />value.</h1>
                </div>

                <div>
                    <p>
                        Cronos is a state-of-the-art blockchain<br />
                        framework that powers the Cronos Hub<br /> 
                        and its rapidly expanding orbit of<br /> 
                        sovereign chains.
                    </p>
                </div>

                <div>
                    <p>
                        Developers can use the SDK to build<br /> 
                        innovative applications that create<br /> 
                        value through exchange with the<br /> 
                        Cronos Hub.
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
                <div className="opacity-75 tracking-widest">
                    <p>PROOF OF STAKE</p>
                </div>

                <div>
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">99%</h1>
                </div>

                <div>
                    <p>Lower carbon footprint</p>
                </div>
            </div>
        </div>

        <div className="flex justify-between">
            <div className="flex flex-col gap-8">
                <div className="opacity-75 tracking-widest">
                    <p>LOW FEES</p>
                </div>

                <div>
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">$0.01</h1>
                </div>

                <div>
                    <p>Enjoy the lowest fees - almost zero</p>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="opacity-75 tracking-widest">
                    <p>FAST TRANSACTIONS</p>
                </div>

                <div>
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">5 sec</h1>
                </div>

                <div>
                    <p>Transactions confirmed in seconds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechSection