(function () {
  'use strict';
  var form = document.getElementById('filters');
  var list = document.getElementById('trip-list');
  if (!form || !list) return;
  var cards = list.querySelectorAll('li[data-style]');
  var count = document.getElementById('result-count');
  var empty = document.getElementById('empty');
  function apply() {
    var s = form.elements.stil.value, d = form.elements.langd.value, n = 0;
    cards.forEach(function (c) {
      var ok = (s === 'alla' || c.dataset.style === s) && (d === 'alla' || c.dataset.duration === d);
      c.hidden = !ok; if (ok) n++;
    });
    count.textContent = n === cards.length ? 'Visar alla ' + n + ' reseförslag.' : 'Visar ' + n + ' av ' + cards.length + ' reseförslag.';
    empty.hidden = n !== 0;
  }
  form.addEventListener('change', apply);
  apply();
})();
