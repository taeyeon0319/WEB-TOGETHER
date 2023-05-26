// 검색창에 검색키워드 출력
const params = new URLSearchParams(window.location.search);
const query = params.get('q');
const searchingBar = document.getElementById('searching-bar2');

if (query != null) {
    searchingBar.placeholder = query;
}

// 돋보기 아이콘도 검색 가능
const form = document.querySelector('#search-form');
const icon1 = document.querySelector('#searching-icon');
const icon2 = document.querySelector('#searching-icon2');

if (icon1 != null) {
    icon1.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지
        form.submit(); // 폼 전송
    });
}

if (icon2 != null) {
    icon2.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지
        form.submit(); // 폼 전송
    });
}

// 뉴스 기사 modal창 
const modal = document.querySelector('#modal');
const articles = document.querySelectorAll('.article');
const closeButton = document.querySelector('.close-area');
const modalTitle = document.querySelector('.modal-window .title h1');
const modalInfo = document.querySelector('.modal-window .content-info p');

articles.forEach(function(article) {
  article.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';

    // 해당 article의 정보 가져와서 모달에 표시
    const title = article.querySelector('.ar_title').textContent;
    const press = article.querySelector('.ar_press').textContent;
    const date = article.querySelector('.ar_date').textContent;

    modalTitle.textContent = title;
    modalInfo.textContent += `${press}`;
  });
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 모달 외부를 클릭하면 모달 닫기
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ESC 키를 누르면 모달 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});
