import chai from "chai";
const expect = chai.expect;
const should = chai.should();
// import { Creep } from "screeps";
import { stubInterface } from "ts-sinon";
import { MemoryCleaner } from "../../../src/utils/MemoryCleaner";
import { Game, getFakeCreep, Memory } from "../mock";

describe("MemoryCleaner", () => {
  let memoryCleaner: MemoryCleaner;

  beforeEach(() => {
    // @ts-ignore
    global.Game = _.clone(Game);
    // @ts-ignore
    global.Memory = _.clone(Memory);

    memoryCleaner = new MemoryCleaner();
  });

  it("should remove creeps from memory when they are no longer alive in the game", () => {
    const creep1 = getFakeCreep();
    const creep2 = getFakeCreep();

    // given
    // @ts-ignore
    global.Game.creeps = {
      creep2
    };

    // @ts-ignore
    global.Memory.creeps = {
      creep1,
      creep2
    };

    // when
    memoryCleaner.purge();

    // then
    // tslint:disable-next-line:no-unused-expression
    expect(global.Memory.creeps).to.not.haveOwnProperty("creep1");
    // tslint:disable-next-line:no-unused-expression
    expect(global.Memory.creeps.creep2).to.not.be.undefined;
  });
});
