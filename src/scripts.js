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

     // Elements
  const buyTicketBtn = document.getElementById('buyTicketBtn');
  const paymentModal = document.getElementById('paymentModal');
  const closeModal = document.getElementById('closeModal');
  const copyBtn = document.getElementById('copyBtn');
  const accountNumber = document.getElementById('accountNumber');

  // Open modal
  buyTicketBtn.addEventListener('click', () => {
    paymentModal.classList.remove('hidden');
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    paymentModal.classList.add('hidden');
  });

  // Copy account number
  copyBtn.addEventListener('click', () => {
    const text = accountNumber.textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copied ✅';
      copyBtn.classList.add('bg-green-500');
      setTimeout(() => {
        copyBtn.textContent = 'Copy Account Number';
        copyBtn.classList.remove('bg-green-500');
      }, 2000);
    });
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
// pay and win prize 

   function openPaymentModal() {
    document.getElementById('paymentModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closePaymentModal() {
    document.getElementById('paymentModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
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

