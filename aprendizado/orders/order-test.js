import { creatures, objects, audios } from './loader.js';

const trials_pt = {
  learn: [
    {
      grid: [
        { creature: creatures[1], object: objects[0] },
        { creature: creatures[23], object: objects[6] },
        { creature: creatures[33], object: objects[13] },
        { creature: creatures[57], object: objects[15] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[6], object: objects[14] },
        { creature: creatures[58], object: objects[8] },
        { creature: creatures[32], object: objects[1] },
        { creature: creatures[34], object: objects[7] },
      ],
      audio: audios[1],
    },
    {
      grid: [
        { creature: creatures[59], object: objects[4] },
        { creature: creatures[22], object: objects[0] },
        { creature: creatures[17], object: objects[1] },
        { creature: creatures[25], object: objects[6] },
      ],
      audio: audios[2],
    },
  ],
  test: [
    [
      { creature: creatures[1] },
      { creature: creatures[23] },
      { creature: creatures[33] },
      { creature: creatures[57] },
    ],
    [
      { creature: creatures[6] },
      { creature: creatures[58] },
      { creature: creatures[32] },
      { creature: creatures[34] },
    ],
    [
      { creature: creatures[59] },
      { creature: creatures[22] },
      { creature: creatures[17] },
      { creature: creatures[25] },
    ],
  ],
};

const trials_es = {
  learn: [
    {
      grid: [
        { creature: creatures[1], object: objects[0] },
        { creature: creatures[23], object: objects[6] },
        { creature: creatures[33], object: objects[13] },
        { creature: creatures[57], object: objects[15] },
      ],
      audio: audios[0],
    },
    {
      grid: [
        { creature: creatures[6], object: objects[14] },
        { creature: creatures[58], object: objects[8] },
        { creature: creatures[32], object: objects[1] },
        { creature: creatures[34], object: objects[7] },
      ],
      audio: audios[1],
    },
    {
      grid: [
        { creature: creatures[59], object: objects[4] },
        { creature: creatures[22], object: objects[0] },
        { creature: creatures[17], object: objects[1] },
        { creature: creatures[25], object: objects[6] },
      ],
      audio: audios[2],
    },
  ],
  test: [
    [
      { creature: creatures[1] },
      { creature: creatures[23] },
      { creature: creatures[33] },
      { creature: creatures[57] },
    ],
    [
      { creature: creatures[6] },
      { creature: creatures[58] },
      { creature: creatures[32] },
      { creature: creatures[34] },
    ],
    [
      { creature: creatures[59] },
      { creature: creatures[22] },
      { creature: creatures[17] },
      { creature: creatures[25] },
    ],
  ],
};


// const trials_pt_es = [];

// const trials_es_pt = [];

export { trials_pt };
