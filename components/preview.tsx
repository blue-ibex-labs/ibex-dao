/* eslint-disable react/jsx-key */
import { PromptResponse } from "../models/Dalli";
import IbexLabel from "./label";

export default function Preview(promptResponse: PromptResponse) {
  console.log("preview images");
  return (
    <div className="flex justify-center">
      <ul className="w-full">
        <li className="w-full rounded-lg bg-primary-100 p-4 text-primary-600">
          <section className="overflow-hidden text-neutral-700">
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
              <div className="-m-1 flex flex-wrap md:-m-2">
                {promptResponse.response.data.map((prompt, index) => (
                  <div className="flex w-1/2 flex-wrap" key={index}>
                    <div className="grid gap-4 w-full">
                      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <div className="w-full p-1 md:p-2">
                          <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={`${prompt.url}`}
                          />
                        </div>

                        <div className="absolute top-0 left-0 px-6 py-4">
                          <IbexLabel textToDisplay={prompt.seed} />
                          <IbexLabel textToDisplay={prompt.sampler} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </li>
      </ul>
    </div>
  );
}
