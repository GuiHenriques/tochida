import { creatures, objects, audios } from "./loader.js";

const trials_pt_1 = {
  order: "1-PT",
  learn: [
    {
      // Trial 1
      grid: [
        { creature: creatures[5], object: objects[0] },
        { creature: creatures[32], object: objects[6] },
        { creature: creatures[60], object: objects[13] },
        { creature: creatures[40], object: objects[15] },
      ],
      audio: audios[0],
    },
    {
      // Trial 2
      grid: [
        { creature: creatures[36], object: objects[14] },
        { creature: creatures[0], object: objects[8] },
        { creature: creatures[56], object: objects[1] },
        { creature: creatures[32], object: objects[7] },
      ],
      audio: audios[1],
    },
    {
      // Trial 3
      grid: [
        { creature: creatures[40], object: objects[4] },
        { creature: creatures[52], object: objects[0] },
        { creature: creatures[16], object: objects[1] },
        { creature: creatures[36], object: objects[6] },
      ],
      audio: audios[2],
    },
    {
      // Trial 4
      grid: [
        { creature: creatures[44], object: objects[8] },
        { creature: creatures[48], object: objects[1] },
        { creature: creatures[60], object: objects[5] },
        { creature: creatures[28], object: objects[9] },
      ],
      audio: audios[3],
    },
    {
      // Trial 5
      grid: [
        { creature: creatures[48], object: objects[0] },
        { creature: creatures[44], object: objects[3] },
        { creature: creatures[22], object: objects[2] },
        { creature: creatures[56], object: objects[9] },
      ],
      audio: audios[4],
    },
    {
      // Trial 6
      grid: [
        { creature: creatures[52], object: objects[2] },
        { creature: creatures[3], object: objects[10] },
        { creature: creatures[40], object: objects[11] },
        { creature: creatures[44], object: objects[3] },
      ],
      audio: audios[5],
    },
    {
      // Trial 7
      grid: [
        { creature: creatures[56], object: objects[3] },
        { creature: creatures[36], object: objects[2] },
        { creature: creatures[52], object: objects[10] },
        { creature: creatures[15], object: objects[4] },
      ],
      audio: audios[6],
    },
    {
      // Trial 8
      grid: [
        { creature: creatures[9], object: objects[11] },
        { creature: creatures[60], object: objects[7] },
        { creature: creatures[32], object: objects[5] },
        { creature: creatures[48], object: objects[12] },
      ],
      audio: audios[7],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[0] },
        { creature: creatures[22] },
        { creature: creatures[32] },
        { creature: creatures[56] },
      ],
      audio: audios[8],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[5] },
        { creature: creatures[57] },
        { creature: creatures[31] },
        { creature: creatures[33] },
      ],
      audio: audios[9],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[58] },
        { creature: creatures[21] },
        { creature: creatures[16] },
        { creature: creatures[34] },
      ],
      audio: audios[10],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[7] },
        { creature: creatures[0] },
        { creature: creatures[59] },
        { creature: creatures[35] },
      ],
      audio: audios[11],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[60] },
        { creature: creatures[28] },
        { creature: creatures[36] },
        { creature: creatures[3] },
      ],
      audio: audios[12],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[61] },
        { creature: creatures[22] },
        { creature: creatures[28] },
        { creature: creatures[37] },
      ],
      audio: audios[13],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[9] },
        { creature: creatures[62] },
        { creature: creatures[6] },
        { creature: creatures[38] },
      ],
      audio: audios[14],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[63] },
        { creature: creatures[29] },
        { creature: creatures[39] },
        { creature: creatures[15] },
      ],
      audio: audios[15],
    },
  ],
};

