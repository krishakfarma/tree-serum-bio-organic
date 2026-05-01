// Language switcher functionality
function toggleLanguage() {
  const currentLang = window.currentLanguage === 'en' ? 'mr' : 'en';
  switchLanguage(currentLang);
}

// Update all translatable elements on the page
function updateAllTranslations() {
  // Update navigation
  updateNavigation();
  
  // Update hero section
  updateHeroSection();
  
  // Update stats
  updateStats();
  
  // Update about section
  updateAboutSection();
  
  // Update categories
  updateCategories();
  
  // Update products section
  updateProductsSection();
  
  // Update why us section
  updateWhySection();
  
  // Update how to use section
  updateHowSection();
  
  // Update contact section
  updateContactSection();
  
  // Update footer
  updateFooter();
  
  // Update mobile menu
  updateMobileMenu();
  
  // Update page title and meta
  updatePageMeta();
}

// Update navigation elements
function updateNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const navTexts = ['about', 'products', 'why', 'how', 'contact'];
  
  navLinks.forEach((link, index) => {
    if (navTexts[index]) {
      link.textContent = t(`nav.${navTexts[index]}`);
    }
  });
  
  // Update Enquire Now button
  const navCTA = document.querySelector('.nav-cta');
  if (navCTA) {
    navCTA.textContent = t('nav.enquire');
  }
}

// Update hero section
function updateHeroSection() {
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    heroBadge.textContent = t('hero.badge');
  }
  
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = t('hero.title');
  }
  
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) {
    heroSub.textContent = t('hero.subtitle');
  }
  
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  if (heroButtons[0]) {
    heroButtons[0].textContent = t('hero.exploreProducts');
  }
  if (heroButtons[1]) {
    heroButtons[1].textContent = t('hero.contactUs');
  }
  
  // Update hero section address
  const heroAddressLocation = document.querySelector('.hero-cert:nth-child(3) .cert-text strong');
  if (heroAddressLocation) {
    const locationTranslation = t('contact.addressInfo.location');
    heroAddressLocation.textContent = locationTranslation;
  }
  
  const heroAddressDetails = document.querySelector('.hero-cert:nth-child(3) .cert-text span');
  if (heroAddressDetails) {
    const detailsTranslation = t('contact.addressInfo.details');
    heroAddressDetails.textContent = detailsTranslation;
  }
}

// Update stats
function updateStats() {
  const statLabels = document.querySelectorAll('.stat-label');
  const statKeys = ['uniqueProducts', 'bioOrganic', 'certifiedQuality', 'allCrops'];
  
  statLabels.forEach((label, index) => {
    if (statKeys[index]) {
      label.textContent = t(`stats.${statKeys[index]}`);
    }
  });
}

// Update about section
function updateAboutSection() {
  const aboutLabel = document.querySelector('.about .section-label');
  if (aboutLabel) {
    aboutLabel.textContent = t('about.label');
  }
  
  const aboutTitle = document.querySelector('.about .section-title');
  if (aboutTitle) {
    aboutTitle.textContent = t('about.title');
  }
  
  const aboutSub = document.querySelector('.about .section-sub');
  if (aboutSub) {
    aboutSub.textContent = t('about.subtitle');
  }
  
  const aboutMainCard = document.querySelector('.about-main-card');
  if (aboutMainCard) {
    const h3 = aboutMainCard.querySelector('h3');
    if (h3) h3.textContent = t('about.whoWeAre');
    
    const paragraphs = aboutMainCard.querySelectorAll('p');
    if (paragraphs[0]) paragraphs[0].textContent = t('about.whoWeAreText');
    if (paragraphs[1]) paragraphs[1].innerHTML = t('about.whoWeAreText2');
  }
  
  // Update features
  const features = document.querySelectorAll('.about-feat');
  const featureKeys = ['cropSpecific', 'scientificallyDeveloped', 'bioOrganic', 'farmerFirst'];
  
  features.forEach((feat, index) => {
    if (featureKeys[index]) {
      const strong = feat.querySelector('strong');
      const span = feat.querySelector('span');
      
      if (strong) strong.textContent = t(`about.features.${featureKeys[index]}`);
      if (span) span.textContent = t(`about.features.${featureKeys[index]}Desc`);
    }
  });
}

