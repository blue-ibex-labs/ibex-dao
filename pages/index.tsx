import React from "react";
// import Menu from "../components/menu";
// import Timeline from "../components/timeline";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen items-center ">
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-cover bg-center h-screen w-screen fixed top-[0] ">
          <div className="flex h-screen items-center  bg-gradient-to-r from-black via-indigo-900"></div>
        </div>

        {/* <div className="md:w-1/12 px-1 border-r">
          <Menu />
        </div> */}

        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="w-screen h-screen">
            <div className="relative text-center  text-white">
              <h2 className="md:text-8xl max-md:text-4xl font-bold leading-7 sm:tracking-tight">
                The Ibex Tribe
              </h2>
              <h3 className="md:text-4xl max-md:text-2xl font-thin pt-6 ">
                The Defi for Everyone
              </h3>
            </div>
            <div className="flex flex-row float-left">{/* <Timeline /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
