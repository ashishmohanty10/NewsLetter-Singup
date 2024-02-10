import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import DesktopImg from "/illustration-sign-up-desktop.svg";
import MobileImg from "/illustration-sign-up-mobile.svg";

const App = () => {
  return (
    <>
      <main className="md:bg-charcoalGray md:w-full h-screen md:flex justify-center items-center">
        <div className="md:max-w-[700px] md:h-[500px] w-full bg-white rounded-3xl md:p-4">
          <div className="flex md:flex-row flex-col-reverse justify-between gap-10 items-center">
            <div className="flex flex-col  gap-4 justify-center">
              <h1 className="text-4xl text-darkSlateGray font-bold ">
                Stay Updated!
              </h1>

              <p className="text-sm  text-darkSlateGray">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FaCircleCheck size={20} className="text-tomato" />
                  <p className="text-sm">
                    Product discovery and building what matters
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircleCheck size={20} className="text-tomato" />
                  <p className="text-sm">
                    Measuring to ensure updates are a success
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircleCheck size={20} className="text-tomato" />
                  <p className="text-sm">And much more!</p>
                </div>
              </div>

              <form action="" className="mt-2 flex flex-col">
                <label htmlFor="" className="text-xs font-bold">
                  Email address
                </label>

                <input
                  type="email"
                  required
                  placeholder="qwerwq@gmail.com"
                  className=" border-2 focus:ring-grey text-sm py-2 disabled:border-grey  border-grey rounded-md mt-2 px-4 mb-4"
                />

                <button className="py-3 bg-darkSlateGray hover:bg-gradient-to-r from-red-500  to-orange-500 text-sm font-bold text-white rounded-md transition-all">
                  Subscribe to monthly newsletters
                </button>
              </form>
            </div>

            <div>
              <img
                src={DesktopImg}
                alt=""
                className="hidden md:block h-auto "
              />

              <img src={MobileImg} alt="" className="md:hidden w-full" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
