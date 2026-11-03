/* Minimal, dependency-free. Site works without JS (progressive enhancement). */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Mobile menu disclosure
  var toggle = document.querySelector('.menu-toggle');
  var list = document.getElementById('primary-menu');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.classList.contains('is-open')) {
        list.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus();
      }
    });
  }

  // Mobile bar: hide on scroll down, show on scroll up
  var bar = document.querySelector('.mobile-bar');
  if (bar) {
    var last = window.scrollY;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (Math.abs(y - last) > 8) { bar.classList.toggle('is-hidden', y > last && y > 200); last = y; }
    }, { passive: true });
  }

  // Quote form: two steps, validation in words, prefill context fields
  var form = document.getElementById('quote-form');
  if (!form) return;
  var steps = form.querySelectorAll('.step');
  var summary = document.getElementById('error-summary');
  var params = new URLSearchParams(location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'trip_id', 'partner_id'].forEach(function (k) {
    var f = form.elements[k]; if (f && params.get(k)) f.value = params.get(k);
  });
  if (form.elements.source_page) form.elements.source_page.value = location.pathname;

  if (steps.length === 2) {
    steps[1].hidden = true;
    var next = document.getElementById('to-step-2');
    if (next) next.hidden = false;
  }

  function validateStep(step) {
    var errs = [];
    step.querySelectorAll('.error[data-for]').forEach(function (n) { n.remove(); });
    var contactFields = step.querySelectorAll('[name="epost"],[name="telefon"]');
    if (contactFields.length) {
      var e = form.elements.epost.value.trim(), t = form.elements.telefon.value.trim();
      var bad = (!e && !t) || (e && !/^\S+@\S+\.\S+$/.test(e));
      contactFields.forEach(function (f) { f.setAttribute('aria-invalid', bad ? 'true' : 'false'); });
      if (bad) errs.push({ el: form.elements.epost, msg: 'Ange en giltig e-postadress eller ett telefonnummer så att vi kan nå dig.' });
    }
    step.querySelectorAll('[required]').forEach(function (f) {
      var ok = f.type === 'checkbox' ? f.checked : f.value.trim() !== '';
      f.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (!ok) errs.push({ el: f, msg: 'Fältet "' + (f.dataset.label || f.name) + '" måste fyllas i.' });
    });
    return errs;
  }
  function showErrors(errs) {
    if (!errs.length) { summary.hidden = true; return true; }
    summary.hidden = false;
    summary.innerHTML = '<h3 id="es-h">Vi behöver komplettera följande</h3><ul>' +
      errs.map(function (e) { return '<li>' + e.msg + '</li>'; }).join('') + '</ul>';
    summary.setAttribute('tabindex', '-1'); summary.focus();
    return false;
  }
  var nextBtn = document.getElementById('to-step-2');
  if (nextBtn) nextBtn.addEventListener('click', function () {
    if (!showErrors(validateStep(steps[0]))) return;
    steps[1].hidden = false; nextBtn.hidden = true;
    steps[1].querySelector('input,select,textarea').focus();
  });
  form.addEventListener('submit', function (e) {
    var errs = validateStep(steps[0]).concat(steps.length > 1 && !steps[1].hidden ? validateStep(steps[1]) : []);
    if (!showErrors(errs)) e.preventDefault();
    // Tracking hook (WS16): push to dataLayer only after consent; no PII.
    window.dataLayer = window.dataLayer || [];
    if (!errs.length) window.dataLayer.push({ event: 'submit_quote', template_id: 'T08', component_id: 'quote-form' });
  });
})();
