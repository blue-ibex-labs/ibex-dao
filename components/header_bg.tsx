
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
};

export default function HeaderBG() {
    return (
        <div className="side-panel">


            <div className="globe">
                <Canvas shadows dpr={[1, 2]} camera={{ position: [9, 4, 1], fov: 20 }}>
                    <Suspense fallback={null}>
                        <Model />
                        <Environment preset="dawn" />

                    </Suspense>
                    <OrbitControls autoRotate={true} autoRotateSpeed={2} enableZoom={false} />
                </Canvas>
                <div className="para">
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
                                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
