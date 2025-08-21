document.addEventListener('DOMContentLoaded', function () {
  function rebuildAndProcessMemberLists() {
    const wrappers = document.querySelectorAll('.js-process-member-list');
    if (wrappers.length === 0) return;

    wrappers.forEach((wrapper) => {
      // 1. 找到那個被瀏覽器弄空的 <p>
      const brokenP = wrapper.querySelector('p');
      if (!brokenP) return;

      // 2. 創建一個新的、正確的 <div> 容器
      const newContainer = document.createElement('div');

      // 3. 把舊 <p> 的 id 繼承過來
      if (brokenP.id) {
        newContainer.id = brokenP.id;
      }

      // 4. 找出所有被「踢」出來的兄弟 <div>，然後把它們搬進新家
      let nextSibling = brokenP.nextElementSibling;
      while (nextSibling && nextSibling.tagName === 'DIV') {
        const currentSibling = nextSibling;
        nextSibling = currentSibling.nextElementSibling; // 先記住下一個，不然搬家後就找不到了
        newContainer.appendChild(currentSibling); // 執行搬家
      }

      // 5. 刪掉那個沒用的空 <p>
      brokenP.remove();

      // 6. 把我們重建好的新容器放回頁面
      wrapper.appendChild(newContainer);

      // --- 至此，DOM 結構已完美修復！現在開始做樣式處理 ---

      // 7. 為新容器加上 class
      newContainer.classList.add('member-list-flex');

      // 8. 徹底清理內部所有元素的 style 屬性
      newContainer.querySelectorAll('[style]').forEach((el) => el.removeAttribute('style'));

      // 9. 移除無用的空白 span
      newContainer.querySelectorAll('span').forEach((span) => {
        if (span.textContent.trim() === '' && span.children.length === 0) {
          span.remove();
        }
      });

      // 10. 為每一行加上對應的 class
      const rowDivs = newContainer.querySelectorAll(':scope > div');
      let isFirstTitleAssigned = false;

      rowDivs.forEach((div) => {
        const text = div.textContent.trim();
        if (text.includes('　')) {
          div.classList.add('member-list-flex__row');
          const parts = text.split('　');
          const name = parts[0].trim();
          const title = parts.slice(1).join('　').trim();
          if (name && title) {
            div.innerHTML = `<span class="member-list-flex__name">${name}</span><span class="member-list-flex__title">${title}</span>`;
          }
        } else if (text) {
          if (!isFirstTitleAssigned) {
            div.classList.add('member-list-flex__main-title');
            isFirstTitleAssigned = true;
          } else {
            div.classList.add('member-list-flex__category');
          }
        }
      });
    });
  }

  rebuildAndProcessMemberLists();
});
