import { creatures, objects, audios } from "./loader.js";

const trials_es_2 = {
  order: "2-ES",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[18], object: objects[3] },
        { creature: creatures[32], object: objects[0] },
        { creature: creatures[40], object: objects[7] },
        { creature: creatures[48], object: objects[15] },
      ],
      audio: audios[64],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[33], object: objects[0] },
        { creature: creatures[41], object: objects[1] },
        { creature: creatures[25], object: objects[2] },
        { creature: creatures[49], object: objects[3] },
      ],
      audio: audios[65],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[9], object: objects[10] },
        { creature: creatures[34], object: objects[8] },
        { creature: creatures[42], object: objects[2] },
        { creature: creatures[50], object: objects[9] },
      ],
      audio: audios[66],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[35], object: objects[10] },
        { creature: creatures[43], object: objects[2] },
        { creature: creatures[51], object: objects[4] },
        { creature: creatures[23], object: objects[11] },
      ],
      audio: audios[67],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[36], object: objects[11] },
        { creature: creatures[0], object: objects[6] },
        { creature: creatures[44], object: objects[3] },
        { creature: creatures[52], object: objects[5] },
      ],
      audio: audios[68],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[37], object: objects[12] },
        { creature: creatures[45], object: objects[4] },
        { creature: creatures[53], object: objects[6] },
        { creature: creatures[14], object: objects[1] },
      ],
      audio: audios[69],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[38], object: objects[13] },
        { creature: creatures[6], object: objects[8] },
        { creature: creatures[46], object: objects[5] },
        { creature: creatures[54], object: objects[7] },
      ],
      audio: audios[70],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[39], object: objects[14] },
        { creature: creatures[47], object: objects[6] },
        { creature: creatures[29], object: objects[3] },
        { creature: creatures[55], object: objects[8] },
      ],
      audio: audios[71],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[4] },
        { creature: creatures[32] },
        { creature: creatures[63] },
        { creature: creatures[0] },
      ],
      audio: audios[72],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[0] },
        { creature: creatures[36] },
        { creature: creatures[56] },
        { creature: creatures[18] },
      ],
      audio: audios[73],
    },
    
    {
      // Test 3
      grid: [
        { creature: creatures[14] },
        { creature: creatures[8] },
        { creature: creatures[40] },
        { creature: creatures[55] },
      ],
      audio: audios[74],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[12] },
        { creature: creatures[47] },
        { creature: creatures[25] },
        { creature: creatures[48] },
      ],
      audio: audios[75],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[16] },
        { creature: creatures[6] },
        { creature: creatures[48] },
        { creature: creatures[47] },
      ],
      audio: audios[76],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[20] },
        { creature: creatures[9] },
        { creature: creatures[55] },
        { creature: creatures[40] },
      ],
      audio: audios[77],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[24] },
        { creature: creatures[56] },
        { creature: creatures[29] },
        { creature: creatures[39] },
      ],
      audio: audios[78],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[23] },
        { creature: creatures[28] },
        { creature: creatures[63] },
        { creature: creatures[32] },
      ],
      audio: audios[79],
    },],
};

