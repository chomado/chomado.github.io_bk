enchant();

window.onload = function() {
	
	// 画面サイズ決定
	var core = new Core(1024, 640);
	
	core.preload('image/chomado.jpg');
	
	// fps = frame per second
	core.fps = 15;

	core.onload = function() {
		// 動かす画像の大きさ
		var icon = new Sprite(256, 256);
		icon.image = core.assets['image/chomado.jpg'];
		
		// 初期位置座標
		icon.x = 0;
		icon.y = 0;

		icon.addEventListener('enterframe', function() {
			this.x += 5;
			this.rotate(2);
			this.scale(1.01, 1.01);

			// 無限ループさせる
			if (this.x > 1024) 
			{
				this.x = 0;
			}
		});
		core.rootScene.addChild(icon);
	}
	core.start();
};
