
    AOS.init();

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 100; // smaller = faster

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });


     const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  });


  var projectSwiper = new Swiper(".projectSwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });

 
document.getElementById('joinUsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('submit_join_us.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    alert(data.trim() === 'success' ? "Registration successful!" : "Failed: " + data);
    if (data.trim() === 'success') this.reset();
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('submit_contact.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    alert(data.trim() === 'success' ? "Message sent!" : "Failed: " + data);
    if (data.trim() === 'success') this.reset();
  });
});