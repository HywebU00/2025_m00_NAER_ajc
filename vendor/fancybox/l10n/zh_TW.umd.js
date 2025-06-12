!(function (O, E) {
  'object' == typeof exports && 'undefined' != typeof module ? E(exports) : 'function' == typeof define && define.amd ? define(['exports'], E) : E((((O = 'undefined' != typeof globalThis ? globalThis : O || self).Fancybox = O.Fancybox || {}), (O.Fancybox.l10n = O.Fancybox.l10n || {})));
})(this, function (O) {
  'use strict';
  const E = {
    PANUP: '上移',
    PANDOWN: '下移',
    PANLEFT: '左移',
    PANRIGHT: '右移',
    ZOOMIN: '放大',
    ZOOMOUT: '縮小',
    TOGGLEZOOM: '切換縮放級別',
    TOGGLE1TO1: '切換縮放級別',
    ITERATEZOOM: '切換縮放級別',
    ROTATECCW: '逆時針旋轉',
    ROTATECW: '順時針旋轉',
    FLIPX: '水平翻轉',
    FLIPY: '垂直翻轉',
    FITX: '水平適應',
    FITY: '垂直適應',
    RESET: '重置',
    TOGGLEFS: '切換全螢幕',
    CLOSE: '關閉',
    NEXT: '下一張',
    PREV: '上一張',
    MODAL: '使用 ESC 鍵關閉',
    ERROR: '發生了錯誤,請稍後再試',
    IMAGE_ERROR: '找不到影像',
    ELEMENT_NOT_FOUND: '找不到 HTML 元素',
    AJAX_NOT_FOUND: '載入 AJAX 時出錯: 未找到',
    AJAX_FORBIDDEN: '載入 AJAX 時出錯: 被阻止',
    IFRAME_ERROR: '載入頁面出錯',
    TOGGLE_ZOOM: '切換縮放級別',
    TOGGLE_THUMBS: '切換縮略圖',
    TOGGLE_SLIDESHOW: '切換幻燈片',
    TOGGLE_FULLSCREEN: '切換全屏',
    DOWNLOAD: '下載',
  };
  O.zh_TW = E;
});
