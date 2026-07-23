// Shared language helper for PITWORKS site
window.__pitLang = {
  get() { return localStorage.getItem('pitworks-lang') || 'zh'; },
  set(v) { localStorage.setItem('pitworks-lang', v); },
  toggle() { const n = this.get() === 'zh' ? 'en' : 'zh'; this.set(n); return n; },
  t(zh, en) { return this.get() === 'zh' ? zh : en; },
};
