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


        <section className="z-10 w-screen text-white">
          <div
            className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl">BLUE IBEX DAO.</h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-4xl sm:leading-relaxed">
                DEFi For Everyone
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div >
  );
};

export default Home;
