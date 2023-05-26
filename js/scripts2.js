
// project페이지 아코디언
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('i');
        item.classList.toggle('open');
        icon.classList.toggle('fa-angle-right');
        icon.classList.toggle('fa-angle-down');
    });
});