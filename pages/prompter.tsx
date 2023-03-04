import React, { useState } from "react";
import Preview from "../components/preview";
import { PromptResponse } from "../models/Dalli";
import Loading from "../components/loading";

const PromptForm = () => {
  const [formData, setFormData] = useState({
    prompt: "",
    seed: -1,
    n: 1,
    steps: 5,
  });

  const [isSuccessResponse, setIsSuccessResponse] = useState(false);
  const [creatingImageInProgress, setCreatingImageInProgress] = useState(false);
  const [promptResponse, setImageResponse] = useState<PromptResponse>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = process.env.NEXT_PUBLIC_AI_IMAGE_SERVICE_URL;
    setCreatingImageInProgress(true);
    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),

      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response: PromptResponse) => {
        setImageResponse(response);
        formData.seed = response.response.data[0].seed;
        setCreatingImageInProgress(false);
        setIsSuccessResponse(true);
      })
      .catch((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setIsSuccessResponse(false);
          setCreatingImageInProgress(false);
          setImageResponse(data);
        }
      });
  };

  const showForm = () => {
    return (
      <div className="flex justify-center">
        <div className="w-full bg-zinc-400 font-sans hover:font-serif">
          <form className="p-6" method="POST" onSubmit={submitForm}>
            <div>
              <label className="block">Prompt</label>
              <textarea
                minLength={5}
                maxLength={500}
                name="prompt"
                onChange={handleInput}
                value={formData.prompt}
                className="form-textarea w-full px-4 py-3 rounded-md"
                rows={3}
              ></textarea>
            </div>

            <div>
              <label className="block">How Many Images?</label>
              <hr />
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                {formData.n}
              </span>

              <div className="range">
                <input
                  type="range"
                  className="form-range w-full px-4 py-3 rounded-full"
                  id="customRange1"
                  onChange={handleInput}
                  value={formData.n}
                  name="n"
                  min="1"
                  max="5"
                />
              </div>
            </div>
            <hr />

            <div>
              <label className="block">Steps</label>
              <hr />
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                {formData.steps}
              </span>

              <div className="range">
                <input
                  type="range"
                  className="form-range w-full px-4 py-3 rounded-full"
                  id="steps-range"
                  onChange={handleInput}
                  value={formData.steps}
                  name="steps"
                  min="5"
                  max="75"
                />
              </div>
            </div>

            <hr />
            <div>
              <label className="block">Seed</label>
              <input
                type="number"
                className="form-range w-full px-4 py-3 rounded-md"
                id="seed"
                onChange={handleInput}
                value={formData.seed}
                name="seed"
              />
            </div>
            <hr />
            <div className="pt-6">
              <button
                className="bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none rounded-md"
                type="submit"
              >
                Send message
              </button>
            </div>
          </form>

          <div>
            {errorMessage ? (
              <div>
                <p>{JSON.stringify(errorMessage.message)}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-flow-row auto-rows-max">
      <div>
        <div id="prompt-form">{showForm()}</div>
        <div className="mt-8">
          {isSuccessResponse && !creatingImageInProgress ? (
            <div className="overflow-y-auto">
              <Preview {...promptResponse} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>{creatingImageInProgress ? <Loading /> : <div />}</div>
    </div>
  );
};
export default PromptForm;
