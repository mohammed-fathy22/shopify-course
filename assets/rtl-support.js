/**
 * RTL (Right-to-Left) Support for Arabic and other RTL languages
 * Optimized version - minimal and efficient
 */

(function() {
  'use strict';

  // RTL languages set for faster lookup
  const RTL_LANGUAGES = new Set(['ar', 'he', 'fa', 'ur', 'ku', 'dv', 'ps', 'sd', 'yi', 'arc', 'bcc', 'bqi', 'ckb', 'glk', 'lrc', 'mzn', 'pnb', 'prs', 'luz', 'ks']);

  let isRTL = false;
  let currentLang = null;

  /**
   * Get current language from various sources
   */
  function getCurrentLanguage() {
    // Check Shopify.locale first (most reliable)
    if (typeof Shopify !== 'undefined' && Shopify.locale) {
      const lang = Shopify.locale.split('-')[0];
      if (RTL_LANGUAGES.has(lang)) return lang;
    }

    // Check document language
    const docLang = document.documentElement.lang;
    if (docLang) {
      const lang = docLang.split('-')[0];
      if (RTL_LANGUAGES.has(lang)) return lang;
    }

    // Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('locale');
    if (urlLang && RTL_LANGUAGES.has(urlLang)) return urlLang;

    return null;
  }

  /**
   * Apply RTL styles to the document
   */
  function applyRTLStyles() {
    currentLang = getCurrentLanguage();
    isRTL = currentLang && RTL_LANGUAGES.has(currentLang);
    
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.classList.add(`lang-${currentLang}`);
      document.body.classList.add('rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl');
    }
  }

  /**
   * Initialize RTL support
   */
  function initRTLSupport() {
    applyRTLStyles();
    
    // Listen for language changes
    const languageSwitcher = document.querySelector('.localization-form select');
    if (languageSwitcher) {
      languageSwitcher.addEventListener('change', () => {
        setTimeout(applyRTLStyles, 100);
      });
    }
  }

  // Utility functions
  window.isRTLLanguage = () => isRTL;
  window.getCurrentLanguage = getCurrentLanguage;

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRTLSupport);
  } else {
    initRTLSupport();
  }

})();
