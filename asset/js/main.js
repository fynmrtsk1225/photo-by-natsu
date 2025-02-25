// メニュー開閉
{
  const body = document.querySelector('.body');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const link = document.querySelector('.nav__list');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('open');
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  link.addEventListener('click', function() {
    body.classList.toggle('open');
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

// ギャラリー詳細 Mansoryレイアウト
const displayWidth = window.innerWidth
const container = document.querySelector('.all_gallery') || null;

// レスポンシブ対応
{
  const mediaQueryList = window.matchMedia('(min-width: 1024px)');

  if (container) {
    const listener = (event) => {
      // リサイズ時に行う処理
      if (event.matches) {
        // 1024px以上
        const msnry = new Masonry( container, {
          gutter: 40
        });
        console.log(msnry)
      } else {
        // 1024px未満
        const msnry = new Masonry( container, {
          gutter: 20
        });
        console.log(msnry)
      }
    };
    
    mediaQueryList.addEventListener("change", listener)
    const msnry = new Masonry( container, {
      itemSelector: '.gallery_item',
      gutter: displayWidth < 1024 ? 20 : 40,
      percentPosition: true
    });
  }
}
