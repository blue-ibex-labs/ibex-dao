import { NextApiRequest, NextApiResponse } from "next";

import {
  buildGenerationRequest,
  executeGenerationRequest,
  onGenerationComplete,
} from "../../generation/helper";

import * as Generation from "../../generation/generation_pb";
import { GenerationServiceClient } from "../../generation/generation_pb_service";
import { grpc as GRPCWeb } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";

import { Datum, PromptResponse } from "../../models/Dalli";

import fs from "fs";
import { imageBank } from "../../components/globals";

// This is a NodeJS-specific requirement - browsers implementations should omit this line.
GRPCWeb.setDefaultTransport(NodeHttpTransport());

// Authenticate using your API key, don't commit your key to a public repository!
const metadata = new GRPCWeb.Metadata();
metadata.set("Authorization", "Bearer " + process.env.STABILITY_API_KEY);

// Create a generation client to use with all future requests
const client = new GenerationServiceClient("https://grpc.stability.ai", {});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.body.prompt;
  const numberOfImages = req.body.n ? parseInt(req.body.n) : 1;
  const size = req.body.size;

  const request = buildGenerationRequest("stable-diffusion-512-v2-1", {
    type: "text-to-image",
    prompts: [
      {
        text: prompt,
      },
    ],
    width: 512,
    height: 512,
    samples: 5,
    cfgScale: 13,
    steps: 25,
    sampler: Generation.DiffusionSampler.SAMPLER_K_DPMPP_2M,
  });

  executeGenerationRequest(client, request, metadata)
    .then(onGenerationComplete)
    .then((response) => {
      let data: Datum[] = [];
      response.imageArtifacts.forEach((artifact: Generation.Artifact) => {
        const imageName = `image-${artifact.getSeed()}.png`;
        const imagePath = `${imageBank}/${imageName}`;
        try {
          fs.writeFileSync(imagePath, Buffer.from(artifact.getBinary_asU8()));
          data.push({
            seed: artifact.getSeed(),
            url: imagePath.replace("./public", ""),
          });
        } catch (error) {
          console.error("Failed to write resulting image to disk", error);
        }
      });

      return res.status(200).json({
        response: {
          data: data,
        },
      });
    })
    .catch((error) => {
      console.error("Failed to make text-to-image request:", error);
    });
}
