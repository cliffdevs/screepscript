/**
 * Module responsible for cleaning out unused memory references.
 */
export class MemoryCleaner {
  /**
   * Searches for the names of dead creeps in memory structures and removes them
   * to reclaim those valuable memory bytes.
   */
  public purge(): void {
    for (const creepName in Memory.creeps) {
      if (!Game.creeps[creepName]) {
        delete Memory.creeps[creepName];
      }
    }
    return;
  }
}
