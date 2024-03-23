// rpg.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// キャラクターと敵のオブジェクト
const player = {
  x: 50,
  y: 50,
  width: 32,
  height: 32,
  speed: 3
};

const enemy = {
  x: 300,
  y: 200,
  width: 32,
  height: 32
};

// キー入力の監視
const keys = {};
document.addEventListener('keydown', (e) => {
  keys[e.code] = true;
});
document.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

// ゲームの更新
function update() {
  if (keys['ArrowUp']) player.y -= player.speed;
  if (keys['ArrowDown']) player.y += player.speed;
  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;
}

// ゲームの描画
function draw() {
  // 画面のクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // プレイヤーの描画
  ctx.fillStyle = 'blue';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // 敵の描画
  ctx.fillStyle = 'red';
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

// ゲームループ
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();