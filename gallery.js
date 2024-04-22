window.onload = () => {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const collapseBtn = document.getElementById('collapseBtn');
  const hiddenImages = document.querySelectorAll('#gallery img.hidden');

  showMoreBtn.addEventListener('click', () => {
    hiddenImages.forEach((img) => {
      img.classList.remove('hidden');
    });
    collapseBtn.style.display = 'inline-block';
    collapseBtn.style.backgroundColor = 'ffe08c';
    collapseBtn.style.width = '70px';
    collapseBtn.style.textAlign = 'center';
    collapseBtn.style.display = 'block';
    collapseBtn.style.margin = '7% auto';
    collapseBtn.style.borderRadius = '15px';

    showMoreBtn.style.display = 'none';
  });

  collapseBtn.addEventListener('click', () => {
    const galleryImages = document.querySelectorAll('#addGalleyItem');
    galleryImages.forEach((img) => {
      img.classList.add('hidden');
    });
    collapseBtn.style.display = 'none';

    showMoreBtn.style.display = 'inline-block';
    showMoreBtn.style.backgroundColor = 'ffe08c';
    showMoreBtn.style.width = '70px';
    showMoreBtn.style.textAlign = 'center';
    showMoreBtn.style.display = 'block';
    showMoreBtn.style.margin = '7% auto';
    showMoreBtn.style.borderRadius = '15px';
  });

  const galleryImages = document.querySelectorAll('#gallery img');
  galleryImages.forEach((img) => {
    img.onclick = () => {
      img.classList.toggle('full');
    };
  });

  const btnShareKa = document.querySelector('.shareKt');
  btnShareKa.addEventListener('click', () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '장민석 ♥ 이지연의 모바일 청첩장',
        description: '결혼식에 초대합니다♡',
        imageUrl: 'https://i.imgur.com/JWVYIiU.png',
        imageWidth: 1200,
        imageHeight: 630,
        link: {
          mobileWebUrl: 'https://mo1.luvle.co.kr',
          webUrl: 'https://mo1.luvle.co.kr',
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: 'https://mo1.luvle.co.kr',
            webUrl: 'https://mo1.luvle.co.kr',
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    });
  });

  // const btnShareKs = document.querySelector(".shareKs");
  // btnShareKs.addEventListener("click", () => {
  //   Kakao.Story.open({
  //     url: "https://developers.kakao.com",
  //     text: "카카오 개발자 사이트로 놀러오세요! #개발자 #카카오 :)",
  //   });
  // });

  // const btnShareFb = document.querySelector(".shareFb");
  // btnShareFb.addEventListener("click", () => {
  //   const pageUrl = "mo1.luvle.co.kr/";
  //   window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
  // });

  const shareViaSMSBtn = document.querySelector('.shareTwoG');
  shareViaSMSBtn.addEventListener('click', () => {
    const message = '모바일 청첩장을 확인해주세요! ' + window.location.href;
    const link = 'sms:?body=' + encodeURIComponent(message);
    window.location.href = link;
  });
};
