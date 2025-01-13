import { IoIosArrowForward } from "react-icons/io";
import locker from '../assets/locker-dynamic-premium.png'


const FeatureSection = () => {
  return (
    <div className="mt-48 flex flex-col">
        <div>
            <div>
                <h1>
                    Be Part of the Open<br />Economy of the Future.
                </h1>
            </div>

            <div>
                <button>Powerful features<span className=""><IoIosArrowForward className="text-white"/></span></button>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <p>INTERCHAIN ACCOUNTS</p>
                </div>

                <div>
                    <img src={locker} alt=""/>
                </div>

                <div>
                    <h1>One secure<br />account for all<br />your digital<br />assets.</h1>
                </div>

                <div>
                    <p>COMING SOON</p>
                </div>
            </div>

            <div>

            </div>

            <div>

            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default FeatureSection