// Загружаем спрайт изображений игры
export default class Sprite {
	constructor(src, map) { // Принимаем путь к файлу который нужено загрузить 
		this.src = src;
		this.image = new Image(); // ссылаемся на изображение
		this.map = map;
	};

	async load() {
		return new Promise((resolve, reject) => {
			this.image.src = this.src;
			this.image.addEventListener('load', () => resolve(this));
		});
	};
};