// Update categories section
function updateCategories() {
  const categoriesLabel = document.querySelector('.categories .section-label');
  if (categoriesLabel) {
    categoriesLabel.textContent = t('categories.label');
  }
  
  const categoriesTitle = document.querySelector('.categories .section-title');
  if (categoriesTitle) {
    categoriesTitle.textContent = t('categories.title');
  }
  
  const categoriesSub = document.querySelector('.categories .section-sub');
  if (categoriesSub) {
    categoriesSub.textContent = t('categories.subtitle');
  }
  
  // Update category cards
  const catNames = document.querySelectorAll('.cat-name');
  const catCounts = document.querySelectorAll('.cat-count');
  const catKeys = ['sugarcane', 'banana', 'onion', 'guava', 'vegetables', 'ginger', 'flowers', 'allCrops'];
  
  catNames.forEach((name, index) => {
    if (catKeys[index]) {
      name.textContent = t(`categories.${catKeys[index]}`);
    }
  });
  
  catCounts.forEach((count, index) => {
    if (catKeys[index]) {
      const translationKey = `categories.categoryCounts.${catKeys[index]}`;
      const translatedText = t(translationKey);
      count.textContent = translatedText;
      console.log(`Translating ${translationKey}: ${translatedText}`);
    }
  });
}

// Update products section
function updateProductsSection() {
  const productsLabel = document.querySelector('.products .section-label');
  if (productsLabel) {
    productsLabel.textContent = t('products.label');
  }
  
  const productsTitle = document.querySelector('.products .section-title');
  if (productsTitle) {
    productsTitle.textContent = t('products.title');
  }
  
  const productsSub = document.querySelector('.products .section-sub');
  if (productsSub) {
    productsSub.textContent = t('products.subtitle');
  }
  
  // Update filter tabs
  const allProductsTab = document.querySelector('.filter-tab');
  if (allProductsTab) {
    allProductsTab.textContent = t('products.allProducts');
  }
  
  // Re-render products with current language
  if (typeof renderProducts === 'function') {
    renderProducts();
  }
}

// Update why us section
function updateWhySection() {
  const whyLabel = document.querySelector('.why .section-label');
  if (whyLabel) {
    whyLabel.textContent = t('why.label');
  }
  
  const whyTitle = document.querySelector('.why .section-title');
  if (whyTitle) {
    whyTitle.textContent = t('why.title');
  }
  
  const whySub = document.querySelector('.why .section-sub');
  if (whySub) {
    whySub.textContent = t('why.subtitle');
  }
  
  // Update why cards
  const whyCards = document.querySelectorAll('.why-card');
  const whyKeys = ['isoCertified', 'bioOrganic', 'cropSpecific', 'scienceBacked', 'provenYield', 'dedicatedSupport'];
  
  whyCards.forEach((card, index) => {
    if (whyKeys[index]) {
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      
      if (h3) h3.textContent = t(`why.${whyKeys[index]}`);
      if (p) p.textContent = t(`why.${whyKeys[index]}Desc`);
    }
  });
}

// Update how to use section
function updateHowSection() {
  const howLabel = document.querySelector('.how .section-label');
  if (howLabel) {
    howLabel.textContent = t('how.label');
  }
  
  const howTitle = document.querySelector('.how .section-title');
  if (howTitle) {
    howTitle.textContent = t('how.title');
  }
  
  const howSub = document.querySelector('.how .section-sub');
  if (howSub) {
    howSub.textContent = t('how.subtitle');
  }
  
  // Update steps
  const steps = document.querySelectorAll('.step');
  const stepData = t('how.steps');
  
  steps.forEach((step, index) => {
    if (stepData[index]) {
      const h3 = step.querySelector('h3');
      const p = step.querySelector('p');
      
      if (h3) h3.textContent = stepData[index].title;
      if (p) p.textContent = stepData[index].description;
    }
  });
}

