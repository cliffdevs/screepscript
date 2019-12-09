import { MemoryCleaner } from "./utils/MemoryCleaner";

/**
 * All AI Logic starts here.
 */
export class Brain {
  private memoryCleaner: MemoryCleaner;

  /**
   * Conscuctor for Brain
   * @param {MemoryCleaner} memoryCleaner
   */
  public constructor(memoryCleaner: MemoryCleaner) {
    this.memoryCleaner = memoryCleaner;
  }

  /**
   * Execute the loop-ly logic cycle
   */
  public loop(): void {
    if (this.isCpuBelowLimit()) {
      this.cleanMemory();
      Memory.time = Game.time;
      for (const roomName in Game.rooms) {
        Game.rooms[roomName].execute();
      }
    }
    return;
  }

  private cleanMemory(): void {
    this.memoryCleaner.purge();
  }

  private isCpuBelowLimit(): boolean {
    if (Game.time > 1000 && Game.cpu.bucket < 2 * Game.cpu.tickLimit && Game.cpu.bucket < Game.cpu.limit * 10) {
      console.log(
        `${Game.time} Skipping tick CPU Bucket too low. bucket: ${Game.cpu.bucket} tickLimit: ${Game.cpu.tickLimit} limit: ${Game.cpu.limit}`
      );
      return false;
    }

    return true;
  }
}
