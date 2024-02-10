import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import DesktopImg from "/illustration-sign-up-desktop.svg";
import MobileImg from "/illustration-sign-up-mobile.svg";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const App = () => {
  const [data, setData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log("errors-", errors);
  const parseData = data ? JSON.parse(data) : {};

  return (
    <>
      <main className="md:bg-charcoalGray md:w-full h-screen md:flex justify-center items-center">
        {data ? (
          <div className=" p-16 md:max-w-[400px] md:h-[400px] bg-white rounded-3xl md:p-10">
            <div className="flex flex-col gap-5">
              <FaCircleCheck className="text-5xl text-tomato" />

              <h3 className="text-4xl text-darkSlateGray font-bold">
                Thanks for subscribing
              </h3>

              <p className="text-sm font-normal mb-40 md:mb-0">
                A confirmation email has been sent to{" "}
                <span className="font-bold">{parseData?.email} .</span> Please
                open it and click the button inside to confirm your subsription
              </p>

              <button
                onClick={() => setData("")}
                className="py-3 bg-darkSlateGray hover:bg-gradient-to-r from-red-500  to-orange-500 text-sm font-bold text-white rounded-md transition-all"
              >
                Dismis the message
              </button>
            </div>
          </div>
        ) : (
          <div className="md:max-w-[700px] md:h-[500px] w-full bg-white rounded-3xl md:p-4">
            <div className="flex md:flex-row flex-col-reverse justify-between gap-10 md:items-center">
              <form
                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
                className="flex flex-col p-5 gap-4 justify-center"
              >
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

                {/* form */}
                <div className="mt-2 flex flex-col">
                  <div
                    htmlFor=""
                    className="text-xs font-bold flex justify-between"
                  >
                    <p>Email address</p>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <input
                    {...register(
                      "email",
                      {
                        required: "Valid email required",
                        validate: (value) => {
                          if (!value.includes("@")) {
                            return "Email must include @";
                          }
                          return true;
                        },
                      },
                      {
                        pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: "invalid email address",
                      }
                    )}
                    placeholder="qwerty@gmail.com"
                    className={clsx(
                      "border-2 focus:ring-grey text-sm py-2 disabled:border-grey border-grey rounded-md mt-2 px-4 mb-4",
                      {
                        "border-red-400 bg-red-100 outline-red-400":
                          errors.email,
                      }
                    )}
                  />

                  <button
                    type="submit"
                    className="py-3 bg-darkSlateGray hover:bg-gradient-to-r from-red-500  to-orange-500 text-sm font-bold text-white rounded-md transition-all"
                  >
                    Subscribe to monthly newsletters
                  </button>
                </div>
              </form>

              <div className="flex justify-center">
                <img
                  src={DesktopImg}
                  alt=""
                  className="hidden md:block h-auto "
                />

                <img src={MobileImg} alt="" className="md:hidden w-full" />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
