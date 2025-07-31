// Load shared header
async function loadHeader() {
    try {
        console.log('Loading header...');
        // Add cache busting parameter
        const response = await fetch('header.html?t=' + Date.now());
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const headerContent = await response.text();
        console.log('Header content loaded:', headerContent);
        
        // Find the header element and replace its content
        const header = document.querySelector('header');
        if (header) {
            header.innerHTML = headerContent;
            console.log('Header updated successfully');
            
            // Set active navigation based on current page
            const currentPage = window.location.pathname.split('/').pop();
            console.log('Current page:', currentPage);
            
            if (currentPage === 'event-schedule.html') {
                const scheduleLink = document.getElementById('nav-schedule');
                if (scheduleLink) {
                    scheduleLink.classList.add('active');
                    console.log('Set active class for schedule link');
                }
            }
            if (currentPage === 'training.html') {
                const trainingLink = document.getElementById('nav-training');
                if (trainingLink) {
                    trainingLink.classList.add('active');
                    console.log('Set active class for training link');
                }
            }
            
            // Re-attach event listeners after header is loaded
            attachEventListeners();
            
            // 添加手機版選單箭頭
            addMobileDropdownArrows();
        } else {
            console.error('Header element not found');
        }
    } catch (error) {
        console.error('Error loading header:', error);
        // Fallback: show simple error message if header.html fails to load
        const header = document.querySelector('header');
        if (header) {
            header.innerHTML = '<div style="padding:1.5rem;text-align:center;color:#c00;font-weight:bold;">⚠️ 無法載入網站導覽，請稍後再試。</div>';
        }
    }
}

// Attach event listeners to navigation
function attachEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    // === 漢堡選單功能 ===
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
        
        // 手機版 dropdown 手風琴效果
        const dropdownToggles = navLinks.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const dropdown = this.closest('.dropdown');
                dropdown.classList.toggle('active');
                
                // 旋轉動態箭頭
                const mobileArrow = this.querySelector('.mobile-arrow');
                if (mobileArrow) {
                    if (dropdown.classList.contains('active')) {
                        mobileArrow.style.transform = 'rotate(180deg)';
                    } else {
                        mobileArrow.style.transform = 'rotate(0deg)';
                    }
                }
            });
        });
        
        // 點擊選單連結後自動收合（行動裝置體驗）
        navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                hamburger.classList.remove('active');
                // 重置所有 dropdown 狀態
                navLinks.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                    // 重置動態箭頭
                    const mobileArrow = dropdown.querySelector('.mobile-arrow');
                    if (mobileArrow) {
                        mobileArrow.style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
    }
}

// === 手機版選單箭頭偵測功能 ===
function addMobileDropdownArrows() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        // 檢查是否有第二層選單
        if (dropdownMenu && dropdownMenu.children.length > 0) {
            // 如果沒有箭頭，就添加箭頭
            if (!dropdownToggle.querySelector('.mobile-arrow')) {
                const arrow = document.createElement('span');
                arrow.className = 'mobile-arrow';
                arrow.textContent = '▼';
                arrow.style.cssText = `
                    margin-left: 8px;
                    font-size: 0.8em;
                    transition: transform 0.3s ease;
                    display: inline-block;
                    flex-shrink: 0;
                `;
                dropdownToggle.appendChild(arrow);
            }
        }
    });
}

// Load shared footer
async function loadFooter() {
    try {
        console.log('Loading footer...');
        // Add cache busting parameter
        const response = await fetch('footer.html?t=' + Date.now());
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const footerContent = await response.text();
        console.log('Footer content loaded:', footerContent);
        
        // Find the footer element and replace its content
        const footer = document.querySelector('footer');
        if (footer) {
            footer.innerHTML = footerContent;
            console.log('Footer updated successfully');
        } else {
            console.error('Footer element not found');
        }
    } catch (error) {
        console.error('Error loading footer:', error);
        // Fallback: show simple error message if footer.html fails to load
        const footer = document.querySelector('footer');
        if (footer) {
            footer.innerHTML = '<div style="padding:1.5rem;text-align:center;color:#c00;font-weight:bold;">⚠️ 無法載入網站頁尾，請稍後再試。</div>';
        }
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, loading header and footer...');
    loadHeader();
    loadFooter();
});

// Also try loading on window load as backup
window.addEventListener('load', function() {
    console.log('Window loaded, checking if header and footer are loaded...');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (header && !header.querySelector('nav')) {
        console.log('Header not loaded yet, trying again...');
        loadHeader();
    }
    
    if (footer && !footer.querySelector('.footer-content')) {
        console.log('Footer not loaded yet, trying again...');
        loadFooter();
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Newsletter form handling
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('感謝訂閱！我們會盡快將最新內容寄送給您。');
        this.querySelector('input[type="email"]').value = '';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and testimonials
document.querySelectorAll('.service-card, .testimonial').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
}); 