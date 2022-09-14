(() => {
const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.backdrop.addEventListener("click", logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }

  function logBackdropClick() {
    console.log("Это клик в бекдроп");
  }
  
})();
// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     document.body.classList.toggle('scroll-lock');
//   };
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);
//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//   });
// })();