
let index = 0;
  const texts = document.querySelectorAll(".rotating-text");
  const rotator = document.querySelector(".text-rotator");
  let intervalId;

  function showText() {
    texts.forEach((el) => el.classList.remove("active"));
    texts[index].classList.add("active");
    index = (index + 1) % texts.length;
  }

  function startRotation() {
    intervalId = setInterval(showText, 10000);
  }

  function stopRotation() {
    clearInterval(intervalId);
  }

  // Start and bind events
  showText();
  startRotation();

  rotator.addEventListener("mouseenter", stopRotation);
  rotator.addEventListener("mouseleave", startRotation);


document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const categoryFilter = document.getElementById("categoryFilter");
  const galleryItems = document.querySelectorAll(".design");

  // Open lightbox when an image is clicked
  galleryItems.forEach(item => {
    const img = item.querySelector("img");

    img.addEventListener("click", () => {
      const imgSrc = item.dataset.img;
      const title = item.dataset.title;

      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title;
        lightbox.classList.add("show");
        lightbox.setAttribute("aria-hidden", "false");
      }
    });

    // Prevent lightbox from opening when buttons are clicked
    const whatsappBtn = item.querySelector(".whatsapp-btn");
    const downloadBtn = item.querySelector(".download-btn");

    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", e => e.stopPropagation());
    }
    if (downloadBtn) {
      downloadBtn.addEventListener("click", e => e.stopPropagation());
    }
  });

  // Close lightbox when close button is clicked
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    lightboxCaption.textContent = "";
  });

  // Filter gallery items based on selected category
  categoryFilter.addEventListener("change", function () {
    const selectedCategory = this.value;

    galleryItems.forEach(item => {
      const itemCategory = item.dataset.category;
      if (selectedCategory === "all" || selectedCategory === itemCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
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


  


  