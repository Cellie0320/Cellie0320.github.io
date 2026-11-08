/* Mobile-Specific JavaScript for Enhanced Mobile Experience */

// Mobile detection and initialization
function isMobileDevice() {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

let isMobileFeaturesInitialized = false;

// Mobile-specific initialization
document.addEventListener('DOMContentLoaded', function() {
  if (isMobileDevice()) {
    initMobileFeatures();
  }
});

function initMobileFeatures() {
  if (isMobileFeaturesInitialized) {
    return;
  }

  // Initialize mobile-specific features
  setupMobileNavigation();
  setupMobileScrollEffects();
  setupMobileTouchEffects();
  setupMobileTypingAnimation();
  setupMobileProjectCards();
  setupMobileModalOptimizations();
  setupMobileProfileSummaryToggle();
  setupMobilePerformanceOptimizations();
  disableLanguageAndHobbiesButtons();
  setupBottomNavigation();

  isMobileFeaturesInitialized = true;
}

// Fallback toggle function that can be called directly
function mobileToggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  if (hamburgerIcon && menuLinks) {
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
    
    // Add haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }
}

// Make it globally available
window.mobileToggleMenu = mobileToggleMenu;

// Mobile Navigation Enhancement
function setupMobileNavigation() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  if (!hamburgerIcon || !menuLinks) {
    return;
  }

  if (hamburgerIcon.dataset.mobileBound === 'true') {
    return;
  }

  hamburgerIcon.dataset.mobileBound = 'true';
  hamburgerIcon.removeAttribute('onclick');

  hamburgerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    mobileToggleMenu();
  });

  document.addEventListener('click', function(e) {
    const cvBotContainer = document.getElementById('cv-bot-container');
    if (cvBotContainer && cvBotContainer.contains(e.target)) {
      return;
    }

    if (!hamburgerIcon.contains(e.target) && !menuLinks.contains(e.target)) {
      hamburgerIcon.classList.remove('open');
      menuLinks.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hamburgerIcon.classList.remove('open');
      menuLinks.classList.remove('open');
    }
  });

  const menuItems = menuLinks.querySelectorAll('a');
  menuItems.forEach(item => {
    if (item.dataset.mobileBound === 'true') {
      return;
    }
    item.dataset.mobileBound = 'true';
    item.addEventListener('click', function() {
      hamburgerIcon.classList.remove('open');
      menuLinks.classList.remove('open');
    });
  });
}

// Mobile Scroll Effects
function setupMobileScrollEffects() {
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mobile-visible');
        
        // Animate children elements
        const animatedElements = entry.target.querySelectorAll('.language-item, .project-card, .details-container');
        animatedElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('mobile-animate-in');
          }, index * 100);
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// Mobile Touch Effects
function setupMobileTouchEffects() {
  // Add touch ripple effect to buttons
  const buttons = document.querySelectorAll('.btn, .project-card, .future-project-card');
  
  buttons.forEach(button => {
    button.addEventListener('touchstart', function(e) {
      createTouchRipple(e, this);
    });
  });
}

function createTouchRipple(event, element) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.touches[0].clientX - rect.left - size / 2;
  const y = event.touches[0].clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('mobile-ripple');
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Mobile Typing Animation
function setupMobileTypingAnimation() {
  const typingElements = document.querySelectorAll('.typing-text');
  
  typingElements.forEach((element, index) => {
    // Delay each typing animation for mobile
    element.style.animationDelay = `${index * 0.8}s`;
    
    // Remove cursor after animation on mobile
    setTimeout(() => {
      element.style.borderRight = 'none';
    }, (index + 1) * 1500 + 1000);
  });
}

// Mobile Project Cards Enhancement
function setupMobileProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    // Add swipe gesture support
    let startY = 0;
    let startX = 0;
    
    card.addEventListener('touchstart', function(e) {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    });
    
    card.addEventListener('touchmove', function(e) {
      if (!startY || !startX) return;
      
      const deltaY = e.touches[0].clientY - startY;
      const deltaX = e.touches[0].clientX - startX;
      
      // Prevent scrolling when swiping horizontally
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    });
    
    card.addEventListener('touchend', function() {
      startY = 0;
      startX = 0;
    });
  });
}

