import { executarExperimento } from "./flow.js";
import { timeline, jsPsych } from "./config.js";

executarExperimento();
jsPsych.run(timeline);
