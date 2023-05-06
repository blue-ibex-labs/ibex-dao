
import React from "react";

const NewsLetter = () => {


    return (
        <section className=" text-gray-400 bg-gray-900  text-center lg:text-left">
            <div className="px-6 py-16">
                <div className="container mx-auto xl:px-32">
                    <div className="grid lg:grid-cols-2 gap-12  items-center">
                        <div className="mt-12 lg:mt-0">
                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                                Get our latest News <br /><span className="text-blue-600">for timely updates!</span>
                            </h1>
                        </div>
                        <div className="mb-12 pb-12 lg:mb-0">
                            <div className="md:flex flex-row">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                                <a
                                    href="mailto:alishandev@proton.me?subject=IBEX DAO&body=Body%20goes%20here"
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Subscribe
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NewsLetter;
