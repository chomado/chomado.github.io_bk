enchant();

/*
 * core
 * - rootScene
 * -- Sprite (bear)
 */

window.onload = function() {
	
	var core = new Core(1280, 640);
	core.preload('image/chara1.png');
	core.fps = 15;
	core.onload = function() {
		var bear = new Sprite(32, 32);
		bear.image = core.assets['image/chara1.png'];
		bear.x = 0;
		bear.y = 0;
		bear.frame = 1;
		bear.addEventListener('enterframe', function() {
			this.x += 5;
			this.frame = this.age % 3;
			if (this.x > 320) this.x = 0;
		});
		core.rootScene.addChild(bear);
	}
	core.start();
};
