import { useState } from "react";

const library = () => {
  //   const [title, setTitle] = useState("");
  const [books, setbooks] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const response = await fetch(
        "/api/assets?policy=1f362a4df39f451401e44fee30f27eb39712d66aae375f539be94ed6",
        {
          method: "GET",
          //   body: JSON.stringify(data),
        }
      );

      setbooks(response);
    };
    postData().then((books) => {
      //   alert(data.message);
    });
  }
  console.log(books);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 text-white shadow-xl border mt-5 ml-5 p-8 text-xl rounded-xl "
        >
          Open Book Library
        </button>
      </form>
      <div className=" w-1/5 mt-10 border text-2xl text-black  ">
        {books?.assets?.asset}
      </div>
    </>
  );
};

export default library;
