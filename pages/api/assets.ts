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
  const policy = req.query.policy;
  const pagination = {
    page: req.query.page ? req.query.page : 1,
    count: req.query.count ? req.query.count : 100,
    order: "asc",
  };
  try {
    const assets = await API.assetsPolicyById(policy, pagination);
    // console.log("assets ", assets.length);
    

    const asset = assets?.map( async (val) => await API.assetsById(val?.asset));
      // console.log(asset)
      const inDAta = await Promise.all(asset);
  // const json = await Promise.all(
  //   inDAta.map(async (item: any) => await item.json())
  // );
    // console.log("assets ", assets.length);
    return res.status(200).json({ asset: inDAta });
    
    // return res.status(200).json({ assets: assets });
  } catch (err) {
    console.log("error", err);
    res.status(200).json({ message: err });
  }
}
