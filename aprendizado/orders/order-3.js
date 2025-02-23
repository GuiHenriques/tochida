import { creatures, objects, audios } from "./loader.js";

const trials_es_pt_3 = {
  order: "3-ES-PT",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[32], object: objects[16] },
        { creature: creatures[33], object: objects[15] },
        { creature: creatures[34], object: objects[14] },
        { creature: creatures[3], object: objects[1] },
      ],
      audio: audios[128],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[35], object: objects[13] },
        { creature: creatures[2], object: objects[2] },
        { creature: creatures[36], object: objects[12] },
        { creature: creatures[37], object: objects[11] },
      ],
      audio: audios[129],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[38], object: objects[10] },
        { creature: creatures[39], object: objects[9] },
        { creature: creatures[40], object: objects[8] },
        { creature: creatures[1], object: objects[3] },
      ],
      audio: audios[130],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[0], object: objects[4] },
        { creature: creatures[41], object: objects[7] },
        { creature: creatures[42], object: objects[6] },
        { creature: creatures[43], object: objects[5] },
      ],
      audio: audios[131],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[44], object: objects[4] },
        { creature: creatures[45], object: objects[3] },
        { creature: creatures[7], object: objects[10] },
        { creature: creatures[46], object: objects[2] },
      ],
      audio: audios[132],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[47], object: objects[1] },
        { creature: creatures[6], object: objects[11] },
        { creature: creatures[48], object: objects[16] },
        { creature: creatures[49], object: objects[15] },
      ],
      audio: audios[133],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[50], object: objects[14] },
        { creature: creatures[51], object: objects[13] },
        { creature: creatures[5], object: objects[12] },
        { creature: creatures[52], object: objects[1] },
      ],
      audio: audios[134],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[4], object: objects[13] },
        { creature: creatures[53], object: objects[12] },
        { creature: creatures[54], object: objects[2] },
        { creature: creatures[55], object: objects[3] },
      ],
      audio: audios[135],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[7] },
        { creature: creatures[0] },
        { creature: creatures[42] },
        { creature: creatures[43] },
      ],
      audio: audios[136],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[6] },
        { creature: creatures[45] },
        { creature: creatures[1] },
        { creature: creatures[46] },
      ],
      audio: audios[137],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[47] },
        { creature: creatures[5] },
        { creature: creatures[49] },
        { creature: creatures[2] },
      ],
      audio: audios[138],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[3] },
        { creature: creatures[50] },
        { creature: creatures[51] },
        { creature: creatures[4] },
      ],
      audio: audios[139],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[53] },
        { creature: creatures[54] },
        { creature: creatures[4] },
        { creature: creatures[0] },
      ],
      audio: audios[140],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[59] },
        { creature: creatures[3] },
        { creature: creatures[61] },
        { creature: creatures[5] },
      ],
      audio: audios[141],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[6] },
        { creature: creatures[2] },
        { creature: creatures[63] },
        { creature: creatures[32] },
      ],
      audio: audios[142],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[33] },
        { creature: creatures[7] },
        { creature: creatures[34] },
        { creature: creatures[1] },
      ],
      audio: audios[143],
    },],
};

