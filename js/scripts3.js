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
    modalInfo.textContent = `${press}`;
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

// Pagination 기능 추가
const articlesPerPage = 10; // 페이지 당 보여줄 article 개수
const pagination = document.getElementById('pagination');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
let currentPage = 1; // 현재 페이지

// 페이지를 보여주는 함수
function showPage(page) {
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = page * articlesPerPage;

  articles.forEach((article, index) => {
    if (index >= startIndex && index < endIndex) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });

  pagination.textContent = `\u00A0\u00A0 ${page}/${Math.ceil(articles.length / articlesPerPage)} \u00A0\u00A0`;
}

// 초기 페이지 로드 시 첫 페이지 보여주기
showPage(currentPage);

// 이전 페이지로 이동
function goToPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

// 다음 페이지로 이동
function goToNextPage() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

// 이전 페이지로 이동하는 버튼 클릭 이벤트 처리
prevPageBtn.addEventListener('click', goToPrevPage);

// 다음 페이지로 이동하는 버튼 클릭 이벤트 처리
nextPageBtn.addEventListener('click', goToNextPage);

