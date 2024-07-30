import { creatures, objects, audios } from "./loader.js";

const trials_pt = {
  order: "pt",
  learn: [
    {
      grid: [
        { creature: creatures[0], object: objects[0] },
        { creature: creatures[0], object: objects[0] },
        { creature: creatures[0], object: objects[0] },
        { creature: creatures[0], object: objects[0] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[1], object: objects[1] },
        { creature: creatures[1], object: objects[1] },
        { creature: creatures[1], object: objects[1] },
        { creature: creatures[1], object: objects[1] },
      ],
      audio: audios[1],
    },
    {
      grid: [
        { creature: creatures[2], object: objects[2] },
        { creature: creatures[2], object: objects[2] },
        { creature: creatures[2], object: objects[2] },
        { creature: creatures[2], object: objects[2] },
      ],
      audio: audios[2],
    },
  ],
  test: [
    {
      grid: [
        { creature: creatures[0] },
        { creature: creatures[0] },
        { creature: creatures[0] },
        { creature: creatures[0] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[1] },
        { creature: creatures[1] },
        { creature: creatures[1] },
        { creature: creatures[1] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[2] },
        { creature: creatures[2] },
        { creature: creatures[2] },
        { creature: creatures[2] },
      ],
      audio: audios[0],
    },
  ],
};

const trials_es = {
  order: "es",
  learn: [
    {
      grid: [
        { creature: creatures[3], object: objects[3] },
        { creature: creatures[3], object: objects[3] },
        { creature: creatures[3], object: objects[3] },
        { creature: creatures[3], object: objects[3] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[4], object: objects[4] },
        { creature: creatures[4], object: objects[4] },
        { creature: creatures[4], object: objects[4] },
        { creature: creatures[4], object: objects[4] },
      ],
      audio: audios[1],
    },
    {
      grid: [
        { creature: creatures[5], object: objects[5] },
        { creature: creatures[5], object: objects[5] },
        { creature: creatures[5], object: objects[5] },
        { creature: creatures[5], object: objects[5] },
      ],
      audio: audios[2],
    },
  ],
  test: [
    {
      grid: [
        { creature: creatures[3] },
        { creature: creatures[3] },
        { creature: creatures[3] },
        { creature: creatures[3] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[4] },
        { creature: creatures[4] },
        { creature: creatures[4] },
        { creature: creatures[4] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[5] },
        { creature: creatures[5] },
        { creature: creatures[5] },
        { creature: creatures[5] },
      ],
      audio: audios[0],
    },
  ],
};


export { trials_pt, trials_es };