const trials_es_1 = {
  order: "1-ES",
  learn: [
    {
      // Trial 1
      grid: [
        { creature: creatures[33], object: objects[8] },
        { creature: creatures[61], object: objects[15] },
        { creature: creatures[23], object: objects[12] },
        { creature: creatures[41], object: objects[9] },
      ],
      audio: audios[16],
    },
    {
      // Trial 2
      grid: [
        { creature: creatures[37], object: objects[0] },
        { creature: creatures[57], object: objects[9] },
        { creature: creatures[33], object: objects[10] },
        { creature: creatures[11], object: objects[4] },
      ],
      audio: audios[17],
    },
    {
      // Trial 3
      grid: [
        { creature: creatures[21], object: objects[13] },
        { creature: creatures[41], object: objects[1] },
        { creature: creatures[53], object: objects[11] },
        { creature: creatures[37], object: objects[8] },
      ],
      audio: audios[18],
    },
    {
      // Trial 4
      grid: [
        { creature: creatures[45], object: objects[10] },
        { creature: creatures[17], object: objects[5] },
        { creature: creatures[49], object: objects[2] },
        { creature: creatures[61], object: objects[13] },
      ],
      audio: audios[19],
    },
    {
      // Trial 5
      grid: [
        { creature: creatures[2], object: objects[14] },
        { creature: creatures[49], object: objects[3] },
        { creature: creatures[45], object: objects[11] },
        { creature: creatures[57], object: objects[7] },
      ],
      audio: audios[20],
    },
    {
      // Trial 6
      grid: [
        { creature: creatures[53], object: objects[4] },
        { creature: creatures[41], object: objects[12] },
        { creature: creatures[45], object: objects[13] },
        { creature: creatures[8], object: objects[6] },
      ],
      audio: audios[21],
    },
    {
      // Trial 7
      grid: [
        { creature: creatures[27], object: objects[15] },
        { creature: creatures[57], object: objects[5] },
        { creature: creatures[37], object: objects[13] },
        { creature: creatures[53], object: objects[14] },
      ],
      audio: audios[22],
    },
    {
      // Trial 8
      grid: [
        { creature: creatures[61], object: objects[6] },
        { creature: creatures[33], object: objects[14] },
        { creature: creatures[29], object: objects[7] },
        { creature: creatures[49], object: objects[15] },
      ],
      audio: audios[23],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[40] },
        { creature: creatures[21] },
        { creature: creatures[11] },
        { creature: creatures[48] },
      ],
      audio: audios[24],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[41] },
        { creature: creatures[1] },
        { creature: creatures[8] },
        { creature: creatures[49] },
      ],
      audio: audios[25],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[23] },
        { creature: creatures[42] },
        { creature: creatures[20] },
        { creature: creatures[50] },
      ],
      audio: audios[26],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[43] },
        { creature: creatures[11] },
        { creature: creatures[23] },
        { creature: creatures[51] },
      ],
      audio: audios[27],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[29] },
        { creature: creatures[44] },
        { creature: creatures[8] },
        { creature: creatures[52] },
      ],
      audio: audios[28],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[45] },
        { creature: creatures[14] },
        { creature: creatures[2] },
        { creature: creatures[53] },
      ],
      audio: audios[29],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[46] },
        { creature: creatures[5] },
        { creature: creatures[27] },
        { creature: creatures[54] },
      ],
      audio: audios[30],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[47] },
        { creature: creatures[27] },
        { creature: creatures[17] },
        { creature: creatures[55] },
      ],
      audio: audios[31],
    },
  ],
};

const trials_es_pt_1 = {
  order: "1-ES-PT",
  learn: [
    {
      // Trial 1
      grid: [
        { creature: creatures[35], object: objects[4] },
        { creature: creatures[63], object: objects[3] },
        { creature: creatures[43], object: objects[10] },
        { creature: creatures[30], object: objects[9] },
      ],
      audio: audios[32],
    },
    {
      // Trial 2
      grid: [
        { creature: creatures[39], object: objects[3] },
        { creature: creatures[59], object: objects[4] },
        { creature: creatures[14], object: objects[1] },
        { creature: creatures[35], object: objects[11] },
      ],
      audio: audios[33],
    },
    {
      // Trial 3
      grid: [
        { creature: creatures[26], object: objects[7] },
        { creature: creatures[43], object: objects[1] },
        { creature: creatures[55], object: objects[12] },
        { creature: creatures[39], object: objects[9] },
      ],
      audio: audios[34],
    },
    {
      // Trial 4
      grid: [
        { creature: creatures[47], object: objects[8] },
        { creature: creatures[6], object: objects[5] },
        { creature: creatures[51], object: objects[13] },
        { creature: creatures[63], object: objects[0] },
      ],
      audio: audios[35],
    },
    {
      // Trial 5
      grid: [
        { creature: creatures[12], object: objects[3] },
        { creature: creatures[51], object: objects[7] },
        { creature: creatures[47], object: objects[14] },
        { creature: creatures[59], object: objects[5] },
      ],
      audio: audios[36],
    },
    {
      // Trial 6
      grid: [
        { creature: creatures[55], object: objects[2] },
        { creature: creatures[25], object: objects[13] },
        { creature: creatures[43], object: objects[15] },
        { creature: creatures[47], object: objects[0] },
      ],
      audio: audios[37],
    },
    {
      // Trial 7
      grid: [
        { creature: creatures[59], object: objects[5] },
        { creature: creatures[39], object: objects[1] },
        { creature: creatures[31], object: objects[11] },
        { creature: creatures[55], object: objects[6] },
      ],
      audio: audios[38],
    },
    {
      // Trial 8
      grid: [
        { creature: creatures[63], object: objects[6] },
        { creature: creatures[35], object: objects[7] },
        { creature: creatures[51], object: objects[2] },
        { creature: creatures[19], object: objects[15] },
      ],
      audio: audios[39],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[12] },
        { creature: creatures[48] },
        { creature: creatures[19] },
        { creature: creatures[49] },
      ],
      audio: audios[40],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[49] },
        { creature: creatures[25] },
        { creature: creatures[24] },
        { creature: creatures[46] },
      ],
      audio: audios[41],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[50] },
        { creature: creatures[12] },
        { creature: creatures[26] },
        { creature: creatures[45] },
      ],
      audio: audios[42],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[51] },
        { creature: creatures[44] },
        { creature: creatures[19] },
        { creature: creatures[2] },
      ],
      audio: audios[43],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[30] },
        { creature: creatures[52] },
        { creature: creatures[9] },
        { creature: creatures[43] },
      ],
      audio: audios[44],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[53] },
        { creature: creatures[15] },
        { creature: creatures[42] },
        { creature: creatures[14] },
      ],
      audio: audios[45],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[4] },
        { creature: creatures[31] },
        { creature: creatures[54] },
        { creature: creatures[41] },
      ],
      audio: audios[46],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[55] },
        { creature: creatures[16] },
        { creature: creatures[40] },
        { creature: creatures[6] },
      ],
      audio: audios[47],
    },
  ],
};

