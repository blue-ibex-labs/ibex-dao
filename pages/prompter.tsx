import React, { useState } from "react";
import Preview from "../components/preview";
import { PromptResponse } from "../models/Dalli";

const PromptForm = () => {
  const [formData, setFormData] = useState({
    prompt: "",
    n: "",
    size: "512x512",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [promptResponse, setImageResponse] = useState<PromptResponse>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const showForm = () => {
    return (
      <div className="font-sans hover:font-serif">
        <div className="w-full bg-white">
          <form
            className="py-6 px-3 lg:px-9"
            method="POST"
            onSubmit={submitForm}
          >
            <div>
              <label>Prompt</label>
              <textarea
                minLength={5}
                maxLength={500}
                name="prompt"
                onChange={handleInput}
                value={formData.prompt}
                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>

            <div>
              <label className="form-label">How Many Images?</label>
              <hr />
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                {formData.n}
              </span>

              <div className="range">
                <input
                  type="range"
                  className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  id="customRange1"
                  onChange={handleInput}
                  value={formData.n}
                  name="n"
                  min="1"
                  max="5"
                />
              </div>

              {/* <input
             
                type="number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></input> */}
            </div>
            <hr />
            <div>
              <label>Image Size</label>

              <select
                defaultValue={"256x256"}
                value={formData.size}
                onChange={handleInput}
                name="size"
                className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="1024x1024">1024x1024</option>
              </select>
            </div>

            <button
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>

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
    );
  };
  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = "/api/stability?testdd=true";

    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),

      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          prompt: "",
          n: "",
          size: "",
        });

        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setFormSuccess(true);
          setImageResponse(data);
        }
      });
  };

  return (
    <div className="grid grid-flow-row auto-rows-max">
      <div className="mt-8">
        {promptResponse ? (
          <div className="overflow-y-auto">
            <Preview {...promptResponse} />
          </div>
        ) : (
          <div>{showForm()}</div>
        )}
      </div>
    </div>
  );
};
export default PromptForm;
