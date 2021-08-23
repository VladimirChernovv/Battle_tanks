import Tank from './Tank.js';

// Объект в котором хранится основная информация о уровне,
// состоянии различных уровней - разрушена стена или нет,
// колличество врагов на карте(сколько их осталось, сколько
// их уничтожено, позиция каждого игрового танка), состояние
// базы - разрушена или нет.
export default class World {
  grid = [];
	player1Tank = new Tank();
	player2Tank = null;
	enemyTanks = [];

	update(activeKeys) { // <- Здесь будет обновляться весь мир
		this.player1Tank.update(activeKeys);
	};
};