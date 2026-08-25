/* САМУРАЙСКИЕ НИТИ — рендер каталога + мелкие улучшения.
   Контент рисуется синхронно при загрузке (скрипт в конце body),
   поэтому live-регионы не нужны. */

document.documentElement.classList.add('js');

(function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  /* Монограмма-заглушка вместо логотипа — декоративная, скрыта от AT */
  function monoBadge(offer) {
    var m = el('span', 'mono', offer.mono || offer.brand.charAt(0));
    m.setAttribute('aria-hidden', 'true');
    return m;
  }

  var CAT_KANJI = { debit: '刀', credit: '炎', loan: '雷' };

  /* Карточка предложения. Разметка согласована с аудитом доступности:
     li > (logo alt="") + brand + h3 + chips(ul) + кнопка со скрытой подписью. */
  function renderCard(offer) {
    var li = el('li', 'card');

    /* мини-печать категории в углу — декоративная */
    if (CAT_KANJI[offer.cat]) {
      var st = el('span', 'stamp card-stamp', CAT_KANJI[offer.cat]);
      st.setAttribute('aria-hidden', 'true');
      li.appendChild(st);
    }

    var top = el('div', 'card-top');
    var logo = el('span', 'card-logo');
    if (offer.logo) {
      var img = document.createElement('img');
      img.src = 'logos/' + offer.logo;
      img.alt = '';
      img.width = 40;
      img.height = 40;
      img.loading = 'lazy';
      img.addEventListener('error', function () {
        logo.textContent = '';
        logo.appendChild(monoBadge(offer));
      });
      logo.appendChild(img);
    } else {
      logo.appendChild(monoBadge(offer));
    }
    top.appendChild(logo);

    var names = el('div');
    names.appendChild(el('p', 'card-brand', offer.brand));
    names.appendChild(el('h3', 'card-title', offer.title));
    top.appendChild(names);
    li.appendChild(top);

    if (offer.chips && offer.chips.length) {
      var chips = el('ul', 'card-chips');
      chips.setAttribute('role', 'list');
      offer.chips.forEach(function (c) {
        chips.appendChild(el('li', null, c));
      });
      li.appendChild(chips);
    }

    var real = offer.url && offer.url !== '#';
    var a = el('a', 'btn btn-red', 'Оформить');
    var hint = ' — ' + offer.title + ', ' + offer.brand;
    if (real) {
      a.href = offer.url;
      a.target = '_blank';
      a.rel = 'noopener sponsored';
      hint += ' (откроется в новой вкладке)';
    } else {
      /* партнёрской ссылки ещё нет — честная заглушка:
         без href ссылка не в табе и не «живая», состояние озвучивается */
      a.setAttribute('role', 'link');
      a.setAttribute('aria-disabled', 'true');
      a.classList.add('is-disabled');
      hint += ' (ссылка скоро появится)';
    }
    a.appendChild(el('span', 'visually-hidden', hint));
    li.appendChild(a);

    return li;
  }

  function renderGrid(catId, mountId) {
    var mount = document.getElementById(mountId);
    if (!mount || typeof OFFERS === 'undefined') return;
    OFFERS.filter(function (o) { return o.cat === catId; })
      .forEach(function (o) { mount.appendChild(renderCard(o)); });
  }

  document.querySelectorAll('[data-grid]').forEach(function (mount) {
    renderGrid(mount.getAttribute('data-grid'), mount.id);
  });

  /* Появление секций при прокрутке — только украшение:
     без JS и при prefers-reduced-motion всё видно сразу. */
  var revealed = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealed.forEach(function (n) { io.observe(n); });
    /* страховка: если панель предпросмотра скрыта и observer молчит */
    setTimeout(function () {
      revealed.forEach(function (n) { n.classList.add('is-visible'); });
    }, 1600);
  } else {
    revealed.forEach(function (n) { n.classList.add('is-visible'); });
  }
  /* фокус с клавиатуры фиксирует секцию видимой навсегда */
  document.addEventListener('focusin', function (e) {
    var r = e.target.closest && e.target.closest('.reveal');
    if (r) r.classList.add('is-visible');
  });
})();
