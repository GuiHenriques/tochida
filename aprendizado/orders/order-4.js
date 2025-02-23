import { creatures, objects, audios } from "./loader.js";

const trials_pt_es_4 = {
  order: "4-PT-ES",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[32], object: objects[1] },
        { creature: creatures[33], object: objects[2] },
        { creature: creatures[4], object: objects[11] },
        { creature: creatures[34], object: objects[3] },
      ],
      audio: audios[192],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[35], object: objects[4] },
        { creature: creatures[5], object: objects[12] },
        { creature: creatures[36], object: objects[5] },
        { creature: creatures[37], object: objects[6] },
      ],
      audio: audios[193],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[38], object: objects[7] },
        { creature: creatures[39], object: objects[8] },
        { creature: creatures[6], object: objects[1] },
        { creature: creatures[40], object: objects[9] },
      ],
      audio: audios[194],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[7], object: objects[2] },
        { creature: creatures[41], object: objects[10] },
        { creature: creatures[42], object: objects[11] },
        { creature: creatures[43], object: objects[12] },
      ],
      audio: audios[195],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[44], object: objects[1] },
        { creature: creatures[45], object: objects[2] },
        { creature: creatures[46], object: objects[3] },
        { creature: creatures[0], object: objects[13] },
      ],
      audio: audios[196],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[1], object: objects[14] },
        { creature: creatures[47], object: objects[4] },
        { creature: creatures[48], object: objects[5] },
        { creature: creatures[49], object: objects[6] },
      ],
      audio: audios[197],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[50], object: objects[13] },
        { creature: creatures[2], object: objects[3] },
        { creature: creatures[51], object: objects[14] },
        { creature: creatures[52], object: objects[15] },
      ],
      audio: audios[198],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[53], object: objects[16] },
        { creature: creatures[54], object: objects[7] },
        { creature: creatures[55], object: objects[8] },
        { creature: creatures[3], object: objects[4] },
      ],
      audio: audios[199],
    },

  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[3] },
        { creature: creatures[4] },
        { creature: creatures[45] },
        { creature: creatures[46] },
      ],
      audio: audios[200],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[5] },
        { creature: creatures[48] },
        { creature: creatures[2] },
        { creature: creatures[49] },
      ],
      audio: audios[201],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[6] },
        { creature: creatures[51] },
        { creature: creatures[52] },
        { creature: creatures[1] },
      ],
      audio: audios[202],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[7] },
        { creature: creatures[0] },
        { creature: creatures[54] },
        { creature: creatures[55] },
      ],
      audio: audios[203],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[3] },
        { creature: creatures[57] },
        { creature: creatures[7] },
        { creature: creatures[58] },
      ],
      audio: audios[204],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[6] },
        { creature: creatures[59] },
        { creature: creatures[2] },
        { creature: creatures[61] },
      ],
      audio: audios[205],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[62] },
        { creature: creatures[1] },
        { creature: creatures[32] },
        { creature: creatures[5] },
      ],
      audio: audios[206],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[33] },
        { creature: creatures[4] },
        { creature: creatures[34] },
        { creature: creatures[0] },
      ],
      audio: audios[207],
    },],
};

