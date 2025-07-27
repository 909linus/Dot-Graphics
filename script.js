document.addEventListener("DOMContentLoaded", function () {

  // ======= SEARCH & FILTER =======
  document.getElementById('search-input').addEventListener('input', filterItems);
  document.getElementById('category-filter').addEventListener('change', filterItems);

  function filterItems() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
      const tags = item.getAttribute('data-tags').toLowerCase();
      const itemCategory = item.getAttribute('data-category');

      const matchesSearch = tags.includes(query);
      const matchesCategory = category === 'all' || category === itemCategory;

      item.style.display = (matchesSearch && matchesCategory) ? 'inline-block' : 'none';
    });
  }

  // ======= LIGHTBOX =======
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const portfolioImages = document.querySelectorAll('.portfolio-img');
  let currentIndex = 0;

  portfolioImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });

  document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });

  document.getElementById('prevBtn').addEventListener('click', () => navigate(-1));
  document.getElementById('nextBtn').addEventListener('click', () => navigate(1));

  function navigate(direction) {
    const images = [...document.querySelectorAll('.portfolio-img')];
    currentIndex = (currentIndex + direction + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  // ======= WHATSAPP BUTTON FUNCTIONALITY =======
  const whatsappButtons = document.querySelectorAll('.btn.whatsapp');

  whatsappButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // stop default link behavior

      // find the related design title or image
      const item = button.closest('.portfolio-item');
      const img = item.querySelector('.portfolio-img');
      const designTitle = img.alt; // use the image alt as design title

      // create WhatsApp message
      const phoneNumber = "254783547300"; 
      const message = encodeURIComponent(`Hello, I'm interested in your design: ${designTitle}`);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

      // open WhatsApp chat
      window.open(whatsappURL, '_blank');
    });
  });

});






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


  



  


  