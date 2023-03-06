import { NextApiRequest, NextApiResponse } from "next";

import {
  buildGenerationRequest,
  executeGenerationRequest,
  onGenerationComplete,
} from "../../clients/stability/imageClient";

import * as Generation from "../../clients/stability/lib/generation_pb";
import { GenerationServiceClient } from "../../clients/stability/lib/generation_pb_service";
import { grpc as GRPCWeb } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";

import { Datum, PromptResponse } from "../../models/Dalli";

import fs from "fs";
import { Datum } from "lucid-cardano/types/src/core/wasm_modules/cardano_multiplatform_lib_web/cardano_multiplatform_lib";

const stabilityImageBank = process.env.STABILITY_IMAGE_BANK;
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
  const intSeed = parseInt(req.body.seed);
  const steps = parseInt(req.body.steps);
  const seed = intSeed > 1 ? intSeed : 0;
  const size = req.body.size;

  console.log("seed ", seed);
  console.log("steps ", steps);

  const buildPayload = async (seed, sampleId) => {
    let data: Datum[] = [];
    const request = await buildGenerationRequest("stable-diffusion-512-v2-1", {
      type: "text-to-image",
      prompts: [
        {
          text: prompt,
        },
      ],
      width: 512,
      height: 512,
      samples: 1, //numberOfImages,
      cfgScale: 17,
      steps: steps > 4 ? steps : 25,
      sampler: sampleId, //Generation.DiffusionSampler.SAMPLER_K_EULER,
      seed: seed,
    });

    return executeGenerationRequest(client, request, metadata)
      .then(onGenerationComplete)
      .then((response) => {
        response.imageArtifacts.forEach((artifact: Generation.Artifact) => {
          const imageName = `image-${artifact.getSeed()}.png`;
          const imagePath = `${stabilityImageBank}/${imageName}`;
          try {
            fs.writeFileSync(imagePath, Buffer.from(artifact.getBinary_asU8()));
            data.push({
              seed: artifact.getSeed(),
              url: imagePath.replace("./public", ""),
              sampler: sampleId,
            });
          } catch (error) {
            console.error("Failed to write resulting image to disk", error);
          }
        });
        return data;
      })
      .catch((error) => {
        console.error("Failed to make text-to-image request:", error);
        return data;
      });
  };

  let images: Datum[] = [];
  for (let i = 1; i < 11; i++) {
    const m = await buildPayload(seed, i).then((rrr) => {
      images.push(...rrr);
    });
  }

  return res.json({
    response: {
      data: images,
    },
  });
}
