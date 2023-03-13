import type { NextApiRequest, NextApiResponse } from "next";

const Blockfrost = require("@blockfrost/blockfrost-js");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

const API = new Blockfrost.BlockFrostAPI({
  projectId: process.env.BLOCKFROST_MAIN_PROJECT, // see: https://blockfrost.io
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id;
  try {
    const assets = await API.assetsById(id);
    console.log("assets ", assets.length);
    return res.status(200).json({ assets: assets });
  } catch (err) {
    console.log("error", err);
    res.status(200).json({ message: err });
  }
}
