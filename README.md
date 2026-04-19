v# 🎯 Arrow Escape Game

### *A Thrilling Arcade Game Where Speed Meets Strategy*

[![GitHub Pages](https://img.shields.io/badge/Play-Live-00b4d8?style=for-the-badge&logo=githubpages&logoColor=white)](https://hamdan-saddique-ai.github.io/Arrow-Escape-Game)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

---

## 🎮 **Play Now!**

> **Live Demo:** [hamdan-saddique-ai.github.io/Arrow-Escape-Game](https://hamdan-saddique-ai.github.io/Arrow-Escape-Game)

---

## 📸 **Game Preview**
┌─────────────────────────────────────────────┐
│ Score: 420 │ High Score: 1337 │ Time: 18s │
├─────────────────────────────────────────────┤
│ │
│ ⬅️ 🎯 ➡️ │
│ 👁️👁️ │
│ ▼ │
│ 🔴 💙 🔴 │
│ │
│ Collect 💙 Avoid 🔴 │
│ │
└─────────────────────────────────────────────┘
🎮 Use Arrow Keys to Move

text

---

## 🚀 **Features**

| Feature | Description |
|---------|-------------|
| 🎮 **Smooth Controls** | Real-time keyboard input with arrow keys |
| 💙 **Power-up System** | Collect blue stars for score boost & speed boost |
| 🔴 **Dynamic Enemies** | Red arrows spawn from all 4 directions |
| ⏱️ **Time Challenge** | 30 seconds to achieve maximum score |
| 🏆 **High Score** | Local storage saves your best performance |
| ✨ **Visual Effects** | Glow effects, animated eyes, smooth graphics |
| 📱 **Responsive** | Works on desktop and laptop browsers |
| 🎯 **Increasing Difficulty** | More enemies spawn as time progresses |

---

## 🎯 **How to Play**

### **Controls**
⬆️ Up Arrow - Move Up
⬇️ Down Arrow - Move Down
⬅️ Left Arrow - Move Left
➡️ Right Arrow - Move Right

text

### **Game Rules**
1. 🟢 **Start Game** - Click "Start Game" button
2. 💙 **Collect Blue Stars** - Each star = +10 points + 2 seconds speed boost
3. 🔴 **Avoid Red Arrows** - Touching one ends the game
4. ⏱️ **Beat the Clock** - Survive 30 seconds to win
5. 🏆 **Set Records** - Beat your high score!

### **Scoring System**
⭐ Blue Star = +10 points
🏁 Completion = Time bonus
🏆 High Score = Bragging rights!

text

---

## 💻 **Tech Stack**

```javascript
const techStack = {
    frontend: {
        html5: "Semantic structure",
        css3: "Modern styling with gradients & animations",
        javascript: "ES6+ features"
    },
    features: {
        canvas: "2D rendering API",
        localStorage: "High score persistence",
        requestAnimationFrame: "Smooth 60fps gameplay"
    }
};
Technology	Purpose
HTML5	Game structure & canvas element
CSS3	Styling, gradients, shadows, responsive design
Vanilla JavaScript	Game logic, collision detection, animations
Canvas API	2D graphics rendering
LocalStorage	Persisting high scores
📁 Project Structure
text
Arrow-Escape-Game/
│
├── index.html          # Main game structure
├── style.css           # Styling & animations
├── game.js            # Core game logic
├── README.md          # Documentation
└── assets/            # (Optional) Images/sounds
    ├── hit.mp3
    └── powerup.mp3
🛠️ Installation & Setup
Option 1: Play Online (Recommended)
Simply visit: hamdan-saddique-ai.github.io/Arrow-Escape-Game

Option 2: Run Locally
Clone the repository

bash
git clone https://github.com/Hamdan-Saddique-ai/Arrow-Escape-Game.git
cd Arrow-Escape-Game
Open in browser

bash
# Just double-click index.html or run:
open index.html     # macOS
start index.html    # Windows
xdg-open index.html # Linux
Start playing! 🎮

Option 3: Local Server (Optional)
bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then visit http://localhost:8000
🎨 Customization Guide
Change Player Color
javascript
// In game.js, line ~85
ctx.fillStyle = '#00b4d8';  // Change to any color
Adjust Game Difficulty
javascript
// In game.js, line ~13
let enemySpeed = 2;    // Increase for harder (3-5)
let playerSpeed = 5;   // Increase for faster player
Modify Time Limit
javascript
// In game.js, line ~19
let timeLeft = 30;     // Change to 60 for longer games
Add New Power-ups
javascript
// In spawnPowerup() function
// Add different colored powerups with unique effects
if (Math.random() < 0.01) {
    powerups.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 15,
        type: 'shield'  // Add new type
    });
}
🐛 Known Issues & Solutions
Issue	Solution
Game not starting	Check console for errors, refresh page
Laggy gameplay	Close other tabs, reduce canvas size
High score not saving	Check localStorage permissions
Keys not responding	Click on canvas first to focus
🔮 Future Updates
🌟 Power-up variety (Shield, Slow-mo, Double points)

🎵 Background music & sound effects

🌍 Leaderboard (Global rankings)

🎯 Multiple levels with increasing difficulty

👥 Multiplayer mode (Race against friends)

📱 Touch controls for mobile devices

🎨 Customizable characters

⚡ Special abilities (Dash, Teleport)

🤝 Contributing
Contributions are welcome! Here's how:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

Development Setup
bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Arrow-Escape-Game.git

# Make changes
# Test locally by opening index.html

# Commit and push
git add .
git commit -m "Description of changes"
git push origin feature/AmazingFeature
📊 Game Statistics
yaml
Performance:
  - Frame Rate: 60 FPS
  - Load Time: < 100ms
  - File Size: ~15KB (uncompressed)
  
Gameplay:
  - Enemy Spawn Rate: 1 per 2 seconds
  - Power-up Spawn Chance: 2% per frame
  - Speed Boost Duration: 2 seconds
  - Default Time Limit: 30 seconds
🏆 Achievements
✅ First Blood - Collect your first power-up

✅ Survivor - Survive 30 seconds

✅ Centurion - Score 100+ points

✅ Speed Demon - Collect 10 power-ups in one game

🔜 Invincible - Complete game without touching any enemy

🔜 Perfectionist - Collect every power-up that spawns

📝 Changelog
v1.0.0 (2026-04-19)
✨ Initial release

🎮 Core gameplay mechanics

💙 Power-up system

🏆 High score tracking

🎨 Visual effects & animations

📞 Connect With Me
https://img.shields.io/badge/GitHub-Hamdan--Saddique--ai-181717?style=for-the-badge&logo=github
https://img.shields.io/badge/LinkedIn-Hamdan%2520Saddique-0077B5?style=for-the-badge&logo=linkedin
https://img.shields.io/badge/Twitter-@HamdanSaddique-1DA1F2?style=for-the-badge&logo=twitter
https://img.shields.io/badge/Portfolio-Hamdan%2520Saddique-000000?style=for-the-badge&logo=vercel

💖 Support
If you enjoyed this game, please:

⭐ Star this repository
🍴 Fork it to your profile
🐛 Report bugs via Issues
💡 Suggest new features

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 Hamdan Saddique

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
🙏 Acknowledgments
Inspired by classic arcade games

Canvas API documentation from MDN

Color palette inspiration from Coolors.co

Special thanks to GitHub Pages for hosting

<div align="center">
Made with 💙 by Hamdan Saddique
"Turning ideas into interactive experiences"

⬆ Back to Top

</div> ```