const trials_pt_es_3 = {
  order: "3-PT-ES",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[12], object: objects[14] },
        { creature: creatures[56], object: objects[1] },
        { creature: creatures[57], object: objects[2] },
        { creature: creatures[58], object: objects[3] },
      ],
      audio: audios[144],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[59], object: objects[4] },
        { creature: creatures[60], object: objects[5] },
        { creature: creatures[61], object: objects[6] },
        { creature: creatures[13], object: objects[12] },
      ],
      audio: audios[145],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[62], object: objects[7] },
        { creature: creatures[63], object: objects[8] },
        { creature: creatures[14], object: objects[5] },
        { creature: creatures[32], object: objects[9] },
      ],
      audio: audios[146],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[33], object: objects[10] },
        { creature: creatures[15], object: objects[16] },
        { creature: creatures[34], object: objects[11] },
        { creature: creatures[35], object: objects[12] },
      ],
      audio: audios[147],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[36], object: objects[13] },
        { creature: creatures[37], object: objects[14] },
        { creature: creatures[38], object: objects[15] },
        { creature: creatures[8], object: objects[10] },
      ],
      audio: audios[148],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[9], object: objects[11] },
        { creature: creatures[39], object: objects[16] },
        { creature: creatures[40], object: objects[1] },
        { creature: creatures[41], object: objects[2] },
      ],
      audio: audios[149],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[42], object: objects[3] },
        { creature: creatures[10], object: objects[7] },
        { creature: creatures[43], object: objects[4] },
        { creature: creatures[44], object: objects[5] },
      ],
      audio: audios[150],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[45], object: objects[6] },
        { creature: creatures[46], object: objects[9] },
        { creature: creatures[11], object: objects[8] },
        { creature: creatures[47], object: objects[10] },
      ],
      audio: audios[151],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[15] },
        { creature: creatures[8] },
        { creature: creatures[37] },
        { creature: creatures[38] },
      ],
      audio: audios[152],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[9] },
        { creature: creatures[40] },
        { creature: creatures[14] },
        { creature: creatures[41] },
      ],
      audio: audios[153],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[10] },
        { creature: creatures[13] },
        { creature: creatures[43] },
        { creature: creatures[44] },
      ],
      audio: audios[154],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[12] },
        { creature: creatures[45] },
        { creature: creatures[46] },
        { creature: creatures[11] },
      ],
      audio: audios[155],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[32] },
        { creature: creatures[33] },
        { creature: creatures[11] },
        { creature: creatures[14] },
      ],
      audio: audios[156],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[35] },
        { creature: creatures[12] },
        { creature: creatures[37] },
        { creature: creatures[10] },
      ],
      audio: audios[157],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[9] },
        { creature: creatures[13] },
        { creature: creatures[39] },
        { creature: creatures[40] },
      ],
      audio: audios[158],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[41] },
        { creature: creatures[8] },
        { creature: creatures[42] },
        { creature: creatures[15] },
      ],
      audio: audios[159],
    },],
};

const trials_pt_3 = {
  order: "3-PT",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[57], object: objects[1] },
        { creature: creatures[58], object: objects[2] },
        { creature: creatures[59], object: objects[3] },
        { creature: creatures[20], object: objects[11] },
      ],
      audio: audios[160],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[21], object: objects[15] },
        { creature: creatures[54], object: objects[4] },
        { creature: creatures[55], object: objects[5] },
        { creature: creatures[56], object: objects[6] },
      ],
      audio: audios[161],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[51], object: objects[7] },
        { creature: creatures[22], object: objects[14] },
        { creature: creatures[52], object: objects[8] },
        { creature: creatures[53], object: objects[9] },
      ],
      audio: audios[162],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[48], object: objects[10] },
        { creature: creatures[49], object: objects[11] },
        { creature: creatures[23], object: objects[13] },
        { creature: creatures[50], object: objects[12] },
      ],
      audio: audios[163],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[16], object: objects[1] },
        { creature: creatures[37], object: objects[13] },
        { creature: creatures[38], object: objects[14] },
        { creature: creatures[39], object: objects[15] },
      ],
      audio: audios[164],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[34], object: objects[16] },
        { creature: creatures[35], object: objects[1] },
        { creature: creatures[36], object: objects[5] },
        { creature: creatures[17], object: objects[2] },
      ],
      audio: audios[165],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[63], object: objects[6] },
        { creature: creatures[32], object: objects[7] },
        { creature: creatures[18], object: objects[3] },
        { creature: creatures[33], object: objects[8] },
      ],
      audio: audios[166],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[60], object: objects[2] },
        { creature: creatures[19], object: objects[4] },
        { creature: creatures[61], object: objects[3] },
        { creature: creatures[62], object: objects[9] },
      ],
      audio: audios[167],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[37] },
        { creature: creatures[23] },
        { creature: creatures[16] },
        { creature: creatures[39] },
      ],
      audio: audios[168],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[22] },
        { creature: creatures[34] },
        { creature: creatures[35] },
        { creature: creatures[17] },
      ],
      audio: audios[169],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[63] },
        { creature: creatures[32] },
        { creature: creatures[18] },
        { creature: creatures[21] },
      ],
      audio: audios[170],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[60] },
        { creature: creatures[61] },
        { creature: creatures[20] },
        { creature: creatures[19] },
      ],
      audio: audios[171],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[19] },
        { creature: creatures[23] },
        { creature: creatures[49] },
        { creature: creatures[46] },
      ],
      audio: audios[172],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[48] },
        { creature: creatures[18] },
        { creature: creatures[20] },
        { creature: creatures[55] },
      ],
      audio: audios[173],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[21] },
        { creature: creatures[54] },
        { creature: creatures[17] },
        { creature: creatures[45] },
      ],
      audio: audios[174],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[22] },
        { creature: creatures[44] },
        { creature: creatures[47] },
        { creature: creatures[16] },
      ],
      audio: audios[175],
    },],
};

