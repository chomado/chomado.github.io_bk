enchant();

/*
 * core
 * - rootScene
 * -- Sprite (bear)
 */

window.onload = function() {
	
	var core = new Core(1280, 640);
	core.preload('image/chomado.jpg');
	core.fps = 15;
	core.onload = function() {
		var bear = new Sprite(256, 256);
		bear.image = core.assets['image/chomado.jpg'];
		bear.x = 0;
		bear.y = 0;

		bear.addEventListener('enterframe', function() {
			this.x += 10;
			if (this.x > 320) this.x = 0;
			this.rotate(2);
			this.scale(1.01, 1.01);
		});
		core.rootScene.addChild(bear);
	}
	core.start();
};
