import { expect } from "chai";
import { getFakeRoom } from "../mock";

describe("room", () => {
  let room: Room;

  beforeEach(() => {
    room = getFakeRoom("E01S01");
  });

  it("should have an execute method", () => {
    expect(room.execute).to.be.a("function");
  });
});
