export interface Datum {
  url: string;
  seed?: number;
  sampler?: number;
}

export interface PromptResponse {
  prompt?: {
    prompt: string;
    size: string;
    n: number;
  };
  response?: {
    created: number;
    data: Datum[];
  };
}
