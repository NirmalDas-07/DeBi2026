// CHANGE THIS TO HER REAL NICKNAME
const correctPassword = "Devee";

function checkPassword() {
  const input = document.getElementById("password").value;

  if (input.toLowerCase() === correctPassword.toLowerCase()) {
    window.location.href = "week.html";
  } else {
    document.getElementById("error").innerText =
      "Wrong nickname 😛 Try again";
  }
}

// SECRET PHOTO CLICKS (ONLY ON HOMEPAGE)
const photo = document.getElementById("couplePhoto");

if (photo) {
  let clickCount = 0;

  photo.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
      alert("That felt nice… again? 💕");
    } 
    else if (clickCount === 3) {
      alert("Hmm… you really like us 😌");
    } 
    else if (clickCount === 5) {
      alert("No matter how many times you click… you’ll always have my heart 💖");
      clickCount = 0;
    }
  });
}


// BIRTHDAY WEEK LOGIC
const today = new Date("2026-01-07");
const startDate = new Date("2026-01-05");

document.querySelectorAll(".day-card").forEach(card => {
  const day = parseInt(card.getAttribute("data-day"));
  const unlockDate = new Date(startDate);
  unlockDate.setDate(startDate.getDate() + (day - 1));

const icon = card.querySelector(".lock-icon");

if (today < unlockDate) {
  card.classList.add("locked");

  const countdown = card.querySelector(".countdown");
  const diffTime = unlockDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  countdown.textContent = diffDays === 1
    ? "Opens tomorrow 💕"
    : `Opens in ${diffDays} days 💌`;

  card.addEventListener("click", () => {
    alert("Not yet, my love 💕 Come back on the right day 💌");
  });
}

 else {
  icon.style.display = "block";

  // Floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 80 + "%";
    card.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }, 1500);

  card.addEventListener("click", () => {
    window.location.href = `days/day${day}.html`;
  });
}
});
