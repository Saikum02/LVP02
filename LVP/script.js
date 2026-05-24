let currentSmileState = 0;

function nextScreen(screenNumber) {
    // Hide all current active screens
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.classList.remove('active');
    }

    // Activate target screen
    const nextCard = document.getElementById(`screen${screenNumber}`);
    if (nextCard) {
        nextCard.classList.add('active');
    }
}

// Interactive Screen 4 Logic - Upgrading the smile status
function upgradeSmile() {
    const meter = document.getElementById('emojiMeter');
    const txt = document.getElementById('meterText');
    const nextBtn = document.getElementById('screen4Next');

    currentSmileState++;

    if (currentSmileState === 1) {
        meter.innerHTML = "😏";
        txt.innerHTML = "Seeing the teasing text from morning...";
    } else if (currentSmileState === 2) {
        meter.innerHTML = "😊";
        txt.innerHTML = "Anger levels starting to decrease...";
    } else if (currentSmileState >= 3) {
        meter.innerHTML = "🥰";
        txt.innerHTML = "Madam successfully smiled! Forgiveness unlocked.";
        nextBtn.classList.remove('hidden');
    }
}

// Interactive Screen 5 Logic - Runaway 'No' Button code matching the reel
function dodgeNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Generate unpredictable coordinates for the button to jump within the card bounds
    const randomX = Math.floor(Math.random() * 120) - 60; // moves horizontally
    const randomY = Math.floor(Math.random() * 80) - 100;  // moves vertically up
    
    noBtn.style.position = 'absolute';
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Tease message swap inside the button text as it moves
    const teaseTexts = ["No 🙈", "Arey yaaar... 🥺", "Not allowed! ❌", "Click YES already! 😂"];
    const randomIndex = Math.floor(Math.random() * teaseTexts.length);
    noBtn.innerText = teaseTexts[randomIndex];
}