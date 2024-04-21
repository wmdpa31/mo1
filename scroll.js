// 페이지 로드 시에 애니메이션 적용
document.addEventListener("DOMContentLoaded", function () {
  // 애니메이션을 적용할 요소 선택
  var elements = document.querySelectorAll(".animate-on-scroll");

  var elements2 = document.querySelectorAll(".animate-on-scroll-main");

  // 각 요소에 대해 반복
  elements.forEach(function (element) {
    // visible 클래스 추가
    element.classList.add("visible");
  });

  // 각 요소에 대해 반복
  elements2.forEach(function (element) {
    // visible 클래스 추가
    element.classList.add("visible");
  });
});

// 스크롤 이벤트 감지
window.addEventListener("scroll", function () {
  // 애니메이션을 적용할 요소 선택
  var elements = document.querySelectorAll(".animate-on-scroll");

  var elements2 = document.querySelectorAll(".animate-on-scroll-main");

  // 각 요소에 대해 반복
  elements.forEach(function (element) {
    // 요소의 위치 가져오기
    var position = element.getBoundingClientRect();

    // 화면에 보이는지 확인
    if (position.top < window.innerHeight && position.bottom >= 0) {
      // 화면에 보이면 visible 클래스 추가
      element.classList.add("visible");
    } else {
      // 화면에 안 보이면 visible 클래스 제거
      element.classList.remove("visible");
    }
  });

  // 각 요소에 대해 반복
  elements2.forEach(function (element) {
    // 요소의 위치 가져오기
    var position = element.getBoundingClientRect();

    // 화면에 보이는지 확인
    if (position.top < window.innerHeight && position.bottom >= 0) {
      // 화면에 보이면 visible 클래스 추가
      element.classList.add("visible");
    } else {
      // 화면에 안 보이면 visible 클래스 제거
      element.classList.remove("visible");
    }
  });
});
