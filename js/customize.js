// -----  基本功能開關   ---------------------------------------------------
window.addEventListener('load', () => {
  navSticky(); // 捲動時固定主選單
  toggleSlider('.header .language button', '.header .language ul'); //語系
  fontSize(); // 全站字體
  fatFooter(); // fatFooter是否要展開
  scrollTables('.tableWrapper'); // table捲動功能

  webSearch(); // 搜尋功能

  // tabFunction({
  //   target: '.target1',
  //   modeSwitch: false, // 尺寸以上tab功能，尺寸以下手風琴功能
  //   openContent: false, // 預設先展開所有內容，僅開啟模式切換時才可使用
  //   openIndex: 0, // 預設開啟第幾個
  //   width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  //   autoClose: true, // 自動關閉其他開啟內容
  //   openSwitch: true, // 是否可開合/切換
  // });

  tabFunction({ target: '.target1', modeSwitch: true });

  tableAddDataAttributes({
    elemClass: '.tableList', // 目標table
    dataName: 'title', // tableList樣式 加上 data-title
  });

  // 手風琴功能
  accordionFunction({
    target: '.accordion',
    openContent: false, // 預設先展開所有內容，僅開啟模式切換時才可使用
    openDefault: true, // 是否有預設開啟
    openIndex: 0, // 預設開啟第幾個
    autoClose: true, // 自動關閉其他開啟內容
    openSwitch: true, // 是否可開合/切換
    info: {
      open: '展開', // 收合時顯示
      close: '收合', // 展開時顯示
    },
  });
});
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    // slidesPerView: 3,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    autoplay: {
      delay: 5000,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      init: function (swiper) {
        const controlBox = document.querySelector('.mpSlider .swiperControlBox');
        if (controlBox !== null) {
          const controlBoxBtn = document.querySelector('.mpSlider .swiperControlBox button');
          let nowState = swiper.autoplay.running ? true : false;
          let infoPlay = controlBoxBtn.dataset.infoPlay;
          let infoStop = controlBoxBtn.dataset.infoStop;
          nowState ? (controlBoxBtn.textContent = infoStop) : (controlBoxBtn.textContent = infoPlay);

          controlBoxBtn.addEventListener('click', (e) => {
            if (nowState) {
              nowState = false;
              swiper.autoplay.stop();
              controlBoxBtn.classList.add('stop');
              controlBoxBtn.textContent = infoPlay;
            } else {
              nowState = true;
              swiper.autoplay.start();
              controlBoxBtn.classList.remove('stop');
              controlBoxBtn.textContent = infoStop;
            }
          });
          swiper.slides.length === 1 ? controlBox.remove() : null;
        }
      },
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  //cp_photo

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    lazy: true,
    thumbs: {
      swiper: {
        el: '.navSlider .swiper', //設定指向到哪個swiper，使用另一個設定的參數
        lazy: true, // lazy load
        spaceBetween: 20,
        preloadImages: false, // 多筆設定lazy時須設定
        centeredSlides: false, // 多筆設定lazy時須設定
        slidesPerView: 4,
        watchSlidesVisibility: true, //防止不可点击
        navigation: {
          nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
          prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
          disabledClass: 'swiperArrow-disabled', //不可點選樣式
        },
        breakpoints: {
          100: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        },
      },
      autoScrollOffset: 1,
    },
  });
})();

//期刊典藏
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.customSwiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.customSwiperBox .nextSlider',
      prevEl: '.customSwiperBox .prevSlider',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
});

//tab切換
(function () {
  const tabs = document.querySelectorAll('.spinfoBlock2 .tab-btn');
  const panels = document.querySelectorAll('.spinfoBlock2 .tab-panel');
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
        t.tabIndex = i === idx ? 0 : -1;
        panels[i].hidden = i !== idx;
      });
      panels[idx].focus();
    });
    tab.addEventListener('keydown', (e) => {
      let newIdx = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + tabs.length) % tabs.length;
      if (newIdx !== idx) {
        tabs[newIdx].focus();
      }
    });
  });
})();

