import { stubInterface } from "ts-sinon";

export const Game = {
  cpu: {
    bucket: 100,
    getUsed: () => 20,
    limit: 20,
    tickLimit: 20
  },
  creeps: {},
  rooms: {},
  spawns: {},
  time: 12345
};

export const Memory = {
  creeps: {}
};

/**
 * Utility to get a fake creep quickly
 * @returns {Creep} fake creep
 */
export const getFakeCreep = () => {
  return stubInterface<Creep>();
};

/**
 *
 * @param {string} id desired id of the room
 */
export const getFakeRoom = (name: string, opts: object) => {
  const room = stubInterface<Room>(opts);
  room.name = name;
  return room;
};
