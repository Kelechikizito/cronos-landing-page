import icosahedron from '../assets/Icosahedron.png'


const HeroSection = () => {
  return (
    <div className="text-white text-center py-36 flex flex-col gap-8"
    style={{backgroundImage: `url(${icosahedron}), url(${icosahedron})`, 
            backgroundSize: '20%, 35%',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: '15% 25%, 125% bottom',
            // filter: 'blur(8px)',
}}
    >
        <div>
            <p className="opacity-75 tracking-widest">
                WELCOME TO CRONOS
            </p>
        </div>

        <div>
            <h1 className="text-9xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                The Internet of <br/> Blockchains.
            </h1>
        </div>

        <div>
            <p>
                Cronos is an ever expanding ecosystem of connected<br/>apps and services, built for a decentralized future.
            </p>
        </div>
    </div>
  )
}

export default HeroSection