import React, { useState } from "react";

const MintingForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const formInputs = [
    {
      label: "name",
      name: "name",
      type: "text",
      placeholder: "Project Name",
    },
    {
      label: "url",
      name: "url",
      type: "text",
      placeholder: "Project URL",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      label: "Description",
      name: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      label: "Twitter",
      name: "Twitter",
      type: "text",
      placeholder: "Twitter",
    },
    {
      label: "Discord",
      name: "Discord",
      type: "text",
      placeholder: "Discord",
    },
    {
      label: "Discord",
      name: "Discord",
      type: "file",
      placeholder: "Discord",
    },
  ];
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center">
          <div className="mx-auto bg-white">
            <form className="py-6 px-3 lg:px-9">
              <label className="mb-3 mt-3 block text-base font-medium text-[#07074D]">
                * are required
              </label>
              {formInputs.map((input, index) => {
                return (
                  <div className="form-group" key={index}>
                    <input
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                );
              })}

              <button
                onClick={registerUser}
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default MintingForm;
