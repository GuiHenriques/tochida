import { creatures, objects, audios } from "./loader.js";

const practice_trials_1 = {
  order: "Practice 1",
  practice: [
    {
      // PT
      grid: [
        { creature: creatures[64], object: objects[1] },
        { creature: creatures[72], object: objects[3] },
        { creature: creatures[73], object: objects[4] },
        { creature: creatures[74], object: objects[5] },
      ],
      audio: audios[0],
    },
    {
      // PT
      grid: [
        { creature: creatures[75], object: objects[6] },
        { creature: creatures[76], object: objects[7] },
        { creature: creatures[65], object: objects[13] },
        { creature: creatures[77], object: objects[8] },
      ],
      audio: audios[0],
    },
    {
      // EN
      grid: [
        { creature: creatures[78], object: objects[9] },
        { creature: creatures[66], object: objects[3] },
        { creature: creatures[79], object: objects[10] },
        { creature: creatures[72], object: objects[11] },
      ],
      audio: audios[0],
    },
    {
      // EN
      grid: [
        { creature: creatures[73], object: objects[12] },
        { creature: creatures[74], object: objects[13] },
        { creature: creatures[75], object: objects[14] },
        { creature: creatures[67], object: objects[4] },
      ],
      audio: audios[0],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[76], object: objects[15] },
        { creature: creatures[77], object: objects[16] },
        { creature: creatures[68], object: objects[5] },
        { creature: creatures[78], object: objects[1] },
      ],
      audio: audios[0],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[79], object: objects[2] },
        { creature: creatures[72], object: objects[3] },
        { creature: creatures[73], object: objects[4] },
        { creature: creatures[69], object: objects[6] },
      ],
      audio: audios[0],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[70], object: objects[14] },
        { creature: creatures[74], object: objects[5] },
        { creature: creatures[75], object: objects[6] },
        { creature: creatures[76], object: objects[9] },
      ],
      audio: audios[0],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[77], object: objects[10] },
        { creature: creatures[71], object: objects[8] },
        { creature: creatures[78], object: objects[11] },
        { creature: creatures[79], object: objects[12] },
      ],
      audio: audios[0],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[75] },
        { creature: creatures[64] },
        { creature: creatures[65] },
        { creature: creatures[77] },
      ],
      audio: audios[8],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[64] },
        { creature: creatures[72] },
        { creature: creatures[73] },
        { creature: creatures[65] },
      ],
      audio: audios[9],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[73] },
        { creature: creatures[74] },
        { creature: creatures[66] },
        { creature: creatures[67] },
      ],
      audio: audios[10],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[67] },
        { creature: creatures[66] },
        { creature: creatures[79] },
        { creature: creatures[72] },
      ],
      audio: audios[11],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[68] },
        { creature: creatures[79] },
        { creature: creatures[72] },
        { creature: creatures[69] },
      ],
      audio: audios[12],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[76] },
        { creature: creatures[69] },
        { creature: creatures[68] },
        { creature: creatures[78] },
      ],
      audio: audios[13],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[77] },
        { creature: creatures[71] },
        { creature: creatures[70] },
        { creature: creatures[79] },
      ],
      audio: audios[14],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[70] },
        { creature: creatures[75] },
        { creature: creatures[76] },
        { creature: creatures[71] },
      ],
      audio: audios[15],
    },
  ],
};