//spinfoBlock5 tab切換
(function () {
  const tabs = document.querySelectorAll('.spinfoBlock5 .tab-btn');
  const panels = document.querySelectorAll('.spinfoBlock5 .tab-panel');
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
        t.tabIndex = i === idx ? 0 : -1;
        panels[i].hidden = i !== idx;
      });
      panels[idx].focus();
    });
    tab.addEventListener('keydown', (e) => {
      let newIdx = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + tabs.length) % tabs.length;
      if (newIdx !== idx) {
        tabs[newIdx].focus();
      }
    });
  });
})();

//spinfoBlock6 tab切換
(function () {
  const tabs = document.querySelectorAll('.spinfoBlock6 .tab-btn');
  const panels = document.querySelectorAll('.spinfoBlock6 .tab-panel');
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
        t.tabIndex = i === idx ? 0 : -1;
        panels[i].hidden = i !== idx;
      });
      panels[idx].focus();
    });
    tab.addEventListener('keydown', (e) => {
      let newIdx = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + tabs.length) % tabs.length;
      if (newIdx !== idx) {
        tabs[newIdx].focus();
      }
    });
  });
})();

// 限縮依據關閉
document.querySelectorAll('.constriction-close').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var li = btn.closest('li');
    if (li) li.remove();
  });
});
//左欄收合
// 分類選單滑出功能
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.classification_menu_btn a');
  const leftBlock = document.querySelector('.classification_groupleft');
  let isOpen = false;

  if (menuBtn && leftBlock) {
    // 點擊選單按鈕切換顯示
    menuBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if (!isOpen) {
        leftBlock.classList.add('open');
        menuBtn.classList.add('open');
        isOpen = true;
      } else {
        leftBlock.classList.remove('open');
        menuBtn.classList.remove('open');
        isOpen = false;
      }
    });

    // ESC 鍵關閉選單
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        leftBlock.classList.remove('open');
        menuBtn.classList.remove('open');
        isOpen = false;
      }
    });
  }
});

//查詢結果分類收合
// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.collapsible-header .collapse-toggle').forEach(function (toggleBtn) {
//     var content = toggleBtn.closest('.collapsible-header').nextElementSibling;
//     toggleBtn.addEventListener('click', function () {
//       var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
//       toggleBtn.setAttribute('aria-expanded', !expanded);
//       if (content) {
//         content.classList.toggle('collapsed', expanded);
//       }
//     });
//   });
// });

//

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.collapsible-header .collapse-toggle').forEach(function (toggleBtn) {
    var content = toggleBtn.closest('.collapsible-header').nextElementSibling;
    toggleBtn.addEventListener('click', function () {
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
      if (content) {
        content.classList.toggle('collapsed', expanded);
      }
    });
  });

  // 顯示/收合更多條列
  document.querySelectorAll('.collapsible-content').forEach(function (contentBlock) {
    var ul = contentBlock.querySelector('ul');
    var items = ul ? ul.querySelectorAll('li') : [];
    var moreBox = contentBlock.querySelector('.more');
    var moreBtn = moreBox ? moreBox.querySelector('a') : null;
    var showCount = 5;

    function updateList(expanded) {
      items.forEach(function (li, idx) {
        li.style.display = expanded || idx < showCount ? '' : 'none';
      });
      if (moreBtn) {
        moreBtn.textContent = expanded ? '向上收合' : '顯示更多';
        moreBtn.setAttribute('aria-expanded', expanded);
      }
    }

    if (items.length > showCount && moreBtn) {
      updateList(false);
      moreBox.style.display = '';
      moreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var expanded = moreBtn.getAttribute('aria-expanded') === 'true';
        updateList(!expanded);
      });
    } else if (moreBox) {
      moreBox.style.display = 'none';
    }
  });
});

