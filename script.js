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


  document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closeBtn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox_img');
    const lightboxCaption = document.getElementById('lightbox_caption');
    const whatsappBtn = document.getElementById('whatsapp_btn');
    const galleryItems = document.querySelectorAll('.project');
  
    // Lightbox open
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('figcaption');
  
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption.textContent;
  
        const msg = `Hi, I'm interested in your design: ${img.alt}`;
        whatsappBtn.href = `https://wa.me/254783547300?text=${encodeURIComponent(msg)}`;
  
        lightbox.style.display = 'flex';
      });
    });
  
    // Lightbox close
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    // Filter functionality
    const filterSelect = document.getElementById('category_select');
    filterSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      galleryItems.forEach(item => {
        if (selected === 'all' || item.classList.contains(selected)) {
          item.style.display = 'inline-block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  console.log

  