const practice_trials_2 = {
  order: "Practice 2",
  practice: [
    {
      // EN
      grid: [
        { creature: creatures[74], object: objects[5] },
        { creature: creatures[68], object: objects[9] },
        { creature: creatures[75], object: objects[6] },
        { creature: creatures[76], object: objects[9] },
      ],
      audio: audios[1],
    },
    {
      // EN
      grid: [
        { creature: creatures[77], object: objects[10] },
        { creature: creatures[78], object: objects[11] },
        { creature: creatures[79], object: objects[12] },
        { creature: creatures[69], object: objects[10] },
      ],
      audio: audios[1],
    },
    {
      // PT
      grid: [
        { creature: creatures[78], object: objects[12] },
        { creature: creatures[79], object: objects[13] },
        { creature: creatures[72], object: objects[14] },
        { creature: creatures[66], object: objects[7] },
      ],
      audio: audios[1],
    },
    {
      // PT
      grid: [
        { creature: creatures[67], object: objects[15] },
        { creature: creatures[73], object: objects[9] },
        { creature: creatures[74], object: objects[10] },
        { creature: creatures[75], object: objects[11] },
      ],
      audio: audios[1],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[79], object: objects[2] },
        { creature: creatures[72], object: objects[5] },
        { creature: creatures[64], object: objects[11] },
        { creature: creatures[73], object: objects[7] },
      ],
      audio: audios[1],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[65], object: objects[6] },
        { creature: creatures[76], object: objects[14] },
        { creature: creatures[77], object: objects[15] },
        { creature: creatures[78], object: objects[16] },
      ],
      audio: audios[1],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[70], object: objects[13] },
        { creature: creatures[75], object: objects[3] },
        { creature: creatures[76], object: objects[7] },
        { creature: creatures[77], object: objects[8] },
      ],
      audio: audios[1],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[72], object: objects[1] },
        { creature: creatures[73], object: objects[4] },
        { creature: creatures[71], object: objects[14] },
        { creature: creatures[74], object: objects[5] },
      ],
      audio: audios[1],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[77] },
        { creature: creatures[78] },
        { creature: creatures[68] },
        { creature: creatures[69] },
      ],
      audio: audios[8],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[69] },
        { creature: creatures[74] },
        { creature: creatures[75] },
        { creature: creatures[68] },
      ],
      audio: audios[9],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[67] },
        { creature: creatures[73] },
        { creature: creatures[74] },
        { creature: creatures[66] },
      ],
      audio: audios[10],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[73] },
        { creature: creatures[67] },
        { creature: creatures[66] },
        { creature: creatures[75] },
      ],
      audio: audios[11],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[64] },
        { creature: creatures[76] },
        { creature: creatures[78] },
        { creature: creatures[65] },
      ],
      audio: audios[12],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[64] },
        { creature: creatures[72] },
        { creature: creatures[65] },
        { creature: creatures[73] },
      ],
      audio: audios[13],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[71] },
        { creature: creatures[70] },
        { creature: creatures[72] },
        { creature: creatures[74] },
      ],
      audio: audios[14],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[75] },
        { creature: creatures[70] },
        { creature: creatures[77] },
        { creature: creatures[71] },
      ],
      audio: audios[15],
    },
  ],
};

const practice_trials_3 = {
  order: "Practice 3",
  practice: [
    {
      // EN - PT
      grid: [
        { creature: creatures[75], object: objects[6] },
        { creature: creatures[76], object: objects[7] },
        { creature: creatures[77], object: objects[8] },
        { creature: creatures[65], object: objects[1] },
      ],
      audio: audios[0],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[72], object: objects[3] },
        { creature: creatures[73], object: objects[4] },
        { creature: creatures[74], object: objects[5] },
        { creature: creatures[64], object: objects[2] },
      ],
      audio: audios[1],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[78], object: objects[9] },
        { creature: creatures[67], object: objects[3] },
        { creature: creatures[79], object: objects[10] },
        { creature: creatures[72], object: objects[11] },
      ],
      audio: audios[0],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[73], object: objects[12] },
        { creature: creatures[74], object: objects[13] },
        { creature: creatures[66], object: objects[16] },
        { creature: creatures[75], object: objects[14] },
      ],
      audio: audios[1],
    },
    {
      // PT
      grid: [
        { creature: creatures[76], object: objects[2] },
        { creature: creatures[69], object: objects[5] },
        { creature: creatures[77], object: objects[3] },
        { creature: creatures[78], object: objects[4] },
      ],
      audio: audios[0],
    },
    {
      // PT
      grid: [
        { creature: creatures[68], object: objects[6] },
        { creature: creatures[79], object: objects[15] },
        { creature: creatures[72], object: objects[16] },
        { creature: creatures[73], object: objects[1] },
      ],
      audio: audios[1],
    },
    {
      // EN
      grid: [
        { creature: creatures[71], object: objects[7] },
        { creature: creatures[73], object: objects[10] },
        { creature: creatures[75], object: objects[11] },
        { creature: creatures[76], object: objects[12] },
      ],
      audio: audios[0],
    },
    {
      // EN
      grid: [
        { creature: creatures[77], object: objects[5] },
        { creature: creatures[78], object: objects[6] },
        { creature: creatures[79], object: objects[9] },
        { creature: creatures[70], object: objects[8] },
      ],
      audio: audios[1],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[65] },
        { creature: creatures[72] },
        { creature: creatures[73] },
        { creature: creatures[64] },
      ],
      audio: audios[8],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[75] },
        { creature: creatures[65] },
        { creature: creatures[77] },
        { creature: creatures[64] },
      ],
      audio: audios[9],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[66] },
        { creature: creatures[74] },
        { creature: creatures[75] },
        { creature: creatures[67] },
      ],
      audio: audios[10],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[78] },
        { creature: creatures[66] },
        { creature: creatures[67] },
        { creature: creatures[72] },
      ],
      audio: audios[11],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[68] },
        { creature: creatures[72] },
        { creature: creatures[69] },
        { creature: creatures[73] },
      ],
      audio: audios[12],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[76] },
        { creature: creatures[68] },
        { creature: creatures[77] },
        { creature: creatures[69] },
      ],
      audio: audios[13],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[77] },
        { creature: creatures[78] },
        { creature: creatures[70] },
        { creature: creatures[71] },
      ],
      audio: audios[14],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[74] },
        { creature: creatures[70] },
        { creature: creatures[71] },
        { creature: creatures[76] },
      ],
      audio: audios[15],
    },
  ],
};