//文字收合
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.truncate-text').forEach(function (block) {
    var btn = block.querySelector('.show-more-btn');
    btn.addEventListener('click', function () {
      var expanded = block.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', expanded);
    });
  });
});

//timeline
// (function () {
//   const timeline = document.querySelector('.timeline-list');
//   const leftBtn = document.querySelector('.timeline-arrow-left');
//   const rightBtn = document.querySelector('.timeline-arrow-right');
//   const items = document.querySelectorAll('.timeline-item button');

//   leftBtn.addEventListener('click', () => {
//     timeline.scrollBy({ left: -120, behavior: 'smooth' });
//   });
//   rightBtn.addEventListener('click', () => {
//     timeline.scrollBy({ left: 120, behavior: 'smooth' });
//   });

//   items.forEach((btn) => {
//     btn.addEventListener('click', function () {
//       items.forEach((b) => {
//         b.setAttribute('aria-pressed', 'false');
//         b.parentElement.removeAttribute('aria-current');
//       });
//       this.setAttribute('aria-pressed', 'true');
//       this.parentElement.setAttribute('aria-current', 'true');
//       // 可在此觸發年份切換事件
//     });
//   });
// })();

(function () {
  const allTimelineLists = document.querySelectorAll('.timeline-list');

  allTimelineLists.forEach((timelineList) => {
    const leftBtn = timelineList.previousElementSibling;
    const rightBtn = timelineList.nextElementSibling;
    const items = timelineList.querySelectorAll('.timeline-item button');

    const isLeftBtnValid = leftBtn && leftBtn.classList.contains('timeline-arrow-left');
    const isRightBtnValid = rightBtn && rightBtn.classList.contains('timeline-arrow-right');

    if (isLeftBtnValid) {
      leftBtn.addEventListener('click', () => {
        timelineList.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }

    if (isRightBtnValid) {
      rightBtn.addEventListener('click', () => {
        timelineList.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }

    items.forEach((btn) => {
      btn.addEventListener('click', function () {
        items.forEach((b) => {
          b.setAttribute('aria-pressed', 'false');
          b.parentElement.removeAttribute('aria-current');
        });
        this.setAttribute('aria-pressed', 'true');
        this.parentElement.setAttribute('aria-current', 'true');
      });
    });
  });
})();

//收合
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.spinfoBlock3 .collapse-toggle');
  var content = document.getElementById('collapse-content');
  var arrow = btn.querySelector('.arrow');
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
    if (!expanded) {
      content.focus();
      arrow.style.transform = 'rotate(180deg)';
    } else {
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});
//收合2
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.spinfoBlock4 .collapse-toggle');
  var content = document.getElementById('collapse-content2');
  var arrow = btn.querySelector('.arrow');
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
    if (!expanded) {
      content.focus();
      arrow.style.transform = 'rotate(180deg)';
    } else {
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});

// spinfoBlock3 noticeTab
(function () {
  const tabs = document.querySelectorAll('.spinfoBlock3 .tab-btn');
  const panels = document.querySelectorAll('.spinfoBlock3 .tab-panel');
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
        t.tabIndex = i === idx ? 0 : -1;
        panels[i].hidden = i !== idx;
      });
      panels[idx].focus();
    });
    tab.addEventListener('keydown', (e) => {
      let newIdx = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + tabs.length) % tabs.length;
      if (newIdx !== idx) {
        tabs[newIdx].focus();
      }
    });
  });
})();

// spinfoBlock4 noticeTab
(function () {
  const tabs = document.querySelectorAll('.spinfoBlock4 .tab-btn');
  const panels = document.querySelectorAll('.spinfoBlock4 .tab-panel');
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
        t.tabIndex = i === idx ? 0 : -1;
        panels[i].hidden = i !== idx;
      });
      panels[idx].focus();
    });
    tab.addEventListener('keydown', (e) => {
      let newIdx = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + tabs.length) % tabs.length;
      if (newIdx !== idx) {
        tabs[newIdx].focus();
      }
    });
  });
})();
