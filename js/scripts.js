// 검색창에 검색키워드 출력
const params = new URLSearchParams(window.location.search);
const query = params.get('q');
const searchingBar = document.getElementById('searching-bar');

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
const article = document.querySelector('.article');
const closeButton = document.querySelector('.close-area');

article.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'block';
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