const trials_es_pt_4 = {
  order: "4-ES-PT",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[11], object: objects[15] },
        { creature: creatures[56], object: objects[14] },
        { creature: creatures[57], object: objects[13] },
        { creature: creatures[58], object: objects[12] },
      ],
      audio: audios[208],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[59], object: objects[11] },
        { creature: creatures[10], object: objects[16] },
        { creature: creatures[60], object: objects[10] },
        { creature: creatures[61], object: objects[9] },
      ],
      audio: audios[209],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[62], object: objects[8] },
        { creature: creatures[63], object: objects[7] },
        { creature: creatures[32], object: objects[4] },
        { creature: creatures[8], object: objects[5] },
      ],
      audio: audios[210],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[33], object: objects[3] },
        { creature: creatures[34], object: objects[2] },
        { creature: creatures[9], object: objects[6] },
        { creature: creatures[35], object: objects[1] },
      ],
      audio: audios[211],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[36], object: objects[10] },
        { creature: creatures[12], object: objects[7] },
        { creature: creatures[37], object: objects[15] },
        { creature: creatures[38], object: objects[16] },
      ],
      audio: audios[212],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[39], object: objects[6] },
        { creature: creatures[40], object: objects[5] },
        { creature: creatures[13], object: objects[8] },
        { creature: creatures[41], object: objects[4] },
      ],
      audio: audios[213],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[42], object: objects[11] },
        { creature: creatures[43], object: objects[12] },
        { creature: creatures[44], object: objects[13] },
        { creature: creatures[14], object: objects[9] },
      ],
      audio: audios[214],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[15], object: objects[10] },
        { creature: creatures[45], object: objects[14] },
        { creature: creatures[46], object: objects[15] },
        { creature: creatures[47], object: objects[16] },
      ],
      audio: audios[215],
    },],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[12] },
        { creature: creatures[11] },
        { creature: creatures[37] },
        { creature: creatures[38] },
      ],
      audio: audios[216],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[39] },
        { creature: creatures[13] },
        { creature: creatures[10] },
        { creature: creatures[41] },
      ],
      audio: audios[217],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[42] },
        { creature: creatures[9] },
        { creature: creatures[14] },
        { creature: creatures[44] },
      ],
      audio: audios[218],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[45] },
        { creature: creatures[46] },
        { creature: creatures[8] },
        { creature: creatures[15] },
      ],
      audio: audios[219],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[32] },
        { creature: creatures[33] },
        { creature: creatures[8] },
        { creature: creatures[12] },
      ],
      audio: audios[220],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[13] },
        { creature: creatures[9] },
        { creature: creatures[36] },
        { creature: creatures[37] },
      ],
      audio: audios[221],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[10] },
        { creature: creatures[38] },
        { creature: creatures[14] },
        { creature: creatures[40] },
      ],
      audio: audios[222],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[41] },
        { creature: creatures[42] },
        { creature: creatures[15] },
        { creature: creatures[11] },
      ],
      audio: audios[223],
    },],
};

const trials_es_4 = {
  order: "4-ES",
  learn: [ 
    // Trial 1
    {
      grid: [
        { creature: creatures[37], object: objects[5] },
        { creature: creatures[23], object: objects[1] },
        { creature: creatures[38], object: objects[6] },
        { creature: creatures[39], object: objects[7] },
      ],
      audio: audios[224],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[22], object: objects[2] },
        { creature: creatures[34], object: objects[8] },
        { creature: creatures[35], object: objects[9] },
        { creature: creatures[36], object: objects[10] },
      ],
      audio: audios[225],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[63], object: objects[11] },
        { creature: creatures[32], object: objects[12] },
        { creature: creatures[21], object: objects[3] },
        { creature: creatures[37], object: objects[13] },
      ],
      audio: audios[226],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[60], object: objects[14] },
        { creature: creatures[61], object: objects[15] },
        { creature: creatures[62], object: objects[16] },
        { creature: creatures[20], object: objects[4] },
      ],
      audio: audios[227],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[57], object: objects[1] },
        { creature: creatures[58], object: objects[2] },
        { creature: creatures[19], object: objects[11] },
        { creature: creatures[59], object: objects[3] },
      ],
      audio: audios[228],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[54], object: objects[4] },
        { creature: creatures[18], object: objects[12] },
        { creature: creatures[55], object: objects[5] },
        { creature: creatures[56], object: objects[6] },
      ],
      audio: audios[229],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[17], object: objects[13] },
        { creature: creatures[51], object: objects[7] },
        { creature: creatures[52], object: objects[8] },
        { creature: creatures[53], object: objects[9] },
      ],
      audio: audios[230],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[48], object: objects[10] },
        { creature: creatures[49], object: objects[11] },
        { creature: creatures[50], object: objects[12] },
        { creature: creatures[16], object: objects[14] },
      ],
      audio: audios[231],
    },],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[19] },
        { creature: creatures[34] },
        { creature: creatures[33] },
        { creature: creatures[20] },
      ],
      audio: audios[232],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[18] },
        { creature: creatures[21] },
        { creature: creatures[35] },
        { creature: creatures[36] },
      ],
      audio: audios[233],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[17] },
        { creature: creatures[38] },
        { creature: creatures[40] },
        { creature: creatures[22] },
      ],
      audio: audios[234],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[23] },
        { creature: creatures[16] },
        { creature: creatures[41] },
        { creature: creatures[42] },
      ],
      audio: audios[235],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[57] },
        { creature: creatures[20] },
        { creature: creatures[16] },
        { creature: creatures[59] },
      ],
      audio: audios[236],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[54] },
        { creature: creatures[55] },
        { creature: creatures[21] },
        { creature: creatures[17] },
      ],
      audio: audios[237],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[18] },
        { creature: creatures[51] },
        { creature: creatures[52] },
        { creature: creatures[22] },
      ],
      audio: audios[238],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[48] },
        { creature: creatures[19] },
        { creature: creatures[23] },
        { creature: creatures[50] },
      ],
      audio: audios[239],
    },],
};

