import Tank from './Tank.js';

const CELL_SIZE = 16;

// Объект в котором хранится основная информация о уровне,
// состоянии различных уровней - разрушена стена или нет,
// колличество врагов на карте(сколько их осталось, сколько
// их уничтожено, позиция каждого игрового танка), состояние
// базы - разрушена или нет.
export default class World {
	level = null;
	player1Tank = new Tank();
	player2Tank = null;
	enemyTanks = [];

	setLevel(data) {
		this.level = data.map((blocks, y) => {
      return blocks.map((block, x) => {
        return {
          x: x * CELL_SIZE,
          y: y * CELL_SIZE,
          sprite: block,
        };
      });
    });
	};

	update(activeKeys) { // <- Здесь будет обновляться весь мир
		this.player1Tank.update(activeKeys);
	};
};