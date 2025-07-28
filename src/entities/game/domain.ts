export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrowEntity;

export type GameIdleEntity = {
  id: string;
  players: PlayerEntity[];
  status: "idle";
};

export type GameInProgressEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field[];
  status: "inProgess";
};

export type GameOverEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field[];
  status: "gameOver";
  winner: PlayerEntity;
};

export type GameOverDrowEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field[];
  status: "gameOverDrow";
};

export type PlayerEntity = {
  id: string;
  login: string;
  raiting: number;
};

export type Field = Cell[];

export type Cell = GameSymbol | null;
export type GameSymbol = string;
