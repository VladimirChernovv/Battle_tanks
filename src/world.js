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
		if (activeKeys.has('ArrowUp')) {
			this.player1Tank.y -= 1;
			this.player1Tank.direction = 0;
			// добавляем анимацию при любом движении
			this.player1Tank.animationFrame ^= 1;
		} else if (activeKeys.has('ArrowRight')) {
      this.player1Tank.x += 1;
      this.player1Tank.direction = 1;
      // добавляем анимацию при любом движении
      this.player1Tank.animationFrame ^= 1;
    } else if (activeKeys.has('ArrowDown')) {
      this.player1Tank.y += 1;
      this.player1Tank.direction = 2;
      // добавляем анимацию при любом движении
      this.player1Tank.animationFrame ^= 1;
    } else if (activeKeys.has('ArrowLeft')) {
      this.player1Tank.x -= 1;
      this.player1Tank.direction = 3;
      // добавляем анимацию при любом движении
      this.player1Tank.animationFrame ^= 1;
    }
	};
};