const trials_pt_2 = {
  order: "2-PT",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[48], object: objects[9] },
        { creature: creatures[12], object: objects[6] },
        { creature: creatures[56], object: objects[1] },
        { creature: creatures[39], object: objects[9] },
      ],
      audio: audios[80],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[49], object: objects[13] },
        { creature: creatures[57], object: objects[2] },
        { creature: creatures[5], object: objects[10] },
        { creature: creatures[38], object: objects[11] },
      ],
      audio: audios[81],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[50], object: objects[10] },
        { creature: creatures[58], object: objects[3] },
        { creature: creatures[37], object: objects[11] },
        { creature: creatures[19], object: objects[1] },
      ],
      audio: audios[82],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[51], object: objects[12] },
        { creature: creatures[27], object: objects[4] },
        { creature: creatures[59], object: objects[5] },
        { creature: creatures[36], object: objects[12] },
      ],
      audio: audios[83],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[52], object: objects[10] },
        { creature: creatures[60], object: objects[4] },
        { creature: creatures[11], object: objects[11] },
        { creature: creatures[35], object: objects[13] },
      ],
      audio: audios[84],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[4], object: objects[7] },
        { creature: creatures[53], object: objects[14] },
        { creature: creatures[61], object: objects[6] },
        { creature: creatures[34], object: objects[14] },
      ],
      audio: audios[85],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[54], object: objects[0] },
        { creature: creatures[62], object: objects[7] },
        { creature: creatures[33], object: objects[1] },
        { creature: creatures[28], object: objects[15] },
      ],
      audio: audios[86],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[31], object: objects[14] },
        { creature: creatures[55], object: objects[15] },
        { creature: creatures[63], object: objects[8] },
        { creature: creatures[32], object: objects[2] },
      ],
      audio: audios[87],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[1] },
        { creature: creatures[31] },
        { creature: creatures[33] },
        { creature: creatures[62] },
      ],
      audio: audios[88],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[5] },
        { creature: creatures[37] },
        { creature: creatures[27] },
        { creature: creatures[57] },
      ],
      audio: audios[89],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[9] },
        { creature: creatures[41] },
        { creature: creatures[54] },
        { creature: creatures[4] },
      ],
      audio: audios[90],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[12] },
        { creature: creatures[13] },
        { creature: creatures[46] },
        { creature: creatures[49] },
      ],
      audio: audios[91],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[17] },
        { creature: creatures[49] },
        { creature: creatures[11] },
        { creature: creatures[46] },
      ],
      audio: audios[92],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[28] },
        { creature: creatures[21] },
        { creature: creatures[54] },
        { creature: creatures[41] },
      ],
      audio: audios[93],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[25] },
        { creature: creatures[57] },
        { creature: creatures[38] },
        { creature: creatures[5] },
      ],
      audio: audios[94],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[29] },
        { creature: creatures[19] },
        { creature: creatures[62] },
        { creature: creatures[33] },
      ],
      audio: audios[95],
    },],
};

const trials_pt_es_2 = {
  order: "2-PT-ES",
  learn: [
  // Trial 1
  {
    grid: [
      { creature: creatures[40], object: objects[3] },
      { creature: creatures[48], object: objects[11] },
      { creature: creatures[26], object: objects[9] },
      { creature: creatures[56], object: objects[4] },
    ],
    audio: audios[96],
  },
  // Trial 2
  {
    grid: [
      { creature: creatures[41], object: objects[4] },
      { creature: creatures[1], object: objects[5] },
      { creature: creatures[49], object: objects[12] },
      { creature: creatures[57], object: objects[3] },
    ],
    audio: audios[97],
  },
  // Trial 3
  {
    grid: [
      { creature: creatures[13], object: objects[2] },
      { creature: creatures[42], object: objects[5] },
      { creature: creatures[50], object: objects[13] },
      { creature: creatures[58], object: objects[6] },
    ],
    audio: audios[98],
  },
  // Trial 4
  {
    grid: [
      { creature: creatures[43], object: objects[6] },
      { creature: creatures[51], object: objects[14] },
      { creature: creatures[59], object: objects[5] },
      { creature: creatures[3], object: objects[12] },
    ],
    audio: audios[99],
  },
  // Trial 5
  {
    grid: [
      { creature: creatures[44], object: objects[7] },
      { creature: creatures[52], object: objects[15] },
      { creature: creatures[60], object: objects[8] },
      { creature: creatures[20], object: objects[13] },
    ],
    audio: audios[100],
  },
  // Trial 6
  {
    grid: [
      { creature: creatures[45], object: objects[8] },
      { creature: creatures[7], object: objects[0] },
      { creature: creatures[53], object: objects[1] },
      { creature: creatures[61], object: objects[7] },
    ],
    audio: audios[101],
  },
  // Trial 7
  {
    grid: [
      { creature: creatures[24], object: objects[7] },
      { creature: creatures[46], object: objects[9] },
      { creature: creatures[54], object: objects[0] },
      { creature: creatures[62], object: objects[10] },
    ],
    audio: audios[102],
  },
  // Trial 8
  {
    grid: [
      { creature: creatures[47], object: objects[9] },
      { creature: creatures[55], object: objects[2] },
      { creature: creatures[17], object: objects[15] },
      { creature: creatures[63], object: objects[10] },
    ],
    audio: audios[103],
  },
],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[2] },
        { creature: creatures[34] },
        { creature: creatures[61] },
        { creature: creatures[26] },
      ],
      audio: audios[104],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[6] },
        { creature: creatures[38] },
        { creature: creatures[3] },
        { creature: creatures[58] },
      ],
      audio: audios[105],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[10] },
        { creature: creatures[1] },
        { creature: creatures[42] },
        { creature: creatures[53] },
      ],
      audio: audios[106],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[14] },
        { creature: creatures[45] },
        { creature: creatures[20] },
        { creature: creatures[50] },
      ],
      audio: audios[107],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[13] },
        { creature: creatures[18] },
        { creature: creatures[50] },
        { creature: creatures[45] },
      ],
      audio: audios[108],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[17] },
        { creature: creatures[22] },
        { creature: creatures[53] },
        { creature: creatures[42] },
      ],
      audio: audios[109],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[26] },
        { creature: creatures[7] },
        { creature: creatures[58] },
        { creature: creatures[37] },
      ],
      audio: audios[110],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[30] },
        { creature: creatures[61] },
        { creature: creatures[34] },
        { creature: creatures[24] },
      ],
      audio: audios[111],
    },],
}

