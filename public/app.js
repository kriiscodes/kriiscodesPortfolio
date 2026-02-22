const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");

if (hamburger && mobileMenu) {
  const closeMobileMenu = () => {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  const openMobileMenu = () => {
    mobileMenu.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  hamburger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.classList.contains("open")) {
      return;
    }

    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });
}

const openBtn = document.querySelector(".btnFill");
const modal = document.getElementById("about");
const closeBtn = document.getElementById("close");

if (openBtn && modal && closeBtn) {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
    document.body.classList.add("about-open");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("about-open");
  });

  // Close modal when clicking outside modal container.
  modal.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("about-open");
  });

  // Keep modal open when clicking inside content.
  const modalContainer = document.getElementById("modalContainer");
  if (modalContainer) {
    modalContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}

const contactBtn = document.getElementById("contactBtn");
const contactBtnMobile = document.getElementById("contactBtnMobile");
const contactModal = document.getElementById("contactModal");
const closeContact = document.querySelector(".closeContact");

if (contactModal && closeContact) {
  const openContactModal = (e) => {
    e.preventDefault();
    contactModal.classList.add("show");

    if (mobileMenu && hamburger) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }

    document.body.classList.add("no-scroll");
  };

  if (contactBtn) {
    contactBtn.addEventListener("click", openContactModal);
  }

  if (contactBtnMobile) {
    contactBtnMobile.addEventListener("click", openContactModal);
  }

  closeContact.addEventListener("click", () => {
    contactModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

  contactModal.addEventListener("click", () => {
    contactModal.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

  const contactContainer = contactModal.querySelector(".container");
  if (contactContainer) {
    contactContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}
