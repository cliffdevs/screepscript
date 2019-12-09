import { assert } from "chai";
import sinon from "sinon";
import { build, Main } from "../../src/main";
import { Game, Memory } from "./mock";

describe("main", () => {
  let main: Main;
  let mockBrain: any;

  beforeEach(() => {
    // @ts-ignore : allow adding Game to global
    global.Game = _.clone(Game);
    // @ts-ignore : allow adding Memory to global
    global.Memory = _.clone(Memory);

    mockBrain = {
      loop: sinon.spy()
    };
    main = build(mockBrain);
  });

  it("should export a loop function", () => {
    assert.isTrue(typeof main.loop === "function");
  });

  it("should return void when called with no context", () => {
    assert.isUndefined(main.loop());
  });

  it("should execute the brain loop", () => {
    main.loop();
    assert.isTrue(mockBrain.loop.called);
  });
});
