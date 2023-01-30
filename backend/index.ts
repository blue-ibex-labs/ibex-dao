import axios from "axios";

const instance = axios.create({
  baseURL: `/api/`,
  withCredentials: true,
});

export async function post(route: string, body = {}) {
  return await instance
    .post(`${route}`, body)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export async function backendGetNonce(userAddress: string) {
  return await post(`get-nonce`, { userAddress });
}

export async function backendVerifySignature(
  nonce: string,
  userAddress: string,
  signature: string
) {
  return await post(`verify-signature`, { nonce, userAddress, signature });
}
