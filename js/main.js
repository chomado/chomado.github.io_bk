enchant();

window.onload = function() {
	
	// 画面サイズ決定
	var core = new Core(1024, 1024);
	
	core.preload('image/chara1.png');
	
	// fps = frame per second
	core.fps = 15;

	core.onload = function() {
		// 動かす画像の大きさ
		var icon = new Sprite(32, 32);
		icon.image = core.assets['image/chara1.png'];
		
		// 初期位置座標
		icon.x = 0;
		icon.y = 0;

		icon.addEventListener('enterframe', function() {
			if (core.input.left)
				this.x -= 5;
			if (core.input.right)
				this.x += 5;
			if (core.input.up)
				this.y -= 5;
			if (core.input.down)
				this.y += 5;
			
		});
		icon.on('touchstart', function() {
			core.rootScene.removeChild(this);
		});
		core.rootScene.on('touchstart', function(e) {
			icon.x = e.x;
			icon.y = e.y;
		});

		core.rootScene.addChild(icon);
	}
	core.start();
};
