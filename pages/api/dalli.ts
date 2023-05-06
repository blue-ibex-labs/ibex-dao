import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs/promises");

async function saveData(image) {
  await fs.writeFile(
    "cache/image" + new Date().getTime() + ".json",
    JSON.stringify(image)
  );
}

async function loadFromCache() {
  const data = await fs.readFile("cache/image.json", { encoding: "utf8" });
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.body.prompt;
  const numberOfImages = req.body.n ? parseInt(req.body.n) : 1;
  const size = req.body.size;

  const data = {
    prompt: prompt,
    n: numberOfImages > 6 ? 1 : numberOfImages,
    size: size,
  };

  console.log(data);
  const { test } = req.query;

  if (test) {
    console.log("send test respose");
    try {
      const jdata = await loadFromCache();
      const imageResponse = JSON.parse(jdata);
      console.log(imageResponse);
      res.json(imageResponse);
    } catch (error) {
      console.log("no cache found");
      res.status(500).send(error);
    }
  } else {
    await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + process.env.DALLI_API_KEY,
        "Content-Type": "application/json",
      },
    })
      .then((dalliResponse) => dalliResponse.json())
      .then((dalliResponse) => {
        // const response: PromptResponse = {
        //   prompt: data,
        //   response: dalliResponse,
        // };
        saveData(dalliResponse);
        return res.json({ response: dalliResponse });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
  }
}