const trials_es_pt_2 = {
  order: "2-ES-PT",
  learn: [
  // Trial 1
  {
    grid: [
      { creature: creatures[2], object: objects[9] },
      { creature: creatures[56], object: objects[10] },
      { creature: creatures[32], object: objects[15] },
      { creature: creatures[40], object: objects[7] },
    ],
    audio: audios[112],
  },
  // Trial 2
  {
    grid: [
      { creature: creatures[57], object: objects[8] },
      { creature: creatures[33], object: objects[13] },
      { creature: creatures[10], object: objects[5] },
      { creature: creatures[41], object: objects[6] },
    ],
    audio: audios[113],
  },
  // Trial 3
  {
    grid: [
      { creature: creatures[58], object: objects[7] },
      { creature: creatures[16], object: objects[13] },
      { creature: creatures[34], object: objects[14] },
      { creature: creatures[42], object: objects[5] },
    ],
    audio: audios[114],
  },
  // Trial 4
  {
    grid: [
      { creature: creatures[21], object: objects[14] },
      { creature: creatures[59], object: objects[6] },
      { creature: creatures[35], object: objects[12] },
      { creature: creatures[43], object: objects[4] },
    ],
    audio: audios[115],
  },
  // Trial 5
  {
    grid: [
      { creature: creatures[60], object: objects[5] },
      { creature: creatures[36], object: objects[11] },
      { creature: creatures[44], object: objects[3] },
      { creature: creatures[15], object: objects[4] },
    ],
    audio: audios[116],
  },
  // Trial 6
  {
    grid: [
      { creature: creatures[61], object: objects[3] },
      { creature: creatures[37], object: objects[10] },
      { creature: creatures[22], object: objects[12] },
      { creature: creatures[45], object: objects[2] },
    ],
    audio: audios[117],
  },
  // Trial 7
  {
    grid: [
      { creature: creatures[62], object: objects[0] },
      { creature: creatures[38], object: objects[9] },
      { creature: creatures[46], object: objects[1] },
      { creature: creatures[8], object: objects[8] },
    ],
    audio: audios[118],
  },
  // Trial 8
  {
    grid: [
      { creature: creatures[63], object: objects[1] },
      { creature: creatures[30], object: objects[0] },
      { creature: creatures[39], object: objects[8] },
      { creature: creatures[47], object: objects[9] },
    ],
    audio: audios[119],
  },
],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[3] },
        { creature: creatures[16] },
        { creature: creatures[35] },
        { creature: creatures[60] },
      ],
      audio: audios[120],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[2] },
        { creature: creatures[7] },
        { creature: creatures[39] },
        { creature: creatures[59] },
      ],
      audio: audios[121],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[11] },
        { creature: creatures[43] },
        { creature: creatures[15] },
        { creature: creatures[52] },
      ],
      audio: audios[122],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[30] },
        { creature: creatures[15] },
        { creature: creatures[44] },
        { creature: creatures[51] },
      ],
      audio: audios[123],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[19] },
        { creature: creatures[10] },
        { creature: creatures[51] },
        { creature: creatures[44] },
      ],
      audio: audios[124],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[23] },
        { creature: creatures[52] },
        { creature: creatures[43] },
        { creature: creatures[8] },
      ],
      audio: audios[125],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[27] },
        { creature: creatures[59] },
        { creature: creatures[26] },
        { creature: creatures[22] },
      ],
      audio: audios[126],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[31] },
        { creature: creatures[60] },
        { creature: creatures[35] },
        { creature: creatures[21] },
      ],
      audio: audios[127],
    },],
}

export { trials_es_2, trials_pt_2, trials_pt_es_2, trials_es_pt_2 };