// Mobile Modal Optimizations
function setupMobileModalOptimizations() {
  const modals = document.querySelectorAll('.modal, .contact-modal, .project-details-modal');
  
  modals.forEach(modal => {
    modal.addEventListener('touchstart', function(e) {
      if (e.target === this) {
        // Close modal on backdrop touch
        const closeFunction = this.id === 'contactModal' ? closeContactForm : null;
        if (closeFunction) closeFunction();
      }
    });
  });
  
  // Prevent body scroll when modal is open
  const modalTriggers = document.querySelectorAll('[onclick*="Modal"], [onclick*="Details"], [onclick*="Contact"]');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      setTimeout(() => {
        document.body.style.overflow = 'hidden';
      }, 100);
    });
  });
}

// Mobile Performance Optimizations
function setupMobilePerformanceOptimizations() {
  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
      // Update scroll-based animations
      updateScrollAnimations();
    }, 16); // ~60fps
  });
  
  // Lazy load images on mobile
  const images = document.querySelectorAll('img');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    if (img.src && !img.dataset.src) {
      img.dataset.src = img.src;
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+';
    }
    imageObserver.observe(img);
  });
}

function updateScrollAnimations() {
  // Removed parallax effect for mobile profile section to prevent movement
  // Mobile profile section should remain fixed during scroll
}

// Mobile-specific utility functions
function addMobileClass() {
  document.body.classList.add('mobile-device');
}

function removeMobileClass() {
  document.body.classList.remove('mobile-device');
}

