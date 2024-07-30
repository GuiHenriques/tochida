import { loadObjects, loadCreatures, loadAudios } from "../utils.js";

// Load Objects and Creatures
const objects = loadObjects();
const creatures = loadCreatures();
const audios = loadAudios();

export { objects, creatures, audios };
