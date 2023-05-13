window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('a.nav-item');
    const logoImg = document.querySelector('#logo-img');

    // 네비게이션 링크 클릭 이벤트 처리
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // 스크롤 이동
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 로고 이미지 클릭 이벤트 처리
    logoImg.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector('#masthead');

        // 스크롤 이동
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    // 팀원 섹션에서 로고 클릭 시 초기 페이지로 스크롤 이동
    const teamSection = document.querySelector('#team');
    teamSection.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector('#masthead');

        // 스크롤 이동
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});