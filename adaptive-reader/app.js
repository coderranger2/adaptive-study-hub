// Game Background URLs (Looping YouTube Parkour & Sensory Backgrounds)
const GAME_STREAMS = {
  minecraft: "https://www.youtube.com/embed/n_Dv4JMiwK8?autoplay=1&mute=1&controls=0&loop=1&playlist=n_Dv4JMiwK8&playsinline=1",
  mariokart: "https://www.youtube.com/embed/1_4eWdZq8wA?autoplay=1&mute=1&controls=0&loop=1&playlist=1_4eWdZq8wA&playsinline=1",
  subwaysurfer: "https://www.youtube.com/embed/zZ7AimPACzc?autoplay=1&mute=1&controls=0&loop=1&playlist=zZ7AimPACzc&playsinline=1",
  ambient: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&controls=0&loop=1&playlist=jfKfPfyJRdk&playsinline=1"
};

const bgFrame = document.getElementById("bg-video");
const themeToggleBtn = document.getElementById("themeToggle");

// Switch Game Backgrounds (Minecraft, Mario Kart, etc.)
function changeGameBg(type) {
  if (GAME_STREAMS[type]) {
    bgFrame.src = GAME_STREAMS[type];
    
    // Update active button state
    document.querySelectorAll(".game-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(document.querySelectorAll(".game-btn")).find(btn => 
      btn.innerText.toLowerCase().includes(type)
    );
    if (activeBtn) activeBtn.classList.add("active");
  }
}

// Light / Dark Mode Toggle
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeToggleBtn.innerHTML = isLight 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
});

// Interactive Card Click Mock
document.querySelectorAll(".curriculum-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    console.log(`Entering Room: ${title}`);
  });
});