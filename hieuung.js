document.addEventListener('DOMContentLoaded', function () {
  // 1. Scroll animation thuần
  const hero = document.querySelector('.hero');
  const cards = document.querySelectorAll('.grid .card');
  const statsLeft = document.querySelector('.stats-left');
  const statsRight = document.querySelector('.stats-right');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    if (hero && hero.getBoundingClientRect().top < windowHeight - 100) {
      hero.classList.add('active');
    }

    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < windowHeight - 50) {
        setTimeout(() => card.classList.add('active'), index * 150);
      }
    });

    if (statsLeft && statsLeft.getBoundingClientRect().top < windowHeight - 100) {
      statsLeft.classList.add('active');
    }
    if (statsRight && statsRight.getBoundingClientRect().top < windowHeight - 100) {
      statsRight.classList.add('active');
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // 2. GSAP animation
  gsap.registerPlugin(ScrollTrigger);
  const logoWrap = document.getElementById('logoWrap');
  const badge = document.getElementById('badge');
  const banner = document.getElementById('banner');
  const intro = document.getElementById('intro');

  function getDelta() {
    const from = logoWrap.getBoundingClientRect();
    const to = badge.getBoundingClientRect();
    const fromCenter = { x: from.left + from.width / 2, y: from.top + from.height / 2 };
    const toCenter = { x: to.left + to.width / 2, y: to.top + to.height / 2 };
    const dx = toCenter.x - fromCenter.x;
    const dy = toCenter.y - fromCenter.y;
    const scale = (to.width * 0.7) / from.width;
    return { dx, dy, scale };
  }

  gsap.set(logoWrap, { transformOrigin: "50% 50%" });

  function runAnimation() {
    if (!logoWrap || !badge || !banner) return;
    const { dx, dy, scale } = getDelta();
    const tl = gsap.timeline({ delay: 2 });
    tl.to(logoWrap, { x: dx, y: dy, scale: scale, duration: 1.5, ease: "power2.inOut" }, 0)
      .to(badge, { opacity: 1, duration: 1, ease: "power2.inOut" }, 0.2)
      .to(banner, { opacity: 1, duration: 1.2, ease: "power2.inOut" }, 0.5)
      .to(".scroll-hint", { opacity: 1, duration: 1 }, ">")
      .to(logoWrap, { opacity: 0, duration: 0.5, ease: "power1.inOut" }, ">");
  }
  window.addEventListener("load", runAnimation);

  gsap.fromTo('.site', { opacity: 0 }, {
    opacity: 1, ease: 'none',
    scrollTrigger: { trigger: intro, start: 'top top', end: '+=120%', scrub: true }
  });

  // youtube
  const stats = document.querySelectorAll('.stat-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  stats.forEach(stat => observer.observe(stat));
  // bo cong thuong
  const productImages = document.querySelector('.product-images');
  const productDescription = document.querySelector('.product-description-new');

  function revealProductSection() {
    const windowHeight = window.innerHeight;
    const sectionTop = productImages.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      productImages.classList.add('active');
      productDescription.classList.add('active');
    }
  }

  window.addEventListener('scroll', revealProductSection);
  revealProductSection();
  //sp
  const demoElements = document.querySelectorAll('.demo-slide-left, .demo-slide-right');

  function revealDemoOnScroll() {
    const windowHeight = window.innerHeight;

    demoElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealDemoOnScroll);
  window.addEventListener('load', revealDemoOnScroll);
  // contact
  const slideUpElements = document.querySelectorAll('.slide-up');

  function revealSlideUp() {
    const windowHeight = window.innerHeight;

    slideUpElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealSlideUp);
  window.addEventListener('load', revealSlideUp);
  // Section SEO
  const seoBoxes = document.querySelectorAll('.seo-box');

  function revealSeoOnScroll() {
    const windowHeight = window.innerHeight;
    seoBoxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < windowHeight - 100) {
        setTimeout(() => box.classList.add('active'), index * 200);
      }
    });
  }

  window.addEventListener('scroll', revealSeoOnScroll);
  window.addEventListener('load', revealSeoOnScroll);
  let btn = document.getElementById("btnTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});