// Disable language and hobbies buttons on mobile
function disableLanguageAndHobbiesButtons() {
  const languageButtons = document.querySelectorAll('.languages-buttons button');
  const hobbiesButtons = document.querySelectorAll('.hobbies-buttons button');
  
  console.log('Disabling language buttons:', languageButtons.length);
  console.log('Disabling hobbies buttons:', hobbiesButtons.length);
  
  // Disable language buttons
  languageButtons.forEach(button => {
    button.disabled = true;
    button.style.pointerEvents = 'none';
    button.style.cursor = 'default';
    button.style.opacity = '0.7';
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  
  // Disable hobbies buttons
  hobbiesButtons.forEach(button => {
    button.disabled = true;
    button.style.pointerEvents = 'none';
    button.style.cursor = 'default';
    button.style.opacity = '0.7';
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
}

// Handle orientation changes
window.addEventListener('orientationchange', function() {
  setTimeout(() => {
    // Recalculate layouts after orientation change
    window.scrollTo(0, window.pageYOffset);
  }, 500);
});

// Mobile Profile Section Toggle
function toggleMobileProfile() {
  const profileSection = document.getElementById('mobile-profile-section');
  const body = document.body;
  
  if (!profileSection) return;
  
  const isActive = profileSection.classList.contains('active');
  
  if (isActive) {
    // Close profile
    profileSection.classList.remove('active');
    body.style.overflow = '';
    if (typeof updateModalScrollLock === 'function') {
      updateModalScrollLock();
    }

    const summary = document.getElementById('mobileProfileSummary');
    const toggleBtn = document.getElementById('mobileSummaryToggle');
    if (summary && toggleBtn) {
      summary.classList.add('is-collapsed');
      toggleBtn.textContent = 'Read more';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    
    // Remove active state from profile nav item
    const profileNavItem = document.querySelector('.mobile-profile-nav');
    if (profileNavItem) {
      profileNavItem.classList.remove('active');
    }
  } else {
    // Open profile
    profileSection.classList.add('active');
    body.style.overflow = 'hidden';
    
    // Add active state to profile nav item
    const profileNavItem = document.querySelector('.mobile-profile-nav');
    if (profileNavItem) {
      profileNavItem.classList.add('active');
    }
    
    // Remove active state from other nav items
    const otherNavItems = document.querySelectorAll('.mobile-nav-item:not(.mobile-profile-nav)');
    otherNavItems.forEach(item => item.classList.remove('active'));
  }
  
  // Add haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

function setupMobileProfileSummaryToggle() {
  const summary = document.getElementById('mobileProfileSummary');
  const toggleBtn = document.getElementById('mobileSummaryToggle');

  if (!summary || !toggleBtn) {
    return;
  }

  if (toggleBtn.dataset.mobileBound === 'true') {
    return;
  }

  toggleBtn.dataset.mobileBound = 'true';

  toggleBtn.addEventListener('click', function() {
    const isCollapsed = summary.classList.contains('is-collapsed');

    if (isCollapsed) {
      summary.classList.remove('is-collapsed');
      this.textContent = 'Show less';
      this.setAttribute('aria-expanded', 'true');
    } else {
      summary.classList.add('is-collapsed');
      this.textContent = 'Read more';
      this.setAttribute('aria-expanded', 'false');
    }
  });
}

// Make toggleMobileProfile globally available
window.toggleMobileProfile = toggleMobileProfile;

// Close mobile profile when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
  const profileSection = document.getElementById('mobile-profile-section');
  const profileOverlay = document.querySelector('.mobile-profile-overlay');
  
  if (profileSection && profileOverlay) {
    profileOverlay.addEventListener('click', function() {
      toggleMobileProfile();
    });
  }
});

// Handle resize events
window.addEventListener('resize', function() {
  if (isMobileDevice()) {
    if (!document.body.classList.contains('mobile-device')) {
      addMobileClass();
      initMobileFeatures();
    }
  } else {
    if (document.body.classList.contains('mobile-device')) {
      removeMobileClass();
    }
  }
});

// Mobile-specific CSS animations and effects
const mobileCSS = `
  .mobile-ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    animation: mobile-ripple-animation 0.6s ease-out;
    z-index: 1000;
  }
  
  @keyframes mobile-ripple-animation {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .mobile-visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease;
  }
  
  .mobile-animate-in {
    animation: mobile-slide-up 0.6s ease forwards;
  }
  
  @keyframes mobile-slide-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .mobile-device {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  @media (max-width: 768px) {
    section {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.6s ease;
    }
    
    section.mobile-animate {
      opacity: 0;
      transform: translateY(20px);
    }
    
    section.mobile-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject mobile-specific CSS
const style = document.createElement('style');
style.textContent = mobileCSS;
document.head.appendChild(style);

// Enhanced mobile CV bot functionality
function setupMobileCVBot() {
  const cvBot = document.getElementById('cv-bot-container');
  if (!cvBot) return;
  if (cvBot.dataset.mobileBotBound === 'true') return;
  cvBot.dataset.mobileBotBound = 'true';
  
  // Keep bot interactions isolated from page-level handlers on touch devices.
  cvBot.addEventListener('touchstart', function(e) {
    e.stopPropagation();
  }, { passive: true });

  cvBot.addEventListener('touchend', function(e) {
    e.stopPropagation();
  }, { passive: true });

  const botToggle = document.getElementById('cv-bot-toggle');
  const botChat = document.getElementById('cv-bot-chat');
  const messages = document.getElementById('cv-bot-messages');
  
  if (botToggle && botChat) {
    botChat.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    botChat.addEventListener('touchmove', function(e) {
      e.stopPropagation();
    }, { passive: true });
  }

  if (messages) {
    messages.addEventListener('touchmove', function(e) {
      e.stopPropagation();
    }, { passive: true });
  }
}

// Initialize mobile CV bot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setupMobileCVBot();
  });
} else {
  setupMobileCVBot();
}

// Export functions for use in main script
window.mobileUtils = {
  isMobileDevice,
  initMobileFeatures,
  setupMobileNavigation,
  createTouchRipple,
  addMobileClass,
  removeMobileClass,
  mobileToggleMenu,
  disableLanguageAndHobbiesButtons
};

// Bottom Navigation functionality
function setupBottomNavigation() {
  if (setupBottomNavigation.initialized) {
    return;
  }

  const navItems = document.querySelectorAll('.mobile-nav-item:not(.mobile-profile-nav)');
  const profileNavItem = document.querySelector('.mobile-profile-nav');
  const sections = document.querySelectorAll('section[id]:not(#profile)'); // Exclude profile section from scroll detection

  if (!navItems.length) {
    return;
  }
  
  // Set up click handlers for regular navigation items
  navItems.forEach(item => {
    if (item.dataset.navBound === 'true') {
      return;
    }
    item.dataset.navBound = 'true';

    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all items
      navItems.forEach(nav => nav.classList.remove('active'));
      if (profileNavItem) profileNavItem.classList.remove('active');
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Close mobile profile if open
      const profileSection = document.getElementById('mobile-profile-section');
      if (profileSection && profileSection.classList.contains('active')) {
        toggleMobileProfile();
      }
      
      // Get target section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      // Special handling for profile/home button - scroll to top instead of hidden profile section
      if (targetId === 'profile') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else if (targetSection) {
        const sectionTop = Math.max(0, targetSection.offsetTop - 8);
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
      
      // Add haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    });
  });
  
  // Set up intersection observer for active states (excluding profile nav)
  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -70% 0px', // Adjusted for better section detection
    threshold: 0.2
  };
  
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        
        // Remove active from all nav items (but not profile nav when profile is open)
        const profileSection = document.getElementById('mobile-profile-section');
        const isProfileOpen = profileSection && profileSection.classList.contains('active');
        
        if (!isProfileOpen) {
          navItems.forEach(item => item.classList.remove('active'));
          if (profileNavItem) profileNavItem.classList.remove('active');
          
          // Add active to corresponding nav item
          const activeNavItem = document.querySelector(`.mobile-nav-item[data-section="${sectionId}"]`);
          if (activeNavItem && !activeNavItem.classList.contains('mobile-profile-nav')) {
            activeNavItem.classList.add('active');
          }
        }
      }
    });
  }, observerOptions);
  
  // Observe all sections except profile
  sections.forEach(section => {
    navObserver.observe(section);
  });
  
  // Set initial active state for home/profile button when at top of page
  function updateHomeActiveState() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const homeNav = document.querySelector('.mobile-nav-item[data-section="profile"]');
    const profileSection = document.getElementById('mobile-profile-section');
    const isProfileOpen = profileSection && profileSection.classList.contains('active');
    
    if (scrollTop < 100 && !isProfileOpen && homeNav) { // If near top of page
      navItems.forEach(item => item.classList.remove('active'));
      homeNav.classList.add('active');
    }
  }
  
  // Update home active state on scroll
  window.addEventListener('scroll', updateHomeActiveState);
  
  // Set initial active state
  updateHomeActiveState();
  setupBottomNavigation.initialized = true;
}

// Initialize bottom navigation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (isMobileDevice()) {
    setupBottomNavigation();
  }
});

// Also setup on window resize to handle responsive behavior
window.addEventListener('resize', function() {
  const mobileNav = document.querySelector('.mobile-bottom-nav');
  if (!setupBottomNavigation.initialized && mobileNav && window.getComputedStyle(mobileNav).display !== 'none') {
    setupBottomNavigation();
  }
});

// Test function to verify menu elements
window.testMobileMenu = function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');
  const menuItems = menuLinks ? menuLinks.querySelectorAll('a') : [];
  
  console.log('Menu Test Results:', {
    hamburgerFound: !!hamburgerIcon,
    menuFound: !!menuLinks,
    menuItemsCount: menuItems.length,
    menuItemsText: Array.from(menuItems).map(item => item.textContent.trim()),
    menuItemsHref: Array.from(menuItems).map(item => item.getAttribute('href')),
    hamburgerClasses: hamburgerIcon ? Array.from(hamburgerIcon.classList) : null,
    menuClasses: menuLinks ? Array.from(menuLinks.classList) : null,
    hamburgerOnclick: hamburgerIcon ? hamburgerIcon.getAttribute('onclick') : null,
    menuLinksHTML: menuLinks ? menuLinks.innerHTML : null
  });
  
  if (hamburgerIcon && menuLinks) {
    console.log('Forcing menu toggle...');
    mobileToggleMenu();
  }
};
