declare namespace Room {
  interface Room {
    execute(): void;
  }
}

Room.prototype.execute = () => {
  return;
};
