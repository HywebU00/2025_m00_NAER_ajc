// -----------------------------------------------------------------------
// -----  nojs 先移除  ----------------------------------------------------
// -----------------------------------------------------------------------

const windowWidthSmall = 768;
const _webHtml = document.documentElement;
_webHtml.classList.remove('no-js');

// -----------------------------------------------------------------------
// -----  共用效果  -------------------------------------------------------
// -----------------------------------------------------------------------

function jsSlideUp(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 400;
  element.style.display = display;

  if (display !== 'none') {
    let totalHeight = element.offsetHeight;
    element.style.overflow = 'hidden';

    element.style.height = `${totalHeight}px`;
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `0px`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideUp(a);
// })

function jsSlideDown(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;
  element.style.display = display;
  if (display === 'none') {
    element.style.display = 'block';
    element.style.overflow = 'hidden';
    let totalHeight = element.offsetHeight;
    element.style.height = '0px';
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `${totalHeight}px`;
    }, 10);
    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideDown(a);
// })

function jsSlideToggle(element, time = 200) {
  let ele = window.getComputedStyle(element);

  let display = ele.display;
  let speed = time;
  element.style.display = display;
  if (display === 'none') {
    element.style.display = 'block';
    let totalHeight = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = '0px';
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `${totalHeight}px`;
    }, 10);
    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  } else {
    let totalHeight2 = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = `${totalHeight2}px`;
    element.style.transitionProperty = 'height';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.height = `0px`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideToggle(a);
// })

function jsSlideToggleWidth(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;
  element.style.display = display;
  if (display === 'none') {
    element.style.display = 'block';
    let totalWidth = element.offsetWidth;
    element.style.overflow = 'hidden';
    element.style.width = '0px';
    element.style.transitionProperty = 'width';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.width = `${totalWidth}px`;
    }, 10);
    setTimeout(() => {
      element.style.removeProperty('width');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  } else {
    let totalWidth2 = element.offsetWidth;
    element.style.overflow = 'hidden';
    element.style.width = `${totalWidth2}px`;
    element.style.transitionProperty = 'width';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.width = `0px`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('width');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsSlideToggleWidth(a);
// })

function jsFadeIn(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;

  if (display === 'none') {
    display = 'block';
    let opacity = 0;
    element.style.display = display;
    element.style.opacity = 0;

    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `1`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'block';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsFadeIn(a);
// })

function jsFadeOut(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;

  if (display !== 'none') {
    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `0`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsFadeOut(a);
// })

function jsFadeToggle(element, time) {
  let ele = window.getComputedStyle(element);
  let display = ele.display;
  let speed = time || 200;

  if (display === 'none') {
    display = 'block';
    let opacity = 0;
    element.style.display = display;
    element.style.opacity = 0;

    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `1`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'block';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  } else {
    element.style.transitionProperty = 'opacity';
    element.style.transitionDuration = `${speed}ms`;
    setTimeout(() => {
      element.style.opacity = `0`;
    }, 10);
    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('opacity');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, speed);
  }
}
// 使用方式
// let target = document.querySelector('.target');
// let a = document.querySelector('.a');
// target.addEventListener('click',(e)=>{
//   jsFadeToggle(a);
// })

function toggleSlider(elem, con) {
  const targetSelect = document.querySelectorAll(elem);
  targetSelect.forEach((item) => {
    let id = `ts_${randomLetter(3)}${randomFloor(0, 999)}`;

    item.setAttribute('aria-expanded', 'false');
    item.setAttribute('aria-haspopup', 'true');
    item.setAttribute('aria-controls', `${id}_con`);
    item.setAttribute('id', id);
    let targetSelectCon = item.parentNode.querySelector(con);
    targetSelectCon.setAttribute('id', `${id}_con`);
    targetSelectCon.setAttribute('aria-labelledby', id);
    // targetSelectCon.setAttribute('aria-hidden', 'true');
    if (item) {
      item.addEventListener('click', (e) => {
        let expanded = item.getAttribute('aria-expanded');
        item.classList.toggle('active');
        expanded === 'true' ? item.setAttribute('aria-expanded', 'false') : item.setAttribute('aria-expanded', 'true');
        jsSlideToggle(targetSelectCon);
        // expanded === 'true' ? targetSelectCon.setAttribute('aria-hidden', 'true') : targetSelectCon.removeAttribute('aria-hidden');
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    targetSelect.forEach((item, i) => {
      const targetCon = item.parentNode.querySelector(con);
      let allTarget = targetCon.querySelectorAll('a, button, input, textarea, select');
      if (item.getAttribute('aria-expanded') === 'true') {
        if (e.code === 'Tab' && e.shiftKey && e.target === item) {
          e.preventDefault();
          allTarget[allTarget.length - 1].focus();
        } else if (e.code === 'Tab' && !e.shiftKey && e.target === allTarget[allTarget.length - 1]) {
          e.preventDefault();
          item.focus();
        }
        //Escape
        else if (e.code === 'Escape') {
          item.setAttribute('aria-expanded', 'false');
          // targetCon.setAttribute('aria-hidden', 'true');
          jsSlideUp(targetCon);
          item.focus();
        }
      }
    });
  });

  // clickOtherPlace;
  window.addEventListener('click', (e) => {
    targetSelect.forEach((item) => {
      if (item.getAttribute('aria-expanded') === 'true') {
        const targetSelectCon = item.parentNode.querySelector(con);
        if (e.target !== item) {
          item.setAttribute('aria-expanded', 'false');
          // targetCon.setAttribute('aria-hidden', 'true');
          jsSlideUp(targetSelectCon);
        }
      }
    });
  });

  window.addEventListener('resize', (e) => {
    targetSelect.forEach((item, i) => {
      const targetCon = item.parentNode.querySelector(con);
      item.setAttribute('aria-expanded', 'false');
      // targetCon.setAttribute('aria-hidden', 'true');
      jsSlideUp(targetCon);
    });
  });
}
// 使用方式
// toggleSlider('.target','.con');

function jsParents(element, elementCheck) {
  //大小寫轉換
  const elementParentsCheck = elementCheck?.toLowerCase() || null;

  const matched = [];
  const elementArr = typeof element === 'string' ? document.querySelectorAll(element) : element;
  //
  const getParents = (item) => {
    while (item.parentNode !== document.documentElement) {
      matched.push(item.parentNode);
      item = item.parentNode;
    }
  };
  elementArr.length > 0 ? elementArr.forEach((s) => getParents(s)) : getParents(element);
  //
  const check = matched.filter((parent) => {
    let sortCheck = null;

    if (elementCheck === undefined) return true;
    const letter = elementCheck.slice(1);
    switch (elementCheck[0]) {
      case '#':
        return parent.id === letter;
      case '.':
        return parent.classList.contains(letter);
      default:
        return parent.localName === elementParentsCheck || sortCheck || elementParentsCheck === null ? parent : null;
    }
  });
  return check.filter((element, index) => check.indexOf(element) === index).reverse();
}
// 使用方式
// 第一個參數可使用'.target','#target',變數，第二個參數可使用'ul','.out','#out'
// let target = document.querySelector('.target');
// jsParents(target) 變數方式
// jsParents('.target/#target'); 抓取'.target/#target'所有父層
// jsParents('.target/#target','ul'); 抓取'.target/#target'所有tag為ul的父層
// jsParents('.target/#target','.out'); 抓取'.target/#target'所有class為out的父層
// jsParents('.target/#target','#out'); 抓取'.target/#target'所有id為out的父層
// 操作父層
// jsParents('.target/#target').forEach((i) => {});

function jsChildren(element, elementCheck) {
  const elementArr = typeof element === 'string' ? document.querySelectorAll(element) : element;

  const getChildren = (item) => {
    return [...item.childNodes].filter((child) => {
      if (child.nodeName === '#text') return;
      if (elementCheck === undefined) return true;
      const letter = elementCheck.slice(1);
      switch (elementCheck[0]) {
        case '#':
          return child.id === letter;
        case '.':
          return child.classList.contains(letter);
        default:
          return child.localName === elementCheck;
      }
    });
  };
  return (elementArr.length > 0 ? [...elementArr]?.map((i) => getChildren(i)) : getChildren(element)).flat();
}

// 使用方式
// 第一個參數可使用'.target','#target',變數，第二個參數可使用'ul','.out','#out'
// let target = document.querySelector('.target');
// jsChildren(target) 變數方式
// jsChildren('.target/#target'); 抓取target所有子層
// jsChildren('.target/#target','ul'); 抓取target下一層所有tag為ul的子層
// jsChildren('.target/#target','.out'); 抓取target下一層所有class為out的子層
// jsChildren('.target/#target','#out'); 抓取target下一層所有id為out的子層
// 操作子層
// jsChildren('.target/#target').forEach((i) => {});

// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 亂數英文字
function randomLetter(max, letter = 'abcdefghijklmnopqrstuvwxyz') {
  let text = '';
  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}

// 改變標籤
function changeTag(oldTag, newTag) {
  const newTagElem = document.createElement(newTag);
  // 複製所有屬性和內容
  newTagElem.innerHTML = oldTag.innerHTML;
  Array.from(oldTag.attributes).forEach((attr) => {
    newTagElem.setAttribute(attr.name, attr.value);
  });

  // 替換舊標籤
  oldTag.parentNode.replaceChild(newTagElem, oldTag);
}

// -----------------------------------------------------------------------
// ----- 手機桌機版本切換及手機版menu設定 -------------------------------------
// -----------------------------------------------------------------------

function mainMenuSetup() {
  // menu初始化 新增側欄選單
  const body = document.querySelector('body');
  const sidebar = document.createElement('nav');
  sidebar.className = 'mobileSidebar';
  sidebar.setAttribute('id', 'mobileArea');
  // sidebar.setAttribute('aria-hidden', 'true');
  sidebar.style = 'opacity:0;';

  //創建黑色遮罩

  body.insertAdjacentHTML('beforeend', '<div class="menuOverlay"></div>');
  sidebar.insertAdjacentHTML('afterbegin', '<div class="menuContent"><button type="button" class="sidebarClose">關閉</button></div>');

  const menuOverlay = document.querySelector('.menuOverlay');
  const mainMenu = document.querySelector('.mainMenu');
  const megaMenu = document.querySelector('.megaMenu');

  const hasChildUl = mainMenu.querySelectorAll('li ul');
  hasChildUl.forEach((i) => {
    i.parentNode.classList.add('hasChild');

    // 無障礙設定
    const id = `menu_${randomLetter(3)}${randomFloor(0, 999)}`;
    const childA = i.parentNode.querySelector('a');
    childA.setAttribute('aria-haspopup', 'true');
    childA.setAttribute('aria-expanded', 'false');
    childA.setAttribute('id', `${id}`);
    childA.setAttribute('aria-controls', `${id}_ul`);
    childA.getAttribute('href') === '#' ? childA.setAttribute('role', 'button') : null;

    i.setAttribute('id', `${id}_ul`);
    i.setAttribute('aria-labelledby', `${id}`);
    // i.setAttribute('aria-hidden', 'true');
  });

  // menu初始化 新增側欄選單按鈕
  const sidebarCtrlBtn = document.querySelector('.sidebarCtrlBtn');
  sidebarCtrlBtn.setAttribute('aria-controls', 'mobileArea');
  sidebarCtrlBtn.setAttribute('aria-haspopup', 'true');

  sidebarCtrlBtn.insertAdjacentElement('afterend', sidebar);

  // menu初始化 側欄選單按close按鈕設定
  const sidebarClose = document.querySelector('.sidebarClose');
  sidebarClose.setAttribute('aria-controls', 'mobileArea');
  sidebarClose.setAttribute('aria-expanded', 'false');

  // menu初始化 複製手機版側欄選單
  const cloneMenu = mainMenu.cloneNode(true);
  cloneMenu.classList.add('sideMainMenu');
  cloneMenu.classList.remove('mainMenu', 'megaMenu', 'menu');
  sidebarClose.insertAdjacentElement('beforebegin', cloneMenu);

  // 轉換標籤
  changeTag(cloneMenu, 'div');

  if (megaMenu !== null) {
    const megaMenuChild = megaMenu.querySelectorAll(' ul ul .hasChild > a');

    megaMenuChild.forEach((i) => {
      i.removeAttribute('aria-haspopup');
    });
  }

  // ----- 複製手機版nav選單 -------------------------------------------------
  //複製navigation
  const nav = document.querySelector('.navigation');
  if (nav) {
    const cloneNav = nav.cloneNode(true);
    cloneNav.querySelector('.webSearchBtn')?.remove();
    sidebarClose.insertAdjacentElement('beforebegin', cloneNav);

    // 移除手機版字體大小按鈕
    const sideFontSize = document.querySelector('#mobileArea .fontSize');
    if (sideFontSize) {
      sideFontSize.remove();
      document.documentElement.classList.remove('smallSize', 'largeSize');
      body.classList.remove('smallSize', 'largeSize');
      body.classList.add('mediumSize');
    }

    // 轉換標籤
    changeTag(cloneNav, 'div');
  }

  ////////////////////////////////////////////////////////////////////////////////
  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    jsFadeOut(menuOverlay);
    hideSidebar();
  });
  window.addEventListener('load', () => {
    windowWidth = window.innerWidth;
  });

  const mobileAreaAllTarget = mobileArea.querySelectorAll('a, button, input, select, textarea');
  const hasChild = document.querySelectorAll('.mainMenu .hasChild');
  const handleMouseenter = (e) => {
    e.target.classList.add('active');
    const childA = e.target.querySelector('a');
    const childUl = e.target.querySelector('ul');
    childA.setAttribute('aria-expanded', 'true');
    // childUl.removeAttribute('aria-hidden');

    const nextUl = e.target.querySelectorAll('ul');
    const hasChildLi = jsParents(nextUl[nextUl.length - 1], 'li');
    const checkUlWidth = hasChildLi[0].offsetWidth * hasChildLi.length - 1 || 0;

    const objectRect = hasChildLi[0].getBoundingClientRect();

    if (windowWidth < objectRect.left + checkUlWidth) {
      hasChildLi[0].classList.add('leftSlider');
    } else {
      hasChildLi[0].classList.remove('leftSlider');
    }
  };

  const handleMouseleave = (e) => {
    const childLi = e.target.querySelectorAll('li');
    const childA = e.target.querySelectorAll('a');
    const childUl = e.target.querySelectorAll('ul');
    childA.forEach((i) => i.setAttribute('aria-expanded', 'false'));

    e.target.classList.remove('active');
    childLi.forEach((i) => i.classList.remove('active'));
    countOneForDown = false;
    leftHeight = 0;
  };

  let lastATarget = [];
  hasChild.forEach((item) => {
    item.addEventListener('mouseenter', handleMouseenter);
    item.addEventListener('mouseleave', handleMouseleave);

    // 找出每項最後一個a
    lastATarget.push(item.querySelectorAll('a')[item.querySelectorAll('a').length - 1]);
  });

  // 每項最後一個a不focus時關閉
  lastATarget.forEach((i) => {
    i.addEventListener('focusout', () => {
      jsParents(i, '.hasChild')[jsParents(i, '.hasChild').length - 1].classList.remove('active');
    });
  });

  // child keyup時
  const childControl = mainMenu.querySelectorAll('li.hasChild > a');

  childControl.forEach((i) => {
    i.addEventListener('keyup', (e) => {
      i.parentNode.classList.add('active');
      const childUl = i.parentNode.querySelector('ul');
      i.setAttribute('aria-expanded', 'true');
      // childUl.removeAttribute('aria-hidden');

      const nextUl = i.parentNode.querySelectorAll('ul');
      const hasChildLi = jsParents(nextUl[nextUl.length - 1], 'li');
      const checkUlWidth = hasChildLi[0].offsetWidth * hasChildLi.length - 1 || 0;
      const objectRect = hasChildLi[0].getBoundingClientRect();

      if (windowWidth < objectRect.left + checkUlWidth) {
        hasChildLi[0].classList.add('leftSlider');
      } else {
        hasChildLi[0].classList.remove('leftSlider');
      }
    });
  });

  const asideMenu = document.querySelector('.sideMainMenu');
  const asideMenuLi = asideMenu.querySelectorAll('li');
  const asideMenuLiHasChild = asideMenu.querySelectorAll('li.hasChild > a');
  const webSearch = document.querySelector('.wrapper .webSearch');

  asideMenuLiHasChild.forEach((i) => {
    i.addEventListener('click', (e) => {
      i.parentNode.classList.contains('hasChild') ? e.preventDefault() : null;
      e.preventDefault();
      toggleAccordion(i, 'ul');
    });
  });

  // 點擊選單按鈕 執行 展開側邊選單函式
  window.addEventListener('click', (e) => {
    if (e.target !== sidebarCtrlBtn) return;
    e.preventDefault();
    showSidebar();
    jsSlideUp(webSearch);
  });

  function showSidebar() {
    sidebar.style.opacity = '1';
    sidebar.style.display = 'block';
    menuOverlay ? (menuOverlay.style.zIndex = '99') : null;
    sidebarCtrlBtn.setAttribute('aria-expanded', 'true');

    setTimeout(() => {
      mobileAreaAllTarget[0].focus();
      sidebar.style.transform = `translateX(0px)`;
      mobileArea.classList.add('open');
      // mobileArea.removeAttribute('aria-hidden');
      sidebarClose.setAttribute('aria-expanded', 'true');
      sidebarClose.focus();
    }, 0);

    body.classList.add('noscroll');
    jsFadeIn(menuOverlay);
  }

  sidebarClose.addEventListener('click', (e) => {
    hideSidebar();
  });

  // 隱藏側邊選單函式
  function hideSidebar() {
    jsFadeOut(menuOverlay);
    sidebar.style.transform = `translateX(-100%)`;
    sidebarCtrlBtn.setAttribute('aria-expanded', 'false');

    setTimeout(() => {
      sidebar.removeAttribute('style');
      mobileArea.classList.remove('open');
      // mobileArea.setAttribute('aria-hidden', 'true');
      sidebarClose.setAttribute('aria-expanded', 'false');
    }, 300);

    body.classList.remove('noscroll');
    jsFadeOut(menuOverlay);
    asideMenuLi.forEach((i) => i.classList.remove('active'));
    sidebarCtrlBtn.focus();
  }

  function toggleAccordion(item, con) {
    let content = item.parentElement.querySelector(con);
    jsSlideToggle(content);
    setTimeout(() => {
      if (window.getComputedStyle(content).display === 'none') {
        item.setAttribute('aria-expanded', 'false');
        // content.setAttribute('aria-hidden', 'true');
      } else {
        item.setAttribute('aria-expanded', 'true');
        // content.removeAttribute('aria-hidden');
      }
    }, 300);

    const siblings = Array.prototype.filter.call(item.parentElement.parentElement.children, (child) => {
      return child !== item.parentElement;
    });

    siblings.forEach((v) => {
      if (v.querySelector(con)) {
        let target = v.querySelector(con);
        jsSlideUp(target);
        v.querySelector('a').setAttribute('aria-expanded', 'false');
      }
    });
  }

  function isObjectFullyVisible(object) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let objectRect = object?.getBoundingClientRect();
    let objectLeft = objectRect?.left;
    let objectRight = objectRect?.right;
    let objectTop = objectRect?.top;
    let objectBottom = objectRect?.bottom;
    let isFullyVisible = objectLeft >= 0 && objectRight <= windowWidth && objectTop >= 0 && objectBottom <= windowHeight;
    return isFullyVisible;
  }
  function isObjectVisibleT(object) {
    let objectRect = object?.getBoundingClientRect();
    let objectBottom = objectRect?.bottom;
    let isFullyVisible = objectBottom >= 0;
    return isFullyVisible;
  }
  function isObjectVisibleB(object) {
    let windowHeight = window.innerHeight;
    let objectRect = object?.getBoundingClientRect();
    let objectTop = objectRect?.top;
    let isFullyVisible = objectTop <= windowHeight;
    return isFullyVisible;
  }

  menuOverlay?.addEventListener('click', (e) => {
    hideSidebar();
  });

  const mobileLang = mobileArea.querySelector('.language button');
  if (mobileLang !== null) {
    toggleSlider('.mobileSidebar .language button', '.mobileSidebar .language ul'); //語系
  }

  window.addEventListener('keydown', (e) => {
    //手機版選單鍵盤遊走
    const display = window.getComputedStyle(sidebar).display;
    if (e.code === 'Tab' && !e.shiftKey && e.target === sidebarClose) {
      e.preventDefault();
      mobileAreaAllTarget[0].focus();
    } else if (e.code === 'Tab' && e.shiftKey && e.target === mobileAreaAllTarget[0]) {
      e.preventDefault();
      sidebarClose.focus();
    } else if (e.code === 'Escape' && display === 'block') {
      hideSidebar();
    }
  });
}
mainMenuSetup();

// -----------------------------------------------------------------------
// ----- webSearch設定 ------------------------------------------------
// -----------------------------------------------------------------------

function webSearch() {
  const webSearch = document.querySelector('.wrapper .webSearch');
  const webSearchBtn = document.querySelector('.wrapper .webSearchBtn');
  const webSearchAllTarget = webSearch.querySelectorAll('a, button, input, select, textarea');
  const webSearchB = document.querySelector('.webSearch.typeB');
  const id = `ws_${randomLetter(3)}${randomFloor(0, 999)}`;

  const mobileSearchBtn = document.querySelector('.mobileSearchBtn');

  let checkDisplay = window.getComputedStyle(webSearch).display;

  //mobile按鈕無障礙
  mobileSearchBtn.setAttribute('aria-expanded', 'false');
  mobileSearchBtn.setAttribute('id', `${id}_m`);
  mobileSearchBtn.setAttribute('aria-controls', `${id}_con`);
  mobileSearchBtn.setAttribute('aria-haspopup', 'true');

  webSearch.setAttribute('id', `${id}_con`);
  webSearch.setAttribute('aria-labelledby', `${id}_m ${id}`);
  // webSearch.removeAttribute('aria-hidden');

  //typeB按鈕無障礙
  if (webSearchB !== null) {
    webSearchBtn.setAttribute('id', `${id}`);
    webSearchBtn.setAttribute('aria-expanded', 'false');
    webSearchBtn.setAttribute('aria-controls', `${id}_con`);
    webSearchBtn.setAttribute('aria-haspopup', 'true');
    webSearchBtn.addEventListener('click', (e) => toggleContent(webSearchBtn));
    // webSearch.setAttribute('aria-hidden', 'true');
  }
  mobileSearchBtn.addEventListener('click', (e) => toggleContent(mobileSearchBtn));

  function toggleContent(elem) {
    if (elem.getAttribute('aria-expanded') === 'true') {
      elem.setAttribute('aria-expanded', 'false');
      // webSearch.setAttribute('aria-hidden', 'true');
      jsSlideUp(webSearch);
      elem.focus();
    } else {
      elem.setAttribute('aria-expanded', 'true');
      // webSearch.removeAttribute('aria-hidden');
      jsSlideDown(webSearch);
      webSearchAllTarget[0].focus();
    }
  }

  window.addEventListener('keydown', (e) => {
    const windowWidth = window.outerWidth;
    const targetIsSearchBtn = e.target === webSearchBtn || e.target === mobileSearchBtn;
    const searchBtn = windowWidth >= windowWidthSmall ? webSearchBtn : mobileSearchBtn;
    const checkExpanded = e.target.getAttribute('aria-expanded');
    const lastTarget = webSearchAllTarget[webSearchAllTarget.length - 1];

    if (e.code === 'Tab') {
      if (e.target === lastTarget && !e.shiftKey && searchBtn) {
        e.preventDefault();
        searchBtn.focus();
      } else if (targetIsSearchBtn && checkExpanded === 'true') {
        e.preventDefault();
        if (!e.shiftKey) {
          webSearchAllTarget[0].focus();
          return;
        }
        lastTarget.focus();
      }
    }

    // 無障礙使用
    else if (e.altKey && e.code === 'KeyS') {
      toggleContent(searchBtn);
      if (searchBtn?.getAttribute('aria-expanded') === 'true') {
        setTimeout(() => (webSearchAllTarget[0].value = ''));
        webSearchAllTarget[0].focus();
      }

      // if (windowWidth >= windowWidthSmall && webSearchB) {
      //   toggleContent(webSearchBtn);
      //   if (webSearchBtn.getAttribute('aria-expanded') === 'true') {
      //     webSearchAllTarget[0].focus();
      //   }
      // } else if (windowWidth < windowWidthSmall) {
      //   toggleContent(mobileSearchBtn);
      //   if (mobileSearchBtn.getAttribute('aria-expanded') === 'true') {
      //     webSearchAllTarget[0].focus();
      //   }
      // }
    }
    //Escape
    else if (e.code === 'Escape') {
      if (checkDisplay !== 'none') return;
      if (windowWidth >= windowWidthSmall) {
        webSearchBtn?.getAttribute('aria-expanded') === 'true' ? webSearchBtn.focus() : null;
      } else {
        mobileSearchBtn?.getAttribute('aria-expanded') === 'true' ? mobileSearchBtn.focus() : null;
      }

      mobileSearchBtn?.setAttribute('aria-expanded', 'false');
      webSearchBtn?.setAttribute('aria-expanded', 'false');
      jsSlideUp(webSearch);
      // webSearch.setAttribute('aria-hidden', 'true');
    }
  });

  window.addEventListener('resize', () => {
    checkDisplay = window.getComputedStyle(webSearch).display;
    if (window.innerWidth < windowWidthSmall) {
      webSearchBtn?.setAttribute('aria-expanded', 'false');
      mobileSearchBtn?.setAttribute('aria-expanded', 'false');
      // webSearch.setAttribute('aria-hidden', 'true');
      jsSlideUp(webSearch);
    } else {
      // webSearch.removeAttribute('aria-hidden');
      webSearch.removeAttribute('style');
    }
  });
}

// -----------------------------------------------------------------------
// -----  menu 訊息區塊 sticky  -------------------------------------------
// -----------------------------------------------------------------------

function navSticky() {
  const mainMenu = document.querySelector('.mainMenu');
  const main = document.querySelector('.main');
  let windowWidth = window.outerWidth;
  let menuHeight = Math.floor(mainMenu.offsetHeight);
  let mainMenuTop = Math.floor(mainMenu.getBoundingClientRect().top + window.scrollY);
  let offsetTop = Math.floor(mainMenuTop);

  // 取menu高度
  jsScroll(mainMenuTop);
  jsResize(mainMenuTop);
  reload(mainMenuTop);

  // menu 的 sticky函式
  function sticky(mainMenuTop) {
    offsetTop = Math.floor(mainMenuTop);
    // 如果 offsetTop 不等於 null 則運行下方函式
    if (offsetTop) {
      if (windowWidth >= windowWidthSmall && window.scrollY > offsetTop) {
        mainMenu.classList.add('sticky');
        main.style = `padding-top: ${menuHeight}px`;
      } else {
        mainMenu.classList.remove('sticky');
        main.removeAttribute('style');
      }
    }
  }

  // 當 scroll 觸發
  function jsScroll(mainMenuTop) {
    // scroll 時執行 menu_stickyNavbar 並請傳入 menu 距離上方的高度的參數
    window.addEventListener('scroll', (e) => {
      sticky(mainMenuTop);
    });
  }

  // 當 resize 觸發 判斷 menu的種類
  function jsResize(mainMenuTop) {
    // 如果 有 menu 的話 執行固定 menu_stickyNavbar
    window.addEventListener('resize', (e) => {
      // 算出 menu 距離上方的高度
      offsetTop = Math.floor(mainMenuTop);
      setTimeout(() => {
        main.removeAttribute('style');
        sticky(offsetTop);
      }, 50);
    });
  }

  function reload(mainMenuTop) {
    offsetTop = Math.floor(mainMenuTop);
    window.onload = sticky(offsetTop);
  }
}
// navSticky();

// -----------------------------------------------------------------------
// -----  notice訊息區塊   -------------------------------------------------
// -----------------------------------------------------------------------

document.querySelectorAll('[class^="formNotice"] .close')?.forEach((i) => {
  i.addEventListener('click', (e) => {
    i.parentNode.style.display = 'none';
    e.preventDefault();
  });
});

// -----------------------------------------------------------------------
// -----  fatFooter   ----------------------------------------------------
// -----------------------------------------------------------------------

function fatFooter(openCheck = true) {
  const el = document.querySelector('.btnFatFooter') || null; // --- 控制的對象

  if (el === null) return;
  const checkHidden = el.getAttribute('aria-expanded') === 'true';
  function fatFooterInit() {
    // --- 抓取UI高度 css樣式修改樣式重新抓取高度
    const _navUl = el.parentNode.querySelectorAll('nav ul li ul');
    let idArray = [];
    _navUl.forEach((item, i) => {
      idArray.push(`fatFooter${i}`);
      item.setAttribute('id', `fatFooter${i}`);
      // item.setAttribute('aria-hidden', !checkHidden);
    });

    el.setAttribute('aria-controls', idArray.join(' '));

    setTimeout(() => {
      _navUl.forEach((item, i) => {
        item.setAttribute('style', '');
        let _itemHeight = item.offsetHeight;
        item.dataset.itemHeight = _itemHeight;
        if (Number(_itemHeight) !== 0 && openCheck) {
          item.style.height = `${Number(item.dataset.itemHeight)}px`;
        } else {
          item.style.height = '0px';
          // el.innerHTML = '收合';
          el.setAttribute('aria-expanded', 'true');
          el.classList.add('close');
        }
      });
    }, 20);
  }

  function toggleFatFooter() {
    const _navUl = el.parentNode.querySelectorAll('nav ul li ul');
    _navUl.forEach((i) => {
      if (i.offsetHeight !== 0) {
        el.setAttribute('aria-expanded', 'false');
        // i.setAttribute('aria-hidden', !checkHidden);
        i.style.height = '0px';
        // el.innerHTML = '展開';
      } else {
        el.setAttribute('aria-expanded', 'true');
        // i.setAttribute('aria-hidden', !checkHidden);
        i.style.height = `${i.dataset.itemHeight}px`;
        // el.innerHTML = '收合';
      }
    });
    el.classList.toggle('close');
  }

  fatFooterInit();
  // --- 點擊時
  el.addEventListener('click', toggleFatFooter);

  window.addEventListener('resize', () => {
    fatFooterInit();
  });
}
// fatFooter();

// -----------------------------------------------------------------------
// -----  多組Tab   ------------------------------------------------------
// -----------------------------------------------------------------------

function tabFunction(obj) {
  const { target, autoClose = true, openContent = false, modeSwitch = false, windowWidth = windowWidthSmall, openIndex = 0, openSwitch = true } = obj;
  const tabSet = target === undefined ? document.querySelector(obj) : document.querySelector(target);

  if (tabSet === null) return;
  const tabItem = tabSet.querySelector('.tabItems');
  const tabBtns = tabSet.querySelectorAll('.tabItems .tabBtn');
  const tabContentGroup = tabSet.querySelector('.tabContentGroup');
  const tabContent = tabSet.querySelectorAll('.tabContent');
  const tabContentIn = tabSet.querySelectorAll('.tabContent .tabContentIn');

  //初始設定
  function tabInit(targetIndex) {
    tabItem.setAttribute('role', 'tablist');

    tabBtns.forEach((tab, i) => {
      const id = `tab_${randomLetter(3)}${randomFloor(0, 999)}`;
      const controls = `${id}_con`;

      tab.setAttribute('role', 'tab');
      tab.setAttribute('id', id);
      tab.setAttribute('aria-controls', controls);
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('aria-expanded', 'false');
      tab.setAttribute('tabindex', '-1');
      setAttribute(tabContent[i], 'tabpanel', controls, id);

      //模式切換-新增按鈕
      if (modeSwitch) {
        const mobileTabBtn = createMobileTabBtn(id, controls, tab.textContent);
        tabContent[i].insertAdjacentElement('afterbegin', mobileTabBtn);
      }
    });

    checkTarget(targetIndex);
    tabSet.dataset.nowIndex = targetIndex;
  }

  // 創建移動版選項按鈕
  function createMobileTabBtn(id, controls, textContent) {
    const mobileTabBtn = document.createElement('button');
    mobileTabBtn.classList.add('mobileTabBtn');
    mobileTabBtn.setAttribute('id', id);
    mobileTabBtn.setAttribute('aria-controls', controls);
    mobileTabBtn.setAttribute('type', 'button');
    mobileTabBtn.setAttribute('aria-expanded', 'false');
    mobileTabBtn.insertAdjacentHTML('afterbegin', textContent);
    return mobileTabBtn;
  }

  //執行
  tabInit(openIndex);

  //切換動作
  function checkTarget(targetIndex) {
    tabSet.dataset.nowIndex = targetIndex;

    //點選的按鈕增加active
    tabBtns[targetIndex].classList.add('active');
    tabBtns[targetIndex].setAttribute('aria-selected', 'true');
    tabBtns[targetIndex].setAttribute('aria-expanded', 'true');
    tabBtns[targetIndex].setAttribute('tabindex', '0');

    //移除其他按鈕的active
    const siblingsBtn = [...tabBtns].filter((value) => value !== tabBtns[targetIndex]);
    siblingsBtn.forEach((value) => {
      value.classList.remove('active');
      value.setAttribute('aria-selected', 'false');
      value.setAttribute('aria-expanded', 'false');
      value.setAttribute('tabindex', '-1');
    });

    //內容增加active
    tabContent[targetIndex].classList.remove('hidden');
    // tabContent[targetIndex].removeAttribute('aria-hidden');

    //移除其他內容的active
    const siblingsPanel = [...tabContent].filter((value) => value !== tabContent[targetIndex]);
    siblingsPanel.forEach((value) => {
      value.classList.add('hidden');
      // value.setAttribute('aria-hidden', 'true');
    });
  }

  // 是否可開合/切換
  if (openSwitch) {
    //tab動作
    tabSet.addEventListener('click', (e) => {
      if (!e.target.classList.contains('tabBtn')) return;
      let index = [...tabBtns].indexOf(e.target) % tabBtns.length;
      checkTarget(index);
    });

    tabSet.addEventListener('keydown', (e) => {
      if (!e.target.classList.contains('tabBtn')) return;
      let index;
      //左右操作tab
      if (e.code === 'ArrowRight') {
        index = ([...tabBtns].indexOf(e.target) + 1) % tabBtns.length;
        tabBtns[index].focus();
        checkTarget(index);
      } else if (e.code === 'ArrowLeft') {
        index = ([...tabBtns].indexOf(e.target) - 1 + tabBtns.length) % tabBtns.length;
        tabBtns[index].focus();
        checkTarget(index);
      }
    });

    //模式切換-手風琴動作
    if (modeSwitch) {
      const mobileTabBtn = tabSet.querySelectorAll('.mobileTabBtn');

      tabSet.addEventListener('click', (e) => {
        if (!e.target.classList.contains('mobileTabBtn')) return;
        let index = [...mobileTabBtn].indexOf(e.target) % mobileTabBtn.length;
        mobileTabFn(mobileTabBtn[index], index, mobileTabBtn);
      });
    }
  }

  function mobileTabFn(btn, i, mobileTabBtn) {
    jsSlideToggle(tabContentIn[i]);
    tabSet.dataset.nowIndex = i;
    let check = btn.getAttribute('aria-expanded') === 'true' ? false : true;
    btn.setAttribute('aria-expanded', check);
    // tabContentIn[i].setAttribute('aria-hidden', !check);
    btn.classList.toggle('active');

    if (!autoClose) return;
    const siblingsMobileTabBtn = [...mobileTabBtn].filter((value) => value !== mobileTabBtn[i]);
    siblingsMobileTabBtn.forEach((value) => {
      value.classList.remove('active');
      value.setAttribute('aria-expanded', 'false');
    });
    const siblingsPanel = [...tabContentIn].filter((value) => value !== tabContentIn[i]);
    siblingsPanel.forEach((value) => {
      jsSlideUp(value);
      // value.setAttribute('aria-hidden', 'true');
    });
  }

  function removeAttribute(item) {
    // item.removeAttribute('aria-hidden');
    item.removeAttribute('role');
    item.removeAttribute('aria-labelledby');
    item.removeAttribute('id');
  }
  function setAttribute(item, role, id, labelledby) {
    // item.removeAttribute('aria-hidden');
    item.setAttribute('role', role);
    item.setAttribute('id', id);
    item.setAttribute('aria-labelledby', labelledby);
  }
  //模式切換-RWD
  function checkRWD() {
    const tabpanelBtn = tabSet.querySelectorAll('.tabContent .mobileTabBtn');
    const nowOpen = tabSet.dataset.nowIndex;

    // 電腦版
    tabBtns[nowOpen].classList.add('active');
    tabBtns[nowOpen].setAttribute('aria-selected', 'true');
    tabBtns[nowOpen].setAttribute('aria-expanded', 'true');
    tabBtns[nowOpen].setAttribute('tabindex', '0');
    const tabListSiblingsPanelBtn = [...tabBtns].filter((value) => value !== tabBtns[nowOpen]);
    tabListSiblingsPanelBtn.forEach((value) => {
      value.classList.remove('active');
      value.setAttribute('aria-expanded', 'false');
      value.setAttribute('aria-selected', 'false');
      value.setAttribute('tabindex', '-1');
    });

    // 手機版
    tabpanelBtn[nowOpen]?.classList.add('active');
    tabpanelBtn[nowOpen]?.setAttribute('aria-expanded', 'true');
    const tabSiblingsPanelBtn = [...tabpanelBtn].filter((value) => value !== tabpanelBtn[nowOpen]);
    tabSiblingsPanelBtn.forEach((value) => {
      value.classList.remove('active');
      value.setAttribute('aria-expanded', 'false');
    });

    if (window.innerWidth < windowWidth && modeSwitch) {
      //隱藏上方選單
      tabItem.classList.add('hidden');
      // tabItem.setAttribute('aria-hidden', 'true');

      tabBtns.forEach((tab, i) => {
        const id = tabpanelBtn[i].getAttribute('id');
        const controls = tabpanelBtn[i].getAttribute('aria-controls');

        //顯示所有tab內容標籤
        tabContent[i].classList.remove('hidden');
        //移除tab內容標籤
        removeAttribute(tabContent[i]);

        //顯示手風琴標籤按鈕
        tabpanelBtn[i].classList.remove('hidden');
        // tabpanelBtn[i].removeAttribute('aria-hidden');
        //新增手風琴內容標籤
        setAttribute(tabContentIn[i], 'region', controls, id);
        jsSlideDown(tabContentIn[i]);
      });

      if (openContent) {
        tabContentIn.forEach((value, i) => {
          value.style.display = 'block';
          // value.removeAttribute('aria-hidden');
          tabpanelBtn[i].classList.add('active');
        });
      } else {
        //隱藏其他手風琴內容
        const siblingsPanel = [...tabContentIn].filter((value) => value !== tabContentIn[nowOpen]);
        siblingsPanel.forEach((value) => {
          value.style.display = 'none';
          // value.setAttribute('aria-hidden', 'true');
        });
      }
      //展開目前手風琴內容
      tabpanelBtn[nowOpen].setAttribute('aria-expanded', 'true');
      tabpanelBtn[nowOpen].focus();
    } else if (window.innerWidth >= windowWidth && modeSwitch) {
      //增加上方選單
      tabItem.classList.remove('hidden');
      // tabItem.removeAttribute('aria-hidden');
      tabItem.setAttribute('role', 'tablist');

      tabBtns.forEach((tab, i) => {
        const id = tabpanelBtn[i].getAttribute('id');
        const controls = tabpanelBtn[i].getAttribute('aria-controls');

        //顯示所有Tab內容
        tabContentIn[i].classList.remove('hidden');
        //移除Tab內容標籤
        removeAttribute(tabContentIn[i]);
        tabContentIn[i].removeAttribute('style');

        //隱藏Tab標籤按鈕
        tabpanelBtn[i].classList.add('hidden');
        // tabpanelBtn[i].setAttribute('aria-hidden', 'true');
        //新增Tab內容標籤
        setAttribute(tabContent[i], 'tabpanel', controls, id);
      });

      //展開目前Tab內容
      tabContent[nowOpen].classList.remove('hidden');
      tabBtns[nowOpen].focus();

      //隱藏其他Tab內容
      const siblingsPanel = [...tabContent].filter((value) => value !== tabContent[nowOpen]);
      siblingsPanel.forEach((value) => {
        value.classList.add('hidden');
        // value.setAttribute('aria-hidden', 'true');
      });
    }
  }
  checkRWD();
  window.addEventListener('resize', checkRWD);
}
// && window.innerWidth < windowWidthSmall
// tabItem.style.display = 'none';

// tabFunction({
//   target: '.target1',
//   modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
//   openContent: false, // 預設先展開所有內容，僅開啟模式切換時才可使用
//   openIndex: 0, // 預設開啟第幾個
//   width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
//   autoClose: true, // 自動關閉其他開啟內容
//   openSwitch: true, // 是否可開合/切換
// });

// -----------------------------------------------------------------------
// -----  置頂go to top   -------------------------------------------------
// -----------------------------------------------------------------------

function scrollToTop(obj) {
  const el = document.querySelector(obj); // 控制的對象
  const goCenter = document.querySelector('.goCenter');

  function focusTopBtn() {
    const top = window.scrollY;
    if (top > 200) {
      jsFadeIn(el);
    } else {
      jsFadeOut(el);
    }
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  if (el) {
    // window.scrollY 等於零的時候 執行 focus
    window.addEventListener('scroll', focusTopBtn);

    // 滑鼠點擊置頂按鈕
    el.addEventListener('click', (e) => {
      e.preventDefault();
      scrollTop();
      goCenter.focus();
    });

    // 鍵盤點擊置頂按鈕
    el.addEventListener('keydown', (e) => {
      e.preventDefault();
      scrollTop();
      goCenter.focus();
    });
  }
}

scrollToTop('.scrollToTop');

// -----------------------------------------------------------------------
// -----  FontSize   -----------------------------------------------------
// -----------------------------------------------------------------------

function fontSize() {
  const el = document.querySelector('.fontSize'); // 控制的對象
  const elB = document.querySelector('.fontSize.typeB'); // 控制的對象
  const list = el.querySelectorAll('ul button');
  const body = document.querySelector('body');
  // 初始化 字體大小設定
  let cookie = readCookie('FontSize');

  if (elB) {
    toggleSlider('.fontSize.typeB > button', '.fontSize ul');
  }
  list.forEach((v) => {
    v.addEventListener('click', (e) => {
      createCookie('FontSize', `${e.target.className}`, 356);
      toggleBodyClass(e.target.className);
      e.target.parentNode.classList.add('active');
      e.target.setAttribute('aria-pressed', 'true');
    });
  });

  // 移除 active 的 class 名稱
  function toggleBodyClass(targetClassName) {
    [...list].filter((item) => {
      if (item.className === targetClassName) {
        item.setAttribute('aria-pressed', 'true');
        item.parentNode.classList.add('active');
      } else {
        item.setAttribute('aria-pressed', 'false');
        item.parentNode.classList.remove('active');
      }
    });

    switch (targetClassName) {
      case 'smallSize':
        document.documentElement.classList.remove('largeSize', 'mediumSize');
        document.documentElement.classList.add('smallSize');
        body.classList.remove('largeSize', 'mediumSize');
        body.classList.add('smallSize');
        break;
      case 'mediumSize':
        document.documentElement.classList.remove('smallSize', 'largeSize');
        document.documentElement.classList.add('mediumSize');
        body.classList.remove('smallSize', 'largeSize');
        body.classList.add('mediumSize');
        break;
      case 'largeSize':
        document.documentElement.classList.remove('smallSize', 'mediumSize');
        document.documentElement.classList.add('largeSize');
        body.classList.remove('smallSize', 'mediumSize');
        body.classList.add('largeSize');
        break;
    }
  }

  // 創造新的 字體大小設定
  function createCookie(name, value, days) {
    let _expires;
    const _date = new Date();
    if (days) {
      _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
      _expires = '; expires=' + _date.toGMTString();
    } else {
      _expires = '';
    }
    document.cookie = name + '=' + value + _expires + '; path=/';
  }

  // 讀取瀏覽器上 字體大小設定
  function readCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // 如果沒有cookie 則預設值為'medium'
  if (!cookie) {
    createCookie('FontSize', 'mediumSize', 356);
    toggleBodyClass('mediumSize');
  } else {
    toggleBodyClass(cookie);
  }
}

// window.addEventListener('load', function (e) {
//   console.log('a');
// });
// -----------------------------------------------------------------------
// -----  分享按鈕 share dropdwon   ---------------------------------------
// -----------------------------------------------------------------------

function shareBtnFunction() {
  // 創造一個a連結的按鈕
  const shareUl = document.querySelector('.share');
  if (shareUl) {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'shareButton');
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.textContent = 'share分享按鈕';
    shareUl.insertBefore(btn, shareUl.childNodes[0]);
  }

  toggleSlider('.functionPanel .share > button', '.functionPanel .share ul');
}
shareBtnFunction();

// -----------------------------------------------------------------------
// -----  form表單 單個檔案上傳+多個檔案上傳   --------------------------------
// -----------------------------------------------------------------------

function addFile() {
  const addFileName = document.querySelectorAll('.check_file');
  addFileName.forEach((i) => {
    i.addEventListener('change', pushFileName);
  });

  function pushFileName(e) {
    const fileLen = e.target.files.length;
    let fileName = '';
    const uploadInput = e.target.parentNode.closest('.uploadGrp').querySelector('.upload_file');
    if (fileLen > 1) {
      fileName = `${fileLen} files selected`;
    } else {
      fileName = e.target.files[0].name;
    }
    uploadInput.value = fileName;
  }
}
addFile();

// -----------------------------------------------------------------------
// -----  category active    ---------------------------------------------
// -----------------------------------------------------------------------

// function categoryActive() {
//   const categoryList = document.querySelectorAll('.category');
//   categoryList.forEach((i) => {
//     const item = i.querySelectorAll('a');
//     item.forEach((tag) => {
//       tag.addEventListener('click', (e) => {
//         e.preventDefault();
//         removeClass(item);
//         e.target.classList.add('active');
//       });
//     });
//   });

//   function removeClass(item) {
//     item.forEach((i) => {
//       i.classList.remove('active');
//     });
//   }
// }
// categoryActive();

// -----------------------------------------------------------------------
// -----  gotoCenter on focus跳到 content   ------------------------------
// -----------------------------------------------------------------------

function gotoCenter() {
  const goCenterTag = document.querySelector('a.goCenter');
  const acTag = document.querySelector('#aC');
  const mainAccessKey = document.querySelector('.main .accessKeyItem');
  const headerHeight = document.querySelector('.header').offsetHeight;
  //  .accessKeyItem 到top 的距離等於 header + .accessKeyItem到父層上方的距離
  let distance = headerHeight + mainAccessKey?.offsetTop;
  if (goCenterTag) {
    goCenterTag.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        acTag.focus();
        window.scrollTo({
          top: distance,
          left: 0,
          behavior: 'smooth',
        });
      }
    });
  }
}
gotoCenter();

// -----------------------------------------------------------------------
// -----  無障礙快捷鍵盤組合 a11yKeyCode   ----------------------------------------------
// -----------------------------------------------------------------------

function a11yKeyCode() {
  let search = document.querySelector('.webSearch input[type="text"]');
  let header = document.querySelector('.header .accessKeyItem');
  let main = document.querySelector('.main .accessKeyItem');
  let footer = document.querySelector('footer .accessKeyItem');
  let distance = 0;

  // focus element
  function focusElem(distance, el) {
    if (window.scrollY === distance) {
      el.focus();
    }
  }

  // scroll to element position
  function scrollAnime(distance, el) {
    window.scrollTo({
      top: distance,
      behavior: 'smooth',
    });
    window.addEventListener('scroll', () => {
      focusElem(distance, el);
    });
  }

  // click a11 button
  document.addEventListener('keydown', (e) => {
    switch (e.altKey && e.code) {
      // alt+U header
      case true && 'KeyU':
        scrollAnime(0, header);
        focusElem(0, header);
        break;
      // alt+C 主要內容區
      case true && 'KeyC':
        main.focus();
        let _headerHeight = document.querySelector('header').offsetHeight;
        scrollAnime(_headerHeight, main);
        focusElem(_headerHeight, main);
        break;
      // alt+Z footer
      case true && 'KeyZ':
        let _bodyScrollHeight = document.documentElement.scrollHeight;
        let _bodyClientHeight = document.documentElement.clientHeight;
        let _distance = _bodyScrollHeight - _bodyClientHeight;
        scrollAnime(_distance, footer);
        focusElem(_distance, footer);
        break;
    }
  });
}
a11yKeyCode();

// -----------------------------------------------------------------------
// -----  無障礙錨點切換語系   ----------------------------------------------
// -----------------------------------------------------------------------
// 無障礙錨點切換語系，更改accessKey的title名稱

function switchA11TitleName() {
  const webLang = document.querySelector('html').getAttribute('lang');
  const headerTitle = document.querySelector('.header .accessKeyItem');
  const mainTitle = document.querySelector('.main .accessKeyItem');
  const footerTitle = document.querySelector('footer .accessKeyItem');
  const searchTitle = document.querySelector('.search');
  let lang = webLang.substring(0, 2);
  if (lang === 'zh') {
    headerTitle?.setAttribute('title', '上方功能區塊');
    mainTitle?.setAttribute('title', '中央內容區塊');
    footerTitle?.setAttribute('title', '下方功能區塊');
  } else {
    headerTitle?.setAttribute('title', 'header');
    mainTitle?.setAttribute('title', 'content');
  }
  if (searchTitle !== null) {
    if (lang === 'zh') {
      searchTitle?.setAttribute('title', '關鍵字搜尋：文章關鍵字搜尋');
    } else {
      searchTitle?.setAttribute('title', 'footer');
      searchTitle?.setAttribute('title', 'search');
    }
  }
  if (footerTitle !== null) {
    footerTitle?.setAttribute('title', '下方功能區塊');
  }
}
switchA11TitleName();

// -----------------------------------------------------------------------
// -----   tableList樣式 加上 data-title   -------------------------------
// -----------------------------------------------------------------------

function tableAddDataAttributes(obj) {
  const el = document.querySelectorAll(obj.elemClass);
  el.forEach((i) => {
    const tableItem = i.querySelectorAll('table');
    tableItem.forEach((i) => {
      setTrAttr(i);
    });
    i.classList.add('loaded');
  });
  function setTrAttr(i) {
    const thList = i.querySelectorAll('th');
    const trList = i.querySelectorAll('tr');
    trList.forEach((trItem) => {
      const tdList = trItem.querySelectorAll('td');
      tdList.forEach((i, idx) => {
        tdList[idx].setAttribute(`data-${obj.dataName}`, `${thList[idx].textContent}`);
      });
    });
  }
}
// tableAddDataAttributes({
//   elemClass: '.tableList',
//   dataName: 'title',
// }); // tableList樣式 加上 data-title

// -----------------------------------------------------------------------
// -----   scrollTables   ------------------------------------------------
// -----------------------------------------------------------------------

function scrollTables(obj) {
  let el = document.querySelectorAll(obj) || null; // 按鈕列表名稱
  let realTable = [];

  // scrollTables 初始化
  function appendEle() {
    el.forEach((i) => {
      i.style.position = 'relative';
      const table = i.querySelector('table');
      const wrapElement = document.createElement('div');
      wrapElement.className = 'tableScroll';

      table.replaceWith(wrapElement);
      wrapElement.appendChild(table);

      // 產生左邊按鈕
      let appendLeftEle;
      let leftBtn;
      appendLeftEle = document.createElement('div');
      appendLeftEle.setAttribute('class', 'scrollTableNav scrollTableNavLeft');
      appendLeftEle.style.height = `${i.clientHeight}px`;
      leftBtn = document.createElement('div');
      leftBtn.setAttribute('class', 'scrollTableLeftBtn');
      appendLeftEle.appendChild(leftBtn);

      // 產生右邊按鈕
      let appendRightEle;
      let rightBtn;
      appendRightEle = document.createElement('div');
      appendRightEle.setAttribute('class', 'scrollTableNav scrollTableNavRight');
      appendRightEle.style.height = `${i.clientHeight}px`;
      rightBtn = document.createElement('div');
      rightBtn.setAttribute('class', 'scrollTableRightBtn');
      appendRightEle.appendChild(rightBtn);

      // 新增按鈕
      i.prepend(appendLeftEle, appendRightEle);

      realTable.push(i);
      displayNoneEle(i);
    });
  }

  // 開關遮罩功能
  function displayNoneEle(i) {
    // 父層元素的寬;
    let table = i.querySelector('.tableScroll').clientWidth || 200;
    // 子層元素的寬
    let tableItem = i.querySelector('.tableScroll').scrollWidth;
    // 左邊遮罩
    let rightEle = i.querySelector('.scrollTableNavRight');
    // 右邊遮罩
    let leftEle = i.querySelector('.scrollTableNavLeft');
    // 如果沒有建立遮罩
    if (rightEle == null) {
      return;
    }
    // 如果子層跟父層一樣寬度
    if (table === tableItem) {
      leftEle.style.display = 'none';
      rightEle.style.display = 'none';
    } else {
      i.parentElement.scrollLeft = '0';
      rightEle.style.display = 'block';
      rightEle.style.opacity = '1';
    }
    eleScroll();
  }
  // 當父層滾輪滾動
  function eleScroll() {
    el.forEach((i) => {
      i.querySelector('.tableScroll').addEventListener('scroll', () => {
        // 父層元素的寬
        let table = i.querySelector('.tableScroll').clientWidth;
        // 子層元素的寬
        let tableItem = i.querySelector('.tableScroll').scrollWidth;
        // 左邊遮罩
        let rightEle = i.querySelector('.scrollTableNavRight');
        // 右邊遮罩
        let leftEle = i.querySelector('.scrollTableNavLeft');
        // 捲軸位置
        let scrollPosition = i.querySelector('.tableScroll').scrollLeft;

        if (scrollPosition === 0) {
          leftEle.style.opacity = 0;
          rightEle.style.opacity = 1;
        }
        // 如果捲軸位置還沒到底
        if (scrollPosition > 0) {
          leftEle.style.opacity = 1;
        }
        // 如果捲軸位置＋父層寬度 ＝ 子層寬度
        if (scrollPosition + table === tableItem) {
          rightEle.style.opacity = 0;
          leftEle.style.opacity = 1;
          leftEle.style.display = 'block';
        }
        // 如果捲軸位置＋父層寬度 < 子層寬度
        if (scrollPosition + table < tableItem) {
          rightEle.style.opacity = 1;
        }
      });
    });
  }

  // 點擊左右按鈕時滾動畫面
  function clickEleBtn() {
    // 點擊左邊按鈕
    const leftBtn = document.querySelectorAll('.scrollTableLeftBtn');
    if (leftBtn.length !== 0) {
      leftBtn.forEach((i) => {
        i.addEventListener('click', (item) => {
          i.parentElement.parentElement.querySelector('.tableScroll').scrollLeft -= 200;
        });
      });
    }
    // 點擊右邊按鈕
    const rightBtn = document.querySelectorAll('.scrollTableRightBtn');
    rightBtn?.forEach((i) => {
      i.addEventListener('click', (item) => {
        i.parentElement.parentElement.querySelector('.tableScroll').scrollLeft += 200;
      });
    });
  }

  appendEle();
  clickEleBtn();
  // resize
  window.addEventListener('resize', () => {
    el.forEach((i) => {
      displayNoneEle(i);
    });
  });
}
// scrollTables();

// -----------------------------------------------------------------------
// -----   lazy load   ---------------------------------------------------
// -----------------------------------------------------------------------

let lazyLoadInstance = new LazyLoad({
  elements_selector: 'img.lazy',
  placeholder: '/images/basic/placeholder.gif',
  effect: 'fadeIn',
  fadeTime: 600,
  threshold: 0,
});

// -----------------------------------------------------------------------
// -----   Accordion設定   ------------------------------------------------
// -----------------------------------------------------------------------

function accordionFunction(obj) {
  const { target, openContent = false, openDefault = false, openIndex = 0, autoClose = true, openSwitch = true, info } = obj;
  const infoOpen = info.open;
  const infoClose = info.close;

  const accordionSet = target === undefined ? document.querySelector(obj) : document.querySelector(target);
  if (accordionSet === null) return;
  const accordionBtns = accordionSet.querySelectorAll('.accordionBtn');
  const accordionCons = accordionSet.querySelectorAll('.accordionContent');

  //初始設定
  function accordionInit(targetIndex) {
    accordionSet.dataset.nowIndex = targetIndex;
    accordionBtns.forEach((accordion, i) => {
      const id = `accordion_${randomLetter(3)}${randomFloor(0, 999)}`;
      const controls = `${id}_con`;

      // 增加展開說明文字
      const accordionState = document.createElement('span');
      const targetText = infoOpen;
      accordionState.classList.add('accordionState');
      accordionState.insertAdjacentHTML('afterbegin', targetText);
      accordion.insertAdjacentElement('beforeend', accordionState);

      // 增加箭頭
      const accordionArrow = document.createElement('span');
      accordionArrow.classList.add('accordionArrow');
      accordion.insertAdjacentElement('beforeend', accordionArrow);

      //button
      accordion.setAttribute('id', id);
      accordion.setAttribute('aria-controls', controls);
      accordion.setAttribute('aria-expanded', 'false');

      //content
      accordionCons[i].setAttribute('id', controls);
      accordionCons[i].setAttribute('aria-labelledby', id);
      // accordionCons[i].setAttribute('aria-hidden', 'true');
      accordionCons[i].setAttribute('role', 'region');

      if (openContent) {
        // 預設先展開所有內容
        accordion.classList.add('active');
        accordion.setAttribute('aria-expanded', 'true');
        accordionState.textContent = infoClose;
      } else if (!openContent) {
        accordion.setAttribute('aria-expanded', 'false');
        // accordionCons[i].setAttribute('aria-hidden', 'true');
        accordionCons[i].style.display = 'none';
      }
    });

    if (openDefault) {
      accordionBtns[openIndex].querySelector('.accordionState').textContent = infoOpen;
      accordionBtns[openIndex].parentElement.classList.add('active');
      accordionBtns[openIndex].setAttribute('aria-expanded', 'true');
      // accordionCons[openIndex].removeAttribute('aria-hidden');
      jsSlideDown(accordionCons[openIndex]);
    }
  }
  accordionInit(openIndex);

  function accordionFn(btn, i) {
    const accordionState = btn.querySelector('.accordionState');
    jsSlideToggle(accordionCons[i]);
    accordionSet.dataset.nowIndex = i;
    let infoText = accordionState.textContent === infoOpen ? infoClose : infoOpen;
    let expanded = btn.getAttribute('aria-expanded') === 'true' ? false : true;
    accordionState.textContent = infoText;
    btn.setAttribute('aria-expanded', expanded);
    btn.parentElement.classList.toggle('active');

    if (!autoClose) return;
    const siblingsMobileAccordionBtns = [...accordionBtns].filter((value) => value !== accordionBtns[i]);
    siblingsMobileAccordionBtns.forEach((value) => {
      value.parentElement.classList.remove('active');
      value.querySelector('.accordionState').textContent = infoClose;
    });
    const siblingsAccordionCons = [...accordionCons].filter((value) => value !== accordionCons[i]);
    siblingsAccordionCons.forEach((value) => jsSlideUp(value));
  }

  // 是否可開合/切換
  if (openSwitch) {
    accordionBtns.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        accordionFn(btn, i);
      });

      btn.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight' && !e.shiftKey) {
        }
      });
    });
  }
}

