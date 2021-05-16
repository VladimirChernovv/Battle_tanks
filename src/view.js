// Обект отвечающий за главный экран(его отрисовку), уровня, паузы, главного экрана
export default class View {
  constructor(canvas, sprite) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.sprite = sprite;
  };

  async init() {
    // Здесь мы загружаем спрайт
    await this.sprite.load();
  };

  // <- Здесь будет обновляться представление. Метод который вызывает методы находящиеся в нём
  update(world) {
    this.clearScreen();
		this.renderPlayer1Tank(world.player1Tank);
	};

	renderPlayer1Tank(player1Tank) {
		this.context.drawImage(
      this.sprite.image,
      0, 0, 32, 32,
      player1Tank.x, player1Tank.y, 32, 32
    );
	};

  // метод очищающий путь после танка
  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};