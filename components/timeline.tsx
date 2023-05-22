import "swiper/css";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper";

export default function Timeline() {
  return (
    <>
      <section className="p-6 pt-24 bg-gray-900   dark:text-gray-100 z-1">
        <div className="container mx-auto">
          {/* <h2 className="text-5xl font-bold text-center dark:text-gray-50">Ibex DAO's Roadmap</h2> */}
          <div className="text-center">
            <h2 className=" font-sans text-5xl font-bold leading-none tracking-tight text-violet-400 sm:text-6xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Ibex</span>
              </span>{' '}
              DAO&apos;s Roadmap
            </h2>
          </div>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            creativeEffect={{
              prev: {
                shadow: false,
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>

              <div className="w-5/6	 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />

                <div className="bg-white shadow-2xl rounded-b-3xl">
                  <div className="w-5/6 m-auto">
                    <p className=" text-violet-400 pt-5">PHASE 1</p>
                  </div>
                  <h2 className=" text-gray-800 text-4xl font-bold  pt-3 pl-6">Planning</h2>
                  <p className="text-gray-800 pb-3 text-xl pl-6 pt-3 pr-3">Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                  <hr />
                  <div className=" m-auto pl-6 mt-6 w-full h-28">
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Release Website</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Grow Community</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Launch</span><br />

                  </div>
                </div>
              </div>

            </SwiperSlide>


            <SwiperSlide>
              <div className="w-5/6	 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />

                <div className="bg-white shadow-2xl rounded-b-3xl">
                  <div className="w-5/6 m-auto">
                    <p className=" text-violet-400 pt-5">PHASE 2</p>
                  </div>
                  <h2 className=" text-gray-800 text-4xl font-bold  pt-3 pl-6">Production</h2>
                  <p className="text-gray-800 pb-3 text-xl pl-6 pt-3 pr-3">Starting the production on the procedurally generated Artworks <br /> and the smart contract for <br /> minting.</p>
                  <hr />
                  <div className=" m-auto pl-6 mt-6 w-full h-28">
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Release Website</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Grow Community</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Launch</span><br />

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-5/6	 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />

                <div className="bg-white shadow-2xl rounded-b-3xl">
                  <div className="w-5/6 m-auto">
                    <p className=" text-violet-400 pt-5">PHASE 3</p>
                  </div>
                  <h2 className=" text-gray-800 text-4xl font-bold  pt-3 pl-6">Launch</h2>
                  <p className="text-gray-800 pb-3 text-xl pl-6 pt-3 pr-3">Our most active community members will be able to join the whitelist so they can discover, collect and sell their NFTs.</p>
                  <hr />
                  <div className=" m-auto pl-6 mt-6 w-full h-28">
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Release Website</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Grow Community</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Launch</span><br />

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-5/6	 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />

                <div className="bg-white shadow-2xl rounded-b-3xl">
                  <div className="w-5/6 m-auto">
                    <p className=" text-violet-400 pt-5">PHASE 4</p>
                  </div>
                  <h2 className=" text-gray-800 text-4xl font-bold  pt-3 pl-6">Minting</h2>
                  <p className="text-gray-800 pb-3 text-xl pl-6 pt-3 pr-3">Per-Sale Minting is opened forr our Whitelisted members.<br /> The price for whitelist minting will be 0.5 ADA.</p>
                  <hr />
                  <div className=" m-auto pl-6 mt-6 w-full h-28">
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Release Website</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Grow Community</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Launch</span><br />

                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="w-5/6	 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />

                <div className="bg-white shadow-2xl rounded-b-3xl">
                  <div className="w-5/6 m-auto">
                    <p className=" text-violet-400 pt-5">PHASE 5</p>
                  </div>
                  <h2 className=" text-gray-800 text-4xl font-bold  pt-3 pl-6">New NFTs</h2>
                  <p className="text-gray-800 pb-3 text-xl pl-6 pt-3 pr-3">Typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <hr />
                  <div className=" m-auto pl-6 mt-6 w-full h-28">
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Release Website</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Grow Community</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Launch</span><br />

                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="w-5/6	 mt-24 m-auto lg:mt-16 max-w-sm">
                <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />

                <div className="bg-white shadow-2xl rounded-b-3xl">
                  <div className="w-5/6 m-auto">
                    <p className=" text-violet-400 pt-5">PHASE 6</p>
                  </div>
                  <h2 className=" text-gray-800 text-4xl font-bold  pt-3 pl-6">Future</h2>
                  <p className="text-gray-800 pb-3 text-xl pl-6 pt-3 pr-3">Typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <hr />
                  <div className=" m-auto pl-6 mt-6 w-full h-28">
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Release Website</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Grow Community</span><br />
                    <i className="fa-regular fa-circle-check text-violet-400 text-xl pb-2"></i><span className="text-xl font-light text-gray-900"> Launch</span><br />

                  </div>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </section>
    </>
  );
}
