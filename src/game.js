// Контролирующий класс который следит за процессами игры(пауза, текущий уровень, следующий уровень)
export default class Game {
	constructor({ world, view, levels }) { // <- Делаем деструкторизацию
		this.world = world;
		this.view = view;
		this.levels = levels;
		this.activeKeys = new Set();
		
		this.loop = this.loop.bind(this);
	};

	async init() { // Инициализируем метод init у view
		this.view.init();

		document.addEventListener('keydown', event => {
			event.preventDefault();

			switch (event.code) {
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
					this.isMoving = true;
        case 'Space':
        case 'Enter':
					this.activeKeys.add(event.code);
      }

			this.key = event.code;
		});

		document.addEventListener('keyup', (event) => {
      event.preventDefault();

      switch (event.code) {
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'Space':
        case 'Enter':
					this.activeKeys.delete(event.code);
      }

			this.key = '';
    });
	};

	start() {
		requestAnimationFrame(this.loop);
	};

	// метод в котором мы получаем постоянно обновляющиеся данные игры
	loop() {
		// get input
		// update world
		this.world.update(this.activeKeys);
		// update view
		this.view.update(this.world);

		// функция передающщая функцию браузеру для отрисовки элементов
		requestAnimationFrame(this.loop);
	};
};