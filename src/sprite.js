// Загружаем спрайт изображений игры
export default class Sprite {
	constructor(src) { // <- Принимаем путь к файлу который нужено загрузить 
		this.src = src;
		this.image = new Image(); // <-- ссылаемся на изображение
	};

	async load() {
		return new Promise((resolve, reject) => {
			this.image.src = this.src;
			this.image.addEventListener('load', () => resolve(this));
		});
	};
};