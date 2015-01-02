enchant();

window.onload = function() {
	
	// 画面サイズ決定
	var core = new Core(1024, 640);
	
	core.preload('image/chara1.png');
	
	// fps = frame per second
	core.fps = 15;

	core.onload = function() {
		// 動かすクマさんとその画像の大きさ
		var bear = new Sprite(32, 32);
		bear.image = core.assets['image/chara1.png'];
		
		// 初期位置座標
		bear.x = 0;
		bear.y = 0;

		// chara1.png (13コマある) のうちどれを使うか
		bear.frame = 1;
		
		bear.addEventListener('enterframe', function() {
			// 5ピクセルずつ動かす.(数字が大きいと速くなる)
			this.x += 5;
			// 歩かせたいので1,2(画像chara1.pngの各フレーム番号)が交互に来るようにする.
			this.frame = this.age % 3;
			// 大きさ
			this.scale(1.005, 1.005);

			// 無限ループさせる
			if (this.x > 1024) 
			{
				this.x = 0;
			}
		});
		core.rootScene.addChild(bear);
	}
	core.start();
};
