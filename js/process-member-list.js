document.addEventListener('DOMContentLoaded', function () {
  function rebuildAndProcessMemberLists() {
    const wrappers = document.querySelectorAll('.js-process-member-list');
    if (wrappers.length === 0) return;

    wrappers.forEach((wrapper) => {
      // --- 1. 結構重建 (修復瀏覽器 <p> 內含 <div> 的錯誤) ---
      const brokenP = wrapper.querySelector('p');
      if (!brokenP) return;

      const newContainer = document.createElement('div');
      if (brokenP.id) newContainer.id = brokenP.id;

      let nextSibling = brokenP.nextElementSibling;
      while (nextSibling && nextSibling.tagName === 'DIV') {
        const currentSibling = nextSibling;
        nextSibling = currentSibling.nextElementSibling;
        newContainer.appendChild(currentSibling);
      }
      brokenP.remove();
      wrapper.appendChild(newContainer);

      // --- 2. 【新增】結構扁平化，應對多餘的包裹層 ---
      // 檢查是否是 tableMemOld 那種只有一個子 div 的情況
      const directChildren = newContainer.querySelectorAll(':scope > div');
      if (directChildren.length === 1 && directChildren[0].children.length > 0) {
        // 如果是，就把子 div 的內容「提升」一層，替換掉父容器的內容
        newContainer.innerHTML = directChildren[0].innerHTML;
      }

      // --- 3. 清理與重組 (與之前相同，但現在作用於正確的結構上) ---
      newContainer.classList.add('member-list-flex');
      newContainer.querySelectorAll('[style]').forEach((el) => el.removeAttribute('style'));
      newContainer.querySelectorAll('span').forEach((span) => {
        if (span.textContent.trim() === '' && span.children.length === 0) {
          span.remove();
        }
      });

      const rowDivs = newContainer.querySelectorAll(':scope > div');
      let isFirstTitleAssigned = false;
      let wasLastRowACategory = false;

      rowDivs.forEach((div) => {
        const text = div.textContent.trim();
        if (!text) return;

        if (text.includes('　')) {
          div.classList.add('member-list-flex__row');
          const parts = text.split('　');
          const name = parts[0].trim();
          const title = parts.slice(1).join('　').trim();
          if (name && title) {
            div.innerHTML = `<span class="member-list-flex__name">${name}</span><span class="member-list-flex__title">${title}</span>`;
          }
          wasLastRowACategory = false;
        } else {
          if (wasLastRowACategory) {
            div.classList.add('member-list-flex__row', 'member-list-flex__row--single-column');
            div.innerHTML = `<span class="member-list-flex__name">${text}</span>`;
            wasLastRowACategory = false;
          } else {
            if (!isFirstTitleAssigned) {
              div.classList.add('member-list-flex__main-title');
              isFirstTitleAssigned = true;
            } else {
              div.classList.add('member-list-flex__category');
            }
            wasLastRowACategory = true;
          }
        }
      });
    });
  }

  rebuildAndProcessMemberLists();
});
