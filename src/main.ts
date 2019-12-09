import { Brain } from "Brain";
import { ErrorMapper } from "utils/ErrorMapper";
import { MemoryCleaner } from "utils/MemoryCleaner";
const memoryCleaner = new MemoryCleaner();
let brain = new Brain(memoryCleaner);

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);
  brain.loop();
});

/**
 * Constructor function for the Main module
 * @param {Brain} brainInput
 */
export const build = (brainInput: Brain): Main => {
  brain = brainInput;
  return { loop };
};

/**
 * Interface for the main module
 */
export interface Main {
  /**
   * Loop method for the main loop
   */
  loop: () => void;
}