// Update contact section
function updateContactSection() {
  const contactLabel = document.querySelector('.contact .section-label');
  if (contactLabel) {
    contactLabel.textContent = t('contact.label');
  }
  
  const contactTitle = document.querySelector('.contact .section-title');
  if (contactTitle) {
    contactTitle.textContent = t('contact.title');
  }
  
  const contactSub = document.querySelector('.contact .section-sub');
  if (contactSub) {
    contactSub.textContent = t('contact.subtitle');
  }
  
  // Update contact info
  const contactDetails = document.querySelectorAll('.contact-detail strong');
  const contactKeys = ['phone', 'email', 'youtube', 'address'];
  
  contactDetails.forEach((detail, index) => {
    if (contactKeys[index]) {
      detail.textContent = t(`contact.${contactKeys[index]}`);
    }
  });
  
  // Update address span with data-translate attribute
  const addressSpan = document.querySelector('.contact-item[data-translate] span');
  if (addressSpan) {
    addressSpan.textContent = t('contact.addressInfo.fullAddress');
  }
  
  // Handle all elements with data-translate attributes
  const translatableElements = document.querySelectorAll('[data-translate]');
  translatableElements.forEach(element => {
    const translationKey = element.getAttribute('data-translate');
    if (translationKey) {
      element.textContent = t(translationKey);
    }
  });
  
  // Update contact form
  const sendEnquiryTitle = document.querySelector('.contact h3');
  if (sendEnquiryTitle) {
    sendEnquiryTitle.textContent = t('contact.sendEnquiry');
  }
  
  const formLabels = document.querySelectorAll('.form-group label');
  const formKeys = ['yourName', 'phoneNumber', 'cropType', 'yourMessage'];
  
  formLabels.forEach((label, index) => {
    if (formKeys[index]) {
      label.textContent = t(`contact.${formKeys[index]}`);
    }
  });
  
  // Update form placeholders
  const nameInput = document.querySelector('input[type="text"]');
  if (nameInput) nameInput.placeholder = t('contact.namePlaceholder');
  
  const phoneInput = document.querySelector('input[type="tel"]');
  if (phoneInput) phoneInput.placeholder = t('contact.phonePlaceholder');
  
  const messageTextarea = document.querySelector('textarea');
  if (messageTextarea) messageTextarea.placeholder = t('contact.messagePlaceholder');
  
  // Update select options
  const cropSelect = document.querySelector('select');
  if (cropSelect) {
    const options = cropSelect.querySelectorAll('option');
    const cropKeys = ['', 'sugarcane', 'gingerTurmeric', 'banana', 'onion', 'guava', 'vegetables', 'pomegranate', 'other'];
    
    options.forEach((option, index) => {
      if (cropKeys[index]) {
        if (cropKeys[index] === '') {
          // First option (placeholder)
          option.textContent = t('contact.selectCrop');
        } else {
          option.textContent = t(`contact.cropOptions.${cropKeys[index]}`);
        }
      }
    });
  }
  
  // Update submit button
  const submitBtn = document.querySelector('.form-submit');
  if (submitBtn) {
    submitBtn.textContent = t('contact.sendEnquiryBtn');
  }
}

// Update footer
function updateFooter() {
  const footerBrand = document.querySelector('.footer-brand .nav-brand');
  if (footerBrand) {
    // Keep the brand name as is, only update description
  }
  
  const footerDescription = document.querySelector('.footer-brand p');
  if (footerDescription) {
    footerDescription.textContent = t('footer.description');
  }
  
  // Update footer column headers
  const footerHeaders = document.querySelectorAll('.footer-col h4');
  if (footerHeaders[0]) footerHeaders[0].textContent = t('footer.products');
  if (footerHeaders[1]) footerHeaders[1].textContent = t('footer.quickLinks');
  
  // Update become distributor link
  const distributorLink = document.querySelector('.footer-col ul li:last-child a');
  if (distributorLink) {
    distributorLink.textContent = t('footer.becomeDistributor');
  }
  
  // Update footer bottom
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    const copyright = footerBottom.querySelector('span:first-child');
    if (copyright) {
      copyright.textContent = t('footer.copyright');
    }
    
    const isoBadge = footerBottom.querySelector('.iso-badge');
    if (isoBadge) {
      isoBadge.textContent = t('footer.isoBadge');
    }
    
    const lastSpan = footerBottom.querySelector('span:last-child');
    if (lastSpan && !lastSpan.classList.contains('iso-badge')) {
      lastSpan.textContent = t('footer.biostimulantLicense');
    }
  }
}

// Update mobile menu
function updateMobileMenu() {
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  const mobileTexts = ['about', 'products', 'why', 'how', 'contact'];
  
  mobileLinks.forEach((link, index) => {
    if (mobileTexts[index]) {
      link.textContent = t(`nav.${mobileTexts[index]}`);
    }
  });
}

// Update page meta information
function updatePageMeta() {
  // Update page title
  const title = document.querySelector('title');
  if (title && currentLanguage === 'mr') {
    title.textContent = 'ट्री सीरम बायो ऑर्गॅनिक इंटरनॅशनल | बायो-ऑर्गॅनिक शेती उपाय';
  }
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && currentLanguage === 'mr') {
    metaDescription.content = 'ट्री सीरम बायो ऑर्गॅनिक इंटरनॅशनल द्राक्षे, भाजीपाले, फळे आणि सर्व पिकांसाठी प्रमाणित बायो-ऑर्गॅनिक बायोस्टिम्युलंट्स आणि पिक-विशिष्ट उपाय देखावत आहे. ISO 9001:2015 प्रमाणित गुणवत्ता उत्पादने.';
  }
  
  // Update lang attribute
  const html = document.documentElement;
  if (html) {
    html.setAttribute('lang', currentLanguage === 'mr' ? 'mr' : 'en');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language
  initializeLanguage();
  
  // Update all translations
  updateAllTranslations();
  
  // Update language toggle button
  updateLanguageToggle();
});
