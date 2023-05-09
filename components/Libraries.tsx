import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { Any } from "react-spring";

export default function Libraries({ products }) {
  return (
    <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending NFTs
        </h2>
      </div>

      <div className="relative mt-8  ">
        <div className="relative -mb-6 w-full overflow-x-auto pb-6">
          <div
            role="list"
            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
          >
            {products?.map((product: any) => (
              <div
                key={product?.id}
                className="inline-flex w-64 flex-col text-center lg:w-auto border-2 rounded-md"
              >
                <div className="group relative">
                  <Link href={`/library/${product?.link}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <Image
                        src={"/../public/49.png"}
                        alt={"nft"}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.name}</p>

                      <h3 className="mt-1 font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {product?.name}
                      </h3>

                      <p className="mt-1 text-gray-900">
                        Volume:{product.Volume}
                      </p>
                      <p>Discription: {product.discription}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