const trials_es_3 = {
  order: "3-ES",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[52], object: objects[1] },
        { creature: creatures[27], object: objects[5] },
        { creature: creatures[49], object: objects[2] },
        { creature: creatures[46], object: objects[3] },
      ],
      audio: audios[176],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[48], object: objects[4] },
        { creature: creatures[51], object: objects[5] },
        { creature: creatures[26], object: objects[6] },
        { creature: creatures[55], object: objects[10] },
      ],
      audio: audios[177],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[50], object: objects[11] },
        { creature: creatures[54], object: objects[12] },
        { creature: creatures[45], object: objects[13] },
        { creature: creatures[25], object: objects[7] },
      ],
      audio: audios[178],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[24], object: objects[8] },
        { creature: creatures[53], object: objects[14] },
        { creature: creatures[44], object: objects[15] },
        { creature: creatures[47], object: objects[16] },
      ],
      audio: audios[179],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[32], object: objects[6] },
        { creature: creatures[35], object: objects[7] },
        { creature: creatures[31], object: objects[9] },
        { creature: creatures[38], object: objects[1] },
      ],
      audio: audios[180],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[41], object: objects[8] },
        { creature: creatures[30], object: objects[14] },
        { creature: creatures[33], object: objects[2] },
        { creature: creatures[36], object: objects[3] },
      ],
      audio: audios[181],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[29], object: objects[15] },
        { creature: creatures[42], object: objects[9] },
        { creature: creatures[37], object: objects[4] },
        { creature: creatures[39], object: objects[5] },
      ],
      audio: audios[182],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[43], object: objects[6] },
        { creature: creatures[40], object: objects[7] },
        { creature: creatures[34], object: objects[8] },
        { creature: creatures[28], object: objects[16] },
      ],
      audio: audios[183],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[31] },
        { creature: creatures[24] },
        { creature: creatures[35] },
        { creature: creatures[38] },
      ],
      audio: audios[184],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[41] },
        { creature: creatures[30] },
        { creature: creatures[25] },
        { creature: creatures[36] },
      ],
      audio: audios[185],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[42] },
        { creature: creatures[37] },
        { creature: creatures[29] },
        { creature: creatures[26] },
      ],
      audio: audios[186],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[27] },
        { creature: creatures[40] },
        { creature: creatures[34] },
        { creature: creatures[28] },
      ],
      audio: audios[187],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[57] },
        { creature: creatures[27] },
        { creature: creatures[58] },
        { creature: creatures[31] },
      ],
      audio: audios[188],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[26] },
        { creature: creatures[28] },
        { creature: creatures[55] },
        { creature: creatures[56] },
      ],
      audio: audios[189],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[51] },
        { creature: creatures[29] },
        { creature: creatures[53] },
        { creature: creatures[25] },
      ],
      audio: audios[190],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[48] },
        { creature: creatures[49] },
        { creature: creatures[24] },
        { creature: creatures[30] },
      ],
      audio: audios[191],
    },],
};

export { trials_es_pt_3, trials_pt_es_3, trials_pt_3, trials_es_3 };