const trials_pt_4 = {
  order: "4-PT",
  learn: [
    // Trial 1
    {
      grid: [
        { creature: creatures[32], object: objects[15] },
        { creature: creatures[34], object: objects[14] },
        { creature: creatures[33], object: objects[13] },
        { creature: creatures[26], object: objects[16] },
      ],
      audio: audios[240],
    },
    // Trial 2
    {
      grid: [
        { creature: creatures[27], object: objects[5] },
        { creature: creatures[37], object: objects[12] },
        { creature: creatures[35], object: objects[11] },
        { creature: creatures[36], object: objects[10] },
      ],
      audio: audios[241],
    },
    // Trial 3
    {
      grid: [
        { creature: creatures[39], object: objects[9] },
        { creature: creatures[24], object: objects[6] },
        { creature: creatures[38], object: objects[8] },
        { creature: creatures[40], object: objects[7] },
      ],
      audio: audios[242],
    },
    // Trial 4
    {
      grid: [
        { creature: creatures[43], object: objects[6] },
        { creature: creatures[41], object: objects[5] },
        { creature: creatures[25], object: objects[7] },
        { creature: creatures[42], object: objects[4] },
      ],
      audio: audios[243],
    },
    // Trial 5
    {
      grid: [
        { creature: creatures[46], object: objects[3] },
        { creature: creatures[44], object: objects[2] },
        { creature: creatures[45], object: objects[1] },
        { creature: creatures[30], object: objects[10] },
      ],
      audio: audios[244],
    },
    // Trial 6
    {
      grid: [
        { creature: creatures[48], object: objects[16] },
        { creature: creatures[47], object: objects[15] },
        { creature: creatures[31], object: objects[11] },
        { creature: creatures[49], object: objects[14] },
      ],
      audio: audios[245],
    },
    // Trial 7
    {
      grid: [
        { creature: creatures[54], object: objects[10] },
        { creature: creatures[28], object: objects[12] },
        { creature: creatures[50], object: objects[9] },
        { creature: creatures[51], object: objects[8] },
      ],
      audio: audios[246],
    },
    // Trial 8
    {
      grid: [
        { creature: creatures[29], object: objects[13] },
        { creature: creatures[55], object: objects[7] },
        { creature: creatures[54], object: objects[11] },
        { creature: creatures[53], object: objects[6] },
      ],
      audio: audios[247],
    },
  ],
  test: [{
      // Test 1
      grid: [
        { creature: creatures[46] },
        { creature: creatures[31] },
        { creature: creatures[45] },
        { creature: creatures[27] },
      ],
      audio: audios[248],
    },
    {
      // Test 2
      grid: [
        { creature: creatures[48] },
        { creature: creatures[30] },
        { creature: creatures[26] },
        { creature: creatures[49] },
      ],
      audio: audios[249],
    },
    {
      // Test 3
      grid: [
        { creature: creatures[27] },
        { creature: creatures[25] },
        { creature: creatures[50] },
        { creature: creatures[51] },
      ],
      audio: audios[250],
    },
    {
      // Test 4
      grid: [
        { creature: creatures[24] },
        { creature: creatures[55] },
        { creature: creatures[54] },
        { creature: creatures[28] },
      ],
      audio: audios[251],
    },
    {
      // Test 5
      grid: [
        { creature: creatures[37] },
        { creature: creatures[31] },
        { creature: creatures[27] },
        { creature: creatures[39] },
      ],
      audio: audios[252],
    },
    {
      // Test 6
      grid: [
        { creature: creatures[34] },
        { creature: creatures[26] },
        { creature: creatures[30] },
        { creature: creatures[36] },
      ],
      audio: audios[253],
    },
    {
      // Test 7
      grid: [
        { creature: creatures[63] },
        { creature: creatures[32] },
        { creature: creatures[25] },
        { creature: creatures[29] },
      ],
      audio: audios[254],
    },
    {
      // Test 8
      grid: [
        { creature: creatures[28] },
        { creature: creatures[24] },
        { creature: creatures[61] },
        { creature: creatures[62] },
      ],
      audio: audios[255],
    },],
};

export { trials_pt_es_4, trials_es_pt_4, trials_es_4, trials_pt_4 };