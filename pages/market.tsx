import React from "react";
import Wallet from "./wallet";

const Market = () => {
    return (
        <div className="py-10 bg-gray-100">

            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form
                        className="py-6 px-9"
                        action=""
                        method="POST">
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                                Connect Your Wallet
                            </label>
                            <Wallet />
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                                * are required
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Project Name *"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="URL *"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Description"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Twitter"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Discord"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Policy ID *"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span
                                            className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                        >
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>


                        </div>

                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <h2 className="mt-3 mx-auto grid max-w-6xl  grid-cols-1  text-[2rem] font-bold leading-[4rem] tracking-tight text-black">Checkout our Marketplace</h2>
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/FatOgtaU2LUbmrertoBQL2AVZimRRT3znrs1ukqfHns?ext=png" />
                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 01</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/Wg6cBtX9EBJZStDznn3zkHiQOgGMrEnzq9qNsfC6yXM?ext=png" />

                            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1 text-sm text-slate-400">4.9</span>
                            </div>
                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>

                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/8Y5GkFHMb1H4Q_PQf9FCIXAjpeQFSnyS1Wi_t8z4LdA?ext=png" />


                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>

                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/xyf4Dc5WXw4ytS6uaYNDjiDuQhOep79rb2G6S16T5Nw?ext=png" />


                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/4AEjm3Tz3conftMjmfv6i759-qhXfeuj6a4IlVhtdBQ?ext=png" />


                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/3IAl0ByxWQF7p8y_db2gSF5kwKY5QVG_62JJI1DJ6gE?ext=png" />

                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/l4oproG247oLwGSJnJ2Ht1sxh3dWmxXjGffWVkTr6Mk?ext=png" />

                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                    <a href="#">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src="https://www.arweave.net/-y73F9qkpmSzv_vVCfj2QQWNGhPp9Lx7TQrkDRFrmQU?ext=png" />

                        </div>

                        <div className="mt-1 p-2">
                            <h2 className="text-slate-700">NFT BLUE IBEX 02</h2>
                            <p className="mt-1 text-sm text-slate-400">Created by Someone</p>

                            <div className="mt-3 flex items-end justify-between">
                                <p>
                                    <span className="text-lg font-bold text-blue-500">₳100</span>
                                </p>

                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">


                                    <button className="text-sm">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    )
}
export default Market;