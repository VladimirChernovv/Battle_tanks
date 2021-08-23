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
  }
}