import { Transaction, ForgeScript } from "@meshsdk/core";
import type { Mint, AssetMetadata } from "@meshsdk/core";
import wallet from "./wallet";

// prepare forgingScript
const usedAddress = await wallet.getUsedAddresses();
const address = usedAddress[0];
const forgingScript = ForgeScript.withOneSignature(address);

const tx = new Transaction({ initiator: wallet });


const assetMetadata1: AssetMetadata = {
    "name": "Mesh Token",
    "image": "ipfs://QmQ7TRH5z9TPwmyXsHNseBjKM7Gnaa3iuxEnbKMVBgzySX",
    "mediaType": "image/jpg",
    "description": "This NFT is minted by Mesh (https://meshjs.dev/)."
};
const asset1: Mint = {
    assetName: "MeshToken",
    assetQuantity: "1",
    metadata: assetMetadata1,
    label: "721",
    recipient: "addr_test1vpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0c7e4cxr",
};
tx.mintAsset(forgingScript, asset1);

const unsignedTx = await tx.build();
const signedTx = await wallet.signTx(unsignedTx);
const txHash = await wallet.submitTx(signedTx);