// accordionFunction({
//   target: '.target1',
//   openContent: false, // 預設先展開所有內容，僅開啟模式切換時才可使用
//   openDefault: true,是否有預設開啟
//   openIndex: 0, // 預設開啟第幾個
//   autoClose: true, // 自動關閉其他開啟內容
//   openSwitch: true, // 是否可開合/切換
//   info: {
//     open: '展開', // 收合時顯示
//     close: '收合', // 展開時顯示
//   },
// });
// -----------------------------------------------------------------------
// -----   版型切換   -----------------------------------------------------
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// -----   swiper 箭頭設定 / 手機版主選單語系設定   ------------------------------------------------
// -----------------------------------------------------------------------
function langFunction(obj) {
  const nextClass = document.querySelectorAll(obj.swiper.next);
  const prevClass = document.querySelectorAll(obj.swiper.prev);
  const documentHtml = document.querySelector('html');
  const webLang = documentHtml.getAttribute('lang');
  if (webLang) {
    obj.swiper.data.forEach((s) => {
      if (webLang.slice(0, 2) == s.lang) {
        nextClass.forEach((v) => v.setAttribute('title', s.nextText));
        prevClass.forEach((v) => v.setAttribute('title', s.prevText));
      } else {
        nextClass.forEach((v) => v.setAttribute('title', obj.swiper.default.nextText));
        prevClass.forEach((v) => v.setAttribute('title', obj.swiper.default.prevText));
      }
    });
  }
}

langFunction({
  swiper: {
    next: '.nextSlider',
    prev: '.prevSlider',
    data: [
      {
        lang: 'zh',
        nextText: '下一筆',
        prevText: '上一筆',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: {
      nextText: 'next',
      prevText: 'previous',
    },
  },
  mobileBtn: {
    data: [
      {
        lang: 'zh',
        text: '側欄選單',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: 'SideButton',
  },
  searchBtn: {
    data: [
      {
        lang: 'zh',
        text: '查詢',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: 'Search',
  },
});

function formEye(obj) {
  const documentHtml = document.querySelector('html');
  const webLang = documentHtml.getAttribute('lang');
  // form password eyes
  let checkEye = document.querySelectorAll('.passwordEye');
  checkEye.forEach((item) => {
    let passwordInput = item.parentNode.querySelector('[type="password"]');
    item.addEventListener('click', function (e) {
      if (e.target.classList.contains('hide')) {
        //換class / type
        e.target.classList.remove('hide');
        e.target.classList.add('show');
        if (webLang) {
          obj.password.data.forEach((s) => {
            if (webLang.slice(0, 2) == s.lang) {
              e.target.textContent = s.hide;
            }
          });
        }
        passwordInput.setAttribute('type', 'text');
      } else {
        passwordInput.setAttribute('type', 'password');
        e.target.classList.remove('show');
        e.target.classList.add('hide');
        e.target.textContent = obj.show;
        if (webLang) {
          obj.password.data.forEach((s) => {
            if (webLang.slice(0, 2) == s.lang) {
              e.target.textContent = s.show;
            }
          });
        }
      }
    });
  });
}

formEye({
  password: {
    data: [
      {
        lang: 'zh',
        show: '顯示密碼',
        hide: '隱藏密碼',
      },
      //...由此新增其他語系
    ],
    //預設語系
    default: {
      show: 'show',
      hide: 'hide',
    },
  },
});

// -----------------------------------------------------------------------
// -----   a標籤無障礙判斷   -----------------------------------------------
// -----------------------------------------------------------------------
// 2022/01/10
(function () {
  let a = document.querySelectorAll('a');
  a.forEach((item) => {
    if (!item.getAttribute('href')) {
      item.setAttribute('tabindex', 0);
    }
  });
})();

// -----------------------------------------------------------------------
// -----   fancyBox新增需要綁定才有效果   -----------------------------------
// -----------------------------------------------------------------------
if (document.querySelectorAll('[data-fancybox]').length > 0) {
  Fancybox.bind('[data-fancybox]', {
    l10n: Fancybox.l10n.zh_TW,
  });
}
