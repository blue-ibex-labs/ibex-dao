import type { NextApiRequest, NextApiResponse } from "next";
import { generateNonce } from "@meshsdk/core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // do: if new user, create new user model in the database

  const nonce = generateNonce("Sign to login in to Mesh2: ");

  // do: store 'nonce' in user model in the database

  // do: return 'nonce'
  res.status(200).json({ nonce });
}
