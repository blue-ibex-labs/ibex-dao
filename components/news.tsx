
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
                        <div className="mb-12 lg:mb-0">
                            <div className="embed-responsive embed-responsive-16by9 relative w-full pl-8 overflow-hidden rounded-lg shadow-lg"
                            // style={{padding-top: 56.25%}}
                            >
                                <blockquote className="twitter-tweet embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" data-theme="dark"><p lang="en" dir="ltr">I&#39;m claiming testnet tokens for <a href="https://twitter.com/zksync?ref_src=twsrc%5Etfw">@zksync</a> era, the ultimate zkEVM!<br /><br />My Address: 0x0e4b12cb91d4f94a58650ea947dc9b3cd3a9bc5b<br /><br />Learn more: <a href="https://t.co/hZu8CDzrd6">https://t.co/hZu8CDzrd6</a></p>&mdash; hunz.ai 🌍 (@ibex_labs) <a href="https://twitter.com/ibex_labs/status/1641721238925070337?ref_src=twsrc%5Etfw">March 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NewsLetter;
