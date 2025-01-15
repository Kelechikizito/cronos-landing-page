import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import locker from '../assets/locker-dynamic-premium.png';
import yuan from '../assets/yuan-dynamic-premium.png';

const FeatureSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-48 flex flex-col text-white gap-20 px-8 sm:px-24"
    >
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Be Part of the Open<br />Economy of the Future.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="flex gap-2 justify-between items-center">
            Powerful features<span className=""><IoIosArrowForward className="text-white" /></span>
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#141414] row-span-2 py-8 px-4 flex flex-col gap-8"
        >
          <div className="opacity-75 tracking-widest">
            <p>INTERCHAIN ACCOUNTS</p>
          </div>

          <div className="size-40 sm:size-96">
            <img src={locker} alt="" className="size-42" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              One secure<br />account for all<br />your digital<br />assets.
            </h1>
          </div>

          <div className="opacity-75 tracking-widest">
            <p>COMING SOON</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#141414] py-8 px-4 flex flex-col-reverse sm:flex"
        >
          <div className="flex flex-col gap-8">
            <div className="opacity-75 tracking-widest">
              <p>DECENTRALIZED EXCHANGE</p>
            </div>

            <div>
              <h1 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Swap<br />tokens &<br />collectibles.
              </h1>
            </div>

            <div className="opacity-75 tracking-widest">
              <p>COMING SOON</p>
            </div>
          </div>

          <div className="size:25 sm:size-64">
            <img src={yuan} alt="" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#141414] py-8 px-4 flex flex-col gap-8"
          >
            <div className="opacity-75 tracking-widest">
              <p>LIQUIDITY POOL</p>
            </div>

            <div>
              <h1 className=" text-2xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Provide<br />liquidity,<br />earn<br />rewards.
              </h1>
            </div>

            <div className="opacity-75 tracking-widest">
              <p>COMING SOON</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#141414] py-8 px-4 flex flex-col gap-8"
          >
            <div className="opacity-75 tracking-widest">
              <p>WRAPPED ETH</p>
            </div>

            <div>
              <h1 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Eth<br />Included
              </h1>
            </div>

            <div className="opacity-75 tracking-widest">
              <p>COMING SOON</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureSection;