  // Welcome alert
    window.onload = () => {
      setTimeout(() => {
        alert("🎶 Welcome to Akiikitan Concert 2025! 🎉");
      }, 800);
    };

    // Back to top functionality
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.remove("hidden");
      } else {
        backToTop.classList.add("hidden");
      }
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });


   function sendToWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "2349050766830"; // your WhatsApp number
    const text = `Hello Akkitan Team,%0A%0AMy Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  }



   const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');

  // Open mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-y-full');
    mobileMenu.classList.add('translate-y-0');
  });

  // Close mobile menu
  closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-0');
    mobileMenu.classList.add('-translate-y-full');
  });

  // Close when clicking on menu links
  function closeMobileMenu() {
    mobileMenu.classList.remove('translate-y-0');
    mobileMenu.classList.add('-translate-y-full');
  }

// Update Nigeria time
function updateNigeriaTime() {
  const options = { timeZone: 'Africa/Lagos', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const time = new Intl.DateTimeFormat([], options).format(new Date());
  document.getElementById('nigeriaTime').textContent = time;
}
setInterval(updateNigeriaTime, 1000);
updateNigeriaTime();

// Countdown timer to 12th December 2025, 6:00 PM Nigeria time
function updateCountdown() {
  const eventDate = new Date('2025-12-12T18:00:00+01:00'); // Nigeria is UTC+1
  const now = new Date(new Date().toLocaleString("en-US", {timeZone: "Africa/Lagos"}));
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').textContent = "The concert has started!";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('countdown').textContent = `${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// modal
const modal = document.getElementById("ticketModal");
const openBtn = document.getElementById("buyTicketBtn");
const closeBtn = document.getElementById("closeModal");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// Copy Account Number
document.getElementById("copyBtn2")?.addEventListener("click", () => {
  const acc = document.getElementById("accountNumber").textContent;
  navigator.clipboard.writeText(acc);
  alert("✅ Account number copied: " + acc);
});

//MODAL 2

 const giftModal = document.getElementById("giftModal");
  const openGiftModal = document.getElementById("openGiftModal");
  const closeGiftModal = document.getElementById("closeGiftModal");
  const copyBtn3 = document.getElementById("copyBtn3");
  const accountNumber2 = document.getElementById("accountNumber2");

  openGiftModal.addEventListener("click", () => giftModal.classList.remove("hidden"));
  closeGiftModal.addEventListener("click", () => giftModal.classList.add("hidden"));
  window.addEventListener("click", e => { if (e.target === giftModal) giftModal.classList.add("hidden"); });
  copyBtn3.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber2.textContent);
    copyBtn3.textContent = "✅ Copied!";
    setTimeout(() => copyBtn3.textContent = "Copy Account Number", 2000);
  });

  
