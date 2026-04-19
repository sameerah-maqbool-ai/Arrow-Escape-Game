const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player
let player = {
    x: canvas.width/2,
    y: canvas.height/2,
    size: 20,
    speed: 5
};

// Enemies (red arrows)
let enemies = [];
let enemySpeed = 2;

// Power-ups (blue stars)
let powerups = [];

// Game state
let score = 0;
let timeLeft = 30;
let gameRunning = false;
let highScore = localStorage.getItem('arrowEscapeHighScore') || 0;
let keys = {};

// Display high score
document.getElementById('highScore').innerText = highScore;

// Controls
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function movePlayer() {
    if (keys['ArrowUp'] && player.y - player.size/2 > 0) {
        player.y -= player.speed;
    }
    if (keys['ArrowDown'] && player.y + player.size/2 < canvas.height) {
        player.y += player.speed;
    }
    if (keys['ArrowLeft'] && player.x - player.size/2 > 0) {
        player.x -= player.speed;
    }
    if (keys['ArrowRight'] && player.x + player.size/2 < canvas.width) {
        player.x += player.speed;
    }
}

function spawnEnemy() {
    if (!gameRunning) return;
    
    let side = Math.floor(Math.random() * 4);
    let enemy = {
        x: 0,
        y: 0,
        size: 25,
        direction: {x: 0, y: 0}
    };
    
    switch(side) {
        case 0: // top
            enemy.x = Math.random() * canvas.width;
            enemy.y = -enemy.size;
            enemy.direction = {x: (Math.random() - 0.5), y: 1};
            break;
        case 1: // bottom
            enemy.x = Math.random() * canvas.width;
            enemy.y = canvas.height + enemy.size;
            enemy.direction = {x: (Math.random() - 0.5), y: -1};
            break;
        case 2: // left
            enemy.x = -enemy.size;
            enemy.y = Math.random() * canvas.height;
            enemy.direction = {x: 1, y: (Math.random() - 0.5)};
            break;
        case 3: // right
            enemy.x = canvas.width + enemy.size;
            enemy.y = Math.random() * canvas.height;
            enemy.direction = {x: -1, y: (Math.random() - 0.5)};
            break;
    }
    
    // Normalize direction
    let len = Math.hypot(enemy.direction.x, enemy.direction.y);
    enemy.direction.x /= len;
    enemy.direction.y /= len;
    
    enemies.push(enemy);
}

function spawnPowerup() {
    if (!gameRunning) return;
    
    if (Math.random() < 0.02) { // 2% chance each frame
        powerups.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 15
        });
    }
}

function updateEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].x += enemies[i].direction.x * enemySpeed;
        enemies[i].y += enemies[i].direction.y * enemySpeed;
        
        // Remove if off screen
        if (enemies[i].x + enemies[i].size < 0 || 
            enemies[i].x - enemies[i].size > canvas.width ||
            enemies[i].y + enemies[i].size < 0 || 
            enemies[i].y - enemies[i].size > canvas.height) {
            enemies.splice(i, 1);
            i--;
        }
    }
}

function checkCollisions() {
    // Check enemy collisions
    for (let i = 0; i < enemies.length; i++) {
        let dx = player.x - enemies[i].x;
        let dy = player.y - enemies[i].y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < player.size/2 + enemies[i].size/2) {
            gameOver();
            return false;
        }
    }
    
    // Check powerup collisions
    for (let i = 0; i < powerups.length; i++) {
        let dx = player.x - powerups[i].x;
        let dy = player.y - powerups[i].y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < player.size/2 + powerups[i].size/2) {
            score += 10;
            document.getElementById('score').innerText = score;
            powerups.splice(i, 1);
            i--;
            
            // Speed boost effect
            player.speed = 7;
            setTimeout(() => { player.speed = 5; }, 2000);
        }
    }
    
    return true;
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw player (blue circle with glow)
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#00ffff';
    ctx.fillStyle = '#00b4d8';
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size/2, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw eyes on player
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(player.x - 7, player.y - 5, 3, 0, Math.PI * 2);
    ctx.arc(player.x + 7, player.y - 5, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1a1a2e';
    ctx.beginPath();
    ctx.arc(player.x - 7, player.y - 6, 1.5, 0, Math.PI * 2);
    ctx.arc(player.x + 7, player.y - 6, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw enemies (red arrows)
    for (let enemy of enemies) {
        ctx.fillStyle = '#ff4444';
        ctx.shadowColor = '#ff0000';
        ctx.beginPath();
        ctx.moveTo(enemy.x, enemy.y - enemy.size/2);
        ctx.lineTo(enemy.x + enemy.size/2, enemy.y + enemy.size/2);
        ctx.lineTo(enemy.x, enemy.y + enemy.size/4);
        ctx.lineTo(enemy.x - enemy.size/2, enemy.y + enemy.size/2);
        ctx.fill();
    }
    
    // Draw powerups (blue stars)
    for (let power of powerups) {
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = '#ffaa00';
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            let angle = (i * 72 - 90) * Math.PI / 180;
            let x1 = power.x + Math.cos(angle) * power.size;
            let y1 = power.y + Math.sin(angle) * power.size;
            let x2 = power.x + Math.cos(angle + 36 * Math.PI/180) * (power.size/2);
            let y2 = power.y + Math.sin(angle + 36 * Math.PI/180) * (power.size/2);
            
            if (i === 0) ctx.moveTo(x1, y1);
            else ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
        }
        ctx.fill();
    }
    
    ctx.shadowBlur = 0;
}

function updateTimer() {
    if (!gameRunning) return;
    
    timeLeft -= 1/60;
    document.getElementById('time').innerText = Math.ceil(timeLeft);
    
    if (timeLeft <= 0) {
        gameWin();
    }
}

function gameOver() {
    gameRunning = false;
    alert(`Game Over! Your score: ${score}`);
    resetGame();
}

function gameWin() {
    gameRunning = false;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('arrowEscapeHighScore', highScore);
        alert(`🏆 New High Score! ${score} 🏆`);
    } else {
        alert(`Time's Up! Your score: ${score}`);
    }
    resetGame();
}

function resetGame() {
    player = {
        x: canvas.width/2,
        y: canvas.height/2,
        size: 20,
        speed: 5
    };
    enemies = [];
    powerups = [];
    score = 0;
    timeLeft = 30;
    gameRunning = false;
    document.getElementById('score').innerText = '0';
    document.getElementById('time').innerText = '30';
    document.getElementById('highScore').innerText = highScore;
}

function startGame() {
    resetGame();
    gameRunning = true;
    
    // Start game loop
    function gameLoop() {
        if (!gameRunning) return;
        
        movePlayer();
        updateEnemies();
        spawnEnemy();
        spawnPowerup();
        updateTimer();
        
        if (!checkCollisions()) {
            return;
        }
        
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
}

// Initial draw
draw();