window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('a.nav-item');
    const logoImg = document.querySelector('#logo-img');

    // 스크롤 이벤트 처리 함수
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // 스크롤 이동
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 네비게이션 링크 클릭 이벤트 처리
    navLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
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
    teamSection.addEventListener('click', scrollToSection);

    // 페이지 완전히 로드 후 스크롤 이벤트 처리
    window.addEventListener('load', (event) => {
        const hash = window.location.hash;
        if (hash && hash !== '#masthead') {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const targetSection = document.querySelector('#masthead');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});