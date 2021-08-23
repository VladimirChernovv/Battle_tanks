export default class Tank {
  direction = 0;
  x = 100;
  y = 100;
  // добавляем анимацию к спайту. Здесь может быть только два значениея 0 или 1
  animationFrame = 0;
  // функция определяющая sprite
  frames = [
    [0 * 32, 0 * 32, 32, 32],
    [1 * 32, 0 * 32, 32, 32],
    [6 * 32, 0 * 32, 32, 32],
    [7 * 32, 0 * 32, 32, 32],
    [4 * 32, 0 * 32, 32, 32],
    [5 * 32, 0 * 32, 32, 32],
    [2 * 32, 0 * 32, 32, 32],
    [3 * 32, 0 * 32, 32, 32],
  ];

  get sprite() {
    return this.frames[this.direction * 2 + this.animationFrame];
  };

  // метод принимающий нажатые ключи
  update(activeKeys) {
    if (activeKeys.has('ArrowUp')) {
      this._move(0, 'y', -1)
    } else if (activeKeys.has('ArrowRight')) {
      this._move(1, 'x', 1);
    } else if (activeKeys.has('ArrowDown')) {
      this._move(2, 'y', 1);
    } else if (activeKeys.has('ArrowLeft')) {
      this._move(3, 'x', -1);
    }
  };


  _move(direction, axis, value) {
    this.direction = direction;
    this[axis] += value;
    this.animationFrame ^= 1;
  };

}