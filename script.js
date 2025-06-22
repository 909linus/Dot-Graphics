document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".design");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("closeBtn");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  const phone = "254783547300";

  // Setup WhatsApp buttons
  galleryItems.forEach(item => {
    const btn = item.querySelector(".whatsapp-btn");
    const title = item.dataset.title || "Design Inquiry";
    const msg = `Hi, I'm interested in your design: ${title}`;
    btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });

  // Open Lightbox on click
  galleryItems.forEach(item => {
    item.addEventListener("click", e => {
      const isButton = e.target.classList.contains("whatsapp-btn") || e.target.classList.contains("download-btn");
      if (isButton) return;

      const imgSrc = item.dataset.img;
      const title = item.dataset.title;

      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title;
        lightbox.classList.add("show");
        lightbox.setAttribute("aria-hidden", "false");
      }
    });
  });

  // Close Lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = ""; // clear image
  });

  // Optional: Close lightbox on background click
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
    }
  });

  // Category Filtering
  categoryFilter.addEventListener("change", e => {
    const selected = e.target.value.toLowerCase();
    galleryItems.forEach(item => {
      const itemCategory = item.dataset.category.toLowerCase();
      const show = selected === "all" || itemCategory === selected;
      item.style.display = show ? "block" : "none";
    });
  });

  // Search Filtering with Tags
  searchInput.addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();
    galleryItems.forEach(item => {
      const title = (item.dataset.title || "").toLowerCase();
      const tags = (item.dataset.tags || "").toLowerCase();
      const match = title.includes(keyword) || tags.includes(keyword);
      item.style.display = match ? "block" : "none";
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    fetch('contact.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('contact-placeholder').innerHTML = data;
  
        // Now that the HTML is in the DOM, attach event listeners
        document.getElementById('whatsapp-button').addEventListener('click', contactWhatsApp);
        document.getElementById('email-button').addEventListener('click', contactEmail);
      });
  });
  
  function contactWhatsApp() {
    const phoneNumber = "254783547300"; 
    const message = encodeURIComponent("Hello, I would like to inquire about your services.");
    const isMobile = /iphone|ipod|android/i.test(navigator.userAgent.toLowerCase());
    const whatsappURL = isMobile 
      ? `https://wa.me/${phoneNumber}?text=${message}` 
      : `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.location.href = whatsappURL;
  }
  
  function contactEmail() {
    const email = "lnsmuriuki01@gmail.com"; 
    window.location.href = "mailto:" + email;
  }


  