import { PromptResponse } from "../models/Dalli";

export default function Preview(promptResponse: PromptResponse) {
  console.log(promptResponse);
  // return (
  //   <div className="inline-block align-middle max-w-sm rounded overflow-hidden shadow-lg">
  //     <img
  //       className="w-full"
  //       src={promptResponse.response.data[0].url}
  //       alt="Sunset in the mountains"
  //     />
  //     <div className="px-6 py-4">
  //       <div className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-mono">
  //         <p className="p-4 font-mono text-clip overflow-hidden ">
  //           {promptResponse.prompt.prompt}
  //         </p>
  //       </div>
  //       <p className="text-gray-700 text-base">{promptResponse.prompt.size}</p>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex justify-center">
      <ul className="w-full">
        <li className="w-full rounded-lg bg-primary-100 p-4 text-primary-600">
          <section className="overflow-hidden text-neutral-700">
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
              <div className="-m-1 flex flex-wrap md:-m-2">
                {promptResponse.response.data.map((prompt) => (
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={`${prompt.url}`}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex w-1/3 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
        <li className="w-full rounded-lg bg-primary-100 p-4 text-primary-600">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            jahah
          </div>
        </li>
      </ul>
    </div>
  );
}
