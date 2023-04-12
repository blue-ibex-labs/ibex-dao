
import React from "react";

const MintBasics = () => {


    return (

        <section className="p-6 side-panel dark:bg-gray-800 dark:text-gray-100 z-1">
            <div className="container mx-auto">
                <span className="block mb-2 text-sm font-medium tracking-widest text-center uppercase text-violet-400">How it works</span>
                <h2 className="text-5xl font-bold text-center dark:text-gray-50">Creating an NFT is simple</h2>
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-slate-400">1</div>
                        <p className="text-xl text-slate-300 font-semibold">
                            <b className="text-3xl">Create.</b> <br />your cool NFT. This could be anything from a piece of artwork to a video clip to a tweet.
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-slate-400">2</div>
                        <p className="text-xl text-slate-300 font-semibold">
                            <b className="text-3xl">Upload.</b> <br />You will also need to provide some additional information about the NFT, such as its name, description.
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-slate-400">3</div>
                        <p className="text-xl text-slate-300 font-semibold">
                            <b className="text-3xl">Mint.</b><br />IbexDAO will create a unique, one-of-a-kind token that represents your NFT. Then, it can be sold, traded, or held as a digital asset.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MintBasics;
