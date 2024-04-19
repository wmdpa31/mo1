document.addEventListener("DOMContentLoaded", function () {
  function updateCountdown() {
    // 결혼 날짜 설정 (년, 월(0부터 시작), 일, 시, 분)
    const weddingDate = new Date(2024, 5, 15, 11, 30); // 예시: 2024년 10월 12일

    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById("daysInfoLeft").textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("daysLeft").textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("hoursLeft").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutesLeft").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("secondsLeft").textContent = seconds
        .toString()
        .padStart(2, "0");
    } else {
      document.getElementById("coverdiscInfo").textContent = "결혼 축하합니다!";
      clearInterval(intervalID); // 결혼 날짜가 지나면 타이머 중지
    }
  }

  // 페이지 로드시 초기화 및 1초마다 업데이트
  updateCountdown();
  const intervalID = setInterval(updateCountdown, 1000);
});