const practice_trials_4 = {
  order: "Practice 4",
  practice: [
    {
      // PT - EN
      grid: [
        { creature: creatures[64], object: objects[11] },
        { creature: creatures[72], object: objects[6] },
        { creature: creatures[73], object: objects[7] },
        { creature: creatures[74], object: objects[8] },
      ],
      audio: audios[0],
    },
    {
      // PT - EN
      grid: [
        { creature: creatures[75], object: objects[3] },
        { creature: creatures[76], object: objects[4] },
        { creature: creatures[65], object: objects[1] },
        { creature: creatures[77], object: objects[5] },
      ],
      audio: audios[1],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[78], object: objects[12] },
        { creature: creatures[66], object: objects[8] },
        { creature: creatures[79], object: objects[13] },
        { creature: creatures[72], object: objects[14] },
      ],
      audio: audios[0],
    },
    {
      // EN - PT
      grid: [
        { creature: creatures[73], object: objects[9] },
        { creature: creatures[74], object: objects[10] },
        { creature: creatures[75], object: objects[11] },
        { creature: creatures[67], object: objects[6] },
      ],
      audio: audios[1],
    },
    {
      // EN
      grid: [
        { creature: creatures[79], object: objects[15] },
        { creature: creatures[72], object: objects[16] },
        { creature: creatures[68], object: objects[9] },
        { creature: creatures[73], object: objects[1] },
      ],
      audio: audios[0],
    },
    {
      // EN
      grid: [
        { creature: creatures[69], object: objects[10] },
        { creature: creatures[76], object: objects[2] },
        { creature: creatures[77], object: objects[3] },
        { creature: creatures[78], object: objects[4] },
      ],
      audio: audios[1],
    },
    {
      // PT
      grid: [
        { creature: creatures[77], object: objects[5] },
        { creature: creatures[78], object: objects[6] },
        { creature: creatures[79], object: objects[9] },
        { creature: creatures[70], object: objects[3] },
      ],
      audio: audios[0],
    },
    {
      // PT
      grid: [
        { creature: creatures[74], object: objects[10] },
        { creature: creatures[71], object: objects[4] },
        { creature: creatures[75], object: objects[11] },
        { creature: creatures[76], object: objects[12] },
      ],
      audio: audios[1],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[75] },
        { creature: creatures[76] },
        { creature: creatures[64] },
        { creature: creatures[65] },
      ],
      audio: audios[8],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[72] },
        { creature: creatures[65] },
        { creature: creatures[64] },
        { creature: creatures[74] },
      ],
      audio: audios[9],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[66] },
        { creature: creatures[73] },
        { creature: creatures[67] },
        { creature: creatures[75] },
      ],
      audio: audios[10],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[78] },
        { creature: creatures[79] },
        { creature: creatures[67] },
        { creature: creatures[66] },
      ],
      audio: audios[11],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[68] },
        { creature: creatures[69] },
        { creature: creatures[77] },
        { creature: creatures[78] },
      ],
      audio: audios[12],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[79] },
        { creature: creatures[69] },
        { creature: creatures[73] },
        { creature: creatures[68] },
      ],
      audio: audios[13],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[74] },
        { creature: creatures[75] },
        { creature: creatures[70] },
        { creature: creatures[71] },
      ],
      audio: audios[14],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[70] },
        { creature: creatures[77] },
        { creature: creatures[78] },
        { creature: creatures[71] },
      ],
      audio: audios[15],
    },
  ],
};


export { practice_trials_1, practice_trials_2, practice_trials_3, practice_trials_4 };
