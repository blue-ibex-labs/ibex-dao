// import React from "react";
import React, { Suspense } from "react";
import Footer from "../components/footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import GettingStarted from "../components/started";
// import Image from "next/image";
// import Menu from "../components/menu";
// import Timeline from "../components/timeline";

const Home = () => {

  return (
    <div>
      <div className="flex h-screen items-center ">
        <div className="-z-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-cover bg-center h-screen w-screen fixed top-[0] ">
          <div className="flex -z-10 h-screen items-center  bg-gradient-to-r from-black via-indigo-900"></div>
        </div>


        <section className="z-10 w-screen text-white">
          <div
            className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
          >
            <Canvas className="z-">
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                  <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={4}
                  />
                </Sphere>
              </Suspense>
            </Canvas>


            {/* <Image
              src="/9.png"
              className=" imgStyle"
              alt=""
              height={26}
              width={40}
            /> */}

            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl">BLUE IBEX DAO.</h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-4xl sm:leading-relaxed">
                DEFi For Everyone
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#start"
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
      <GettingStarted />
      <Footer />
    </div >
  );
};

export default Home;