const trials_pt_es_1 = {
  order: "1-PT-ES", 
  learn: [
    {
      // Trial 1
      grid: [
        { creature: creatures[34], object: objects[8] },
        { creature: creatures[62], object: objects[0] },
        { creature: creatures[42], object: objects[1] },
        { creature: creatures[1], object: objects[6] },
      ],
      audio: audios[48],
    },
    {
      // Trial 2
      grid: [
        { creature: creatures[38], object: objects[9] },
        { creature: creatures[10], object: objects[8] },
        { creature: creatures[58], object: objects[1] },
        { creature: creatures[34], object: objects[0] },
      ],
      audio: audios[49],
    },
    {
      // Trial 3
      grid: [
        { creature: creatures[42], object: objects[10] },
        { creature: creatures[7], object: objects[4] },
        { creature: creatures[54], object: objects[2] },
        { creature: creatures[38], object: objects[3] },
      ],
      audio: audios[50],
    },
    {
      // Trial 4
      grid: [
        { creature: creatures[13], object: objects[14] },
        { creature: creatures[46], object: objects[11] },
        { creature: creatures[50], object: objects[3] },
        { creature: creatures[62], object: objects[2] },
      ],
      audio: audios[51],
    },
    {
      // Trial 5
      grid: [
        { creature: creatures[50], object: objects[12] },
        { creature: creatures[46], object: objects[4] },
        { creature: creatures[24], object: objects[2] },
        { creature: creatures[58], object: objects[5] },
      ],
      audio: audios[52],
    },
    {
      // Trial 6
      grid: [
        { creature: creatures[54], object: objects[13] },
        { creature: creatures[42], object: objects[5] },
        { creature: creatures[46], object: objects[4] },
        { creature: creatures[18], object: objects[12] },
      ],
      audio: audios[53],
    },
    {
      // Trial 7
      grid: [
        { creature: creatures[58], object: objects[14] },
        { creature: creatures[4], object: objects[0] },
        { creature: creatures[38], object: objects[6] },
        { creature: creatures[54], object: objects[7] },
      ],
      audio: audios[54],
    },
    {
      // Trial 8
      grid: [
        { creature: creatures[20], object: objects[10] },
        { creature: creatures[62], object: objects[15] },
        { creature: creatures[34], object: objects[7] },
        { creature: creatures[50], object: objects[6] },
      ],
      audio: audios[55],
    },
  ],
  test: [
    {
      // Test 1
      grid: [
        { creature: creatures[56] },
        { creature: creatures[24] },
        { creature: creatures[18] },
        { creature: creatures[39] },
      ],
      audio: audios[56],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[18] },
        { creature: creatures[57] },
        { creature: creatures[3] },
        { creature: creatures[38] },
      ],
      audio: audios[57],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[58] },
        { creature: creatures[26] },
        { creature: creatures[37] },
        { creature: creatures[7] },
      ],
      audio: audios[58],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[20] },
        { creature: creatures[59] },
        { creature: creatures[25] },
        { creature: creatures[36] },
      ],
      audio: audios[59],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[60] },
        { creature: creatures[10] },
        { creature: creatures[35] },
        { creature: creatures[1] },
      ],
      audio: audios[60],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[61] },
        { creature: creatures[10] },
        { creature: creatures[30] },
        { creature: creatures[34] },
      ],
      audio: audios[61],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[62] },
        { creature: creatures[13] },
        { creature: creatures[4] },
        { creature: creatures[33] },
      ],
      audio: audios[62],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[63] },
        { creature: creatures[17] },
        { creature: creatures[13] },
        { creature: creatures[32] },
      ],
      audio: audios[63],
    },
  ],
};

export { trials_pt_1, trials_es_1, trials_pt_es_1, trials_es_pt_1 };
