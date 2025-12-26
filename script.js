
// وظيفة بدء التأثيرات الرئيسية
function startMainEffects() {
    // بدء تأثيرات الموقع الرئيسي
    console.log('Starting main site effects...');
    
    // بدء تأثير الكتابة إذا كان موجوداً
    if (typeof type === 'function') {
        setTimeout(type, 1000);
    }
    
    // تفعيل تأثيرات التمرير
    window.dispatchEvent(new Event('scroll'));
    
    // إضافة تأثيرات إضافية للموقع
    enhanceMainSiteEffects();
}

// تعزيز تأثيرات الموقع الرئيسي
function enhanceMainSiteEffects() {
    // تأثيرات الصورة الشخصية في القسم الرئيسي
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.style.opacity = '0';
        profileImg.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            profileImg.style.transition = 'all 1s ease';
            profileImg.style.opacity = '1';
            profileImg.style.transform = 'scale(1)';
        }, 300);
    }
    
    // تأثيرات الدوائر المتحركة
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        circle.style.opacity = '0';
        setTimeout(() => {
            circle.style.transition = `opacity 0.5s ease ${index * 0.1}s`;
            circle.style.opacity = '1';
        }, 500);
    });
    
    // تأثيرات الأيقونات
    const icons = document.querySelectorAll('.circle-icon');
    icons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        setTimeout(() => {
            icon.style.transition = `all 0.5s ease ${0.3 + (index * 0.1)}s`;
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 700);
    });
    
    // تأثيرات النصوص في القسم الرئيسي
    const heroElements = document.querySelectorAll('.intro, .hero-name, .hero-title, .hero-description');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = `all 0.8s ease ${0.5 + (index * 0.2)}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 1000);
    });
    
    // تأثيرات الأزرار والإحصائيات
    setTimeout(() => {
        const buttons = document.querySelectorAll('.hero-buttons .btn');
        const stats = document.querySelectorAll('.stat-item');
        
        [...buttons, ...stats].forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50);
        });
    }, 1500);
}

const professions = ['Web Developer', 'Designer', 'Freelancer'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function type() {
    const currentProfession = professions[professionIndex];
    const typingElement = document.getElementById('typing-text');

    if (isDeleting) {
        typingElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeedVar = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentProfession.length) {
        typeSpeedVar = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typeSpeedVar = 500;
    }

    setTimeout(type, typeSpeedVar);
}

document.addEventListener('DOMContentLoaded', function() {
    // بدء تأثير الكتابة عند تحميل الموقع
    if (document.getElementById('typing-text')) {
        setTimeout(type, 1000);
    }
    
    // تفعيل التنقل السلس
    initSmoothScroll();
    
    // تفعيل تأثيرات القسم عند التمرير
    initScrollEffects();
    
    // تفعيل نموذج الواتساب
    initWhatsAppForm();
    
    // تفعيل تأثيرات المشاريع
    initPortfolioEffects();
    
    // تفعيل تأثيرات إضافية
    initAdditionalEffects();
});

// التنقل السلس
function initSmoothScroll() {
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
}

// تحديث الروابط النشطة
function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // مراقبة ظهور الأقسام
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section:not(.hero)').forEach(section => {
        observer.observe(section);
    });
}
// أضف في بداية script.js بعد الفتحات
// ============================
// نظام إدارة اللغات
// ============================

let currentLanguage = 'en';
const translations = {
    "en": {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "lang.en": "EN",
        "lang.ar": "AR",
        "hero.intro": "Hello, I'm",
        "hero.title": "Information Technology Engineer",
        "hero.description": "I expand my skills and discover new ways to innovate.",
        "hero.downloadCV": "Download CV",
        "hero.contactMe": "Contact Me",
        "stats.projects": "Projects Completed",
        "stats.clients": "Satisfied Clients",
        "stats.experience": "Years of Experience",
        "about.title": "About Me",
        "about.p1": "I am an IT engineer specializing in high-performance building and practical design.",
        "about.p2": "I work on developing modern web applications, optimizing technical systems, and transforming ideas into effective and scalable digital products.",
        "about.p3": "I believe that code is not just about creating real solutions, but about developing them. I always strive to deliver exceptional user experiences and stable systems that meet business needs and keep pace with technological advancements.",
        "about.skills": "Skills",
        "portfolio.title": "Projects",
        "portfolio.viewProject": "View Project",
        "contact.title": "Contact Me",
        "contact.sendWhatsApp": "Send via WhatsApp",
        "contact.namePlaceholder": "Your Name",
        "contact.emailPlaceholder": "Your Email",
        "contact.subjectPlaceholder": "Subject",
        "contact.messagePlaceholder": "Your Message",
        "splash.loading": "Loading Portfolio...",
        "splash.skip": "Skip Intro",
        "splash.enter": "Enter Portfolio",
        "buttons.viewProject": "View Project"
    },
    "ar": {
        "nav.home": "الرئيسية",
        "nav.about": "عني",
        "nav.projects": "المشاريع",
        "nav.contact": "اتصل بي",
        "lang.en": "الإنجليزية",
        "lang.ar": "العربية",
        "hero.intro": "مرحباً، أنا",
        "hero.title": "مهندس تكنولوجيا المعلومات",
        "hero.description": "أطور مهاراتي وأكتشف طرقاً جديدة للابتكار.",
        "hero.downloadCV": "تحميل السيرة الذاتية",
        "hero.contactMe": "اتصل بي",
        "stats.projects": "مشروع مكتمل",
        "stats.clients": "عميل راضٍ",
        "stats.experience": "سنوات خبرة",
        "about.title": "عني",
        "about.p1": "أنا مهندس تكنولوجيا معلومات متخصص في البناء عالي الأداء والتصميم العملي.",
        "about.p2": "أعمل على تطوير تطبيقات الويب الحديثة، وتحسين الأنظمة التقنية، وتحويل الأفكار إلى منتجات رقمية فعالة وقابلة للتوسع.",
        "about.p3": "أعتقد أن البرمجة ليست مجرد إنشاء حلول حقيقية، بل تطويرها. أسعى دائماً لتقديم تجارب مستخدم استثنائية وأنظمة مستقرة تلبي احتياجات الأعمال وتبقى على اطلاع بالتطورات التكنولوجية.",
        "about.skills": "المهارات",
        "portfolio.title": "المشاريع",
        "portfolio.viewProject": "عرض المشروع",
        "contact.title": "اتصل بي",
        "contact.sendWhatsApp": "إرسال عبر واتساب",
        "contact.namePlaceholder": "اسمك",
        "contact.emailPlaceholder": "بريدك الإلكتروني",
        "contact.subjectPlaceholder": "الموضوع",
        "contact.messagePlaceholder": "رسالتك",
        "splash.loading": "جاري تحميل الموقع...",
        "splash.skip": "تخطي المقدمة",
        "splash.enter": "الدخول للموقع",
        "buttons.viewProject": "عرض المشروع"
    }
};

// وظيفة الكشف عن لغة المتصفح
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ar') ? 'ar' : 'en';
}

// وظيفة تحميل اللغة
function loadLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // تحديث اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // تحديث النصوص
    updateTexts();
    
    // تحديث زر اللغة
    updateLanguageButton();
}

// تحديث جميع النصوص
function updateTexts() {
    // تحديث عناصر التنقل
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // تحديث الـ placeholders
    const placeholders = {
        'userName': 'contact.namePlaceholder',
        'userEmail': 'contact.emailPlaceholder',
        'userSubject': 'contact.subjectPlaceholder',
        'userMessage': 'contact.messagePlaceholder'
    };
    
    Object.keys(placeholders).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = translations[currentLanguage][placeholders[id]];
        }
    });
    
    // تحديث عناصر خاصة
    const specialElements = {
        '.intro': 'hero.intro',
        '.hero-title': 'hero.title',
        '.hero-description': 'hero.description',
        '.download-btn': 'hero.downloadCV',
        '.contact-btn': 'hero.contactMe',
        '.section-title[data-i18n-key="about"]': 'about.title',
        '.section-title[data-i18n-key="portfolio"]': 'portfolio.title',
        '.section-title[data-i18n-key="contact"]': 'contact.title',
        '#loadingText': 'splash.loading',
        '#skipBtn': 'splash.skip',
        '#enterBtn': 'splash.enter'
    };
    
    Object.keys(specialElements).forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            const key = specialElements[selector];
            if (translations[currentLanguage][key]) {
                if (selector.includes('btn') || selector.includes('Btn')) {
                    element.innerHTML = element.innerHTML.replace(/<i[^>]*><\/i>/, '') + 
                        ` <i class="${element.querySelector('i')?.className || 'fas'}"></i>`;
                    element.firstChild.textContent = translations[currentLanguage][key];
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        }
    });
    
    // تحديث نصوص الإحصائيات
    const statItems = document.querySelectorAll('.stat-item p');
    const statKeys = ['stats.projects', 'stats.clients', 'stats.experience'];
    statItems.forEach((item, index) => {
        if (translations[currentLanguage][statKeys[index]]) {
            item.textContent = translations[currentLanguage][statKeys[index]];
        }
    });
    
    // تحديث نص زر WhatsApp
    const whatsappBtn = document.querySelector('#whatsappForm button[type="submit"]');
    if (whatsappBtn && translations[currentLanguage]['contact.sendWhatsApp']) {
        whatsappBtn.textContent = translations[currentLanguage]['contact.sendWhatsApp'];
    }
}

// تحديث زر تبديل اللغة
function updateLanguageButton() {
    const langBtn = document.getElementById('languageSwitcher');
    if (langBtn) {
        const langText = langBtn.querySelector('.lang-text');
        if (langText) {
            langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
            langText.setAttribute('data-i18n', currentLanguage === 'en' ? 'lang.ar' : 'lang.en');
        }
        langBtn.setAttribute('title', currentLanguage === 'en' ? 'Switch to Arabic' : 'التغيير إلى الإنجليزية');
        langBtn.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Arabic' : 'التغيير إلى الإنجليزية');
    }
}

// تهيئة نظام اللغات
function initLanguageSystem() {
    // التحقق من التفضيل المحفوظ
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = detectBrowserLanguage();
    
    // تحديد اللغة الافتراضية
    const defaultLang = savedLang || browserLang || 'en';
    
    // تحميل اللغة
    loadLanguage(defaultLang);
    
    // إضافة حدث لزر تبديل اللغة
    const langBtn = document.getElementById('languageSwitcher');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'ar' : 'en';
            loadLanguage(newLang);
            
            // إعادة تطبيق بعض التأثيرات بعد تغيير اللغة
            if (typeof enhanceMainSiteEffects === 'function') {
                setTimeout(enhanceMainSiteEffects, 100);
            }
        });
    }
}

// تحديث الـ DOMContentLoaded ليشمل نظام اللغات
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة نظام اللغات أولاً
    initLanguageSystem();
    
    // بدء تأثير الكتابة عند تحميل الموقع
    if (document.getElementById('typing-text')) {
        setTimeout(type, 1000);
    }
    
    // تفعيل التنقل السلس
    initSmoothScroll();
    
    // تفعيل تأثيرات القسم عند التمرير
    initScrollEffects();
    
    // تفعيل نموذج الواتساب
    initWhatsAppForm();
    
    // تفعيل تأثيرات المشاريع
    initPortfolioEffects();
    
    // تفعيل تأثيرات إضافية
    initAdditionalEffects();
    
    // إضافة كود التحكم بواجهة الإقلاع
    initSplashScreen();
});

// تحديث وظيفة initSplashScreen
function initSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const loadingProgress = document.getElementById('loadingProgress');
    const loadingText = document.getElementById('loadingText');
    const skipBtn = document.getElementById('skipBtn');
    const enterBtn = document.getElementById('enterBtn');
    const mainContent = document.querySelector('.main-content');
    const titleWords = document.querySelectorAll('.title-word');
    
    if (!splashScreen) return;
    
    // تحديث عنوان الوظيفة في واجهة الإقلاع
    if (titleWords.length === 3) {
        const titleKeys = ['Information', 'Technology', 'Engineer'];
        titleWords.forEach((word, index) => {
            const translation = translations[currentLanguage]?.splash?.nameTitle;
            if (translation) {
                const parts = translation.split(' ');
                if (parts[index]) {
                    word.textContent = parts[index];
                }
            }
        });
    }
    
    // باقي الكود كما هو...
    setTimeout(() => {
        loadingProgress.style.width = '100%';
        loadingText.textContent = translations[currentLanguage]?.splash?.loading || 'Loading...';
        
        setTimeout(() => {
            if (skipBtn) skipBtn.style.display = 'none';
            if (enterBtn) enterBtn.style.display = 'inline-block';
        }, 500);
    }, 1000);
    
    // أحداث الأزرار
    if (skipBtn) {
        skipBtn.addEventListener('click', function() {
            enterPortfolio();
        });
    }
    
    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            enterPortfolio();
        });
    }
    
    function enterPortfolio() {
        splashScreen.classList.add('splash-hidden');
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            if (mainContent) mainContent.classList.add('show');
            
            if (typeof startMainEffects === 'function') {
                startMainEffects();
            }
        }, 1000);
    }
    
    setTimeout(() => {
        if (!splashScreen.classList.contains('splash-hidden')) {
            enterPortfolio();
        }
    }, 8000);
}

// إضافة هذا الكود في script.js
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// تفعيل تأثيرات شبكة المشاريع
function initPortfolioEffects() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.portfolio-item').forEach((item, index) => {
                        item.style.setProperty('--delay', index);
                        item.classList.add('animate');
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        portfolioObserver.observe(portfolioGrid);
        
        // إضافة تأثيرات تفاعلية للمشاريع
        addPortfolioInteractions();
    }
}

// إضافة تفاعلات للمشاريع
function addPortfolioInteractions() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        const content = item.querySelector('.portfolio-content');
        const image = item.querySelector('.portfolio-image img');
        
        // تأثير عند التمرير
        item.addEventListener('mouseenter', function() {
            if (overlay) overlay.style.opacity = '0';
            if (content) content.style.opacity = '0.3';
            if (image) image.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            if (overlay) overlay.style.opacity = '0';
            if (content) content.style.opacity = '1';
            if (image) image.style.transform = 'scale(1)';
        });
        
        // إضافة تأثير النقرة
        item.addEventListener('click', function(e) {
            if (!e.target.closest('.btn')) {
                this.classList.toggle('expanded');
            }
        });
    });
}

// تفعيل نموذج الواتساب
function initWhatsAppForm() {
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // الحصول على القيم من الحقول
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            const subject = document.getElementById('userSubject').value.trim();
            const message = document.getElementById('userMessage').value.trim();

            // التحقق من الحقول المطلوبة
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // التحقق من صيغة البريد الإلكتروني
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // رقم هاتفك على الواتساب
            const phoneNumber = "967735540232";
            
            // تكوين نص الرسالة
            const whatsappMessage = 
                `*New Message From Portfolio Website*\n\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Subject:* ${subject}\n` +
                `*Message:* ${message}\n\n` +
                `_Sent from your portfolio website_`;

            // تشفير الرسالة للرابط
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // إنشاء رابط الواتساب
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // فتح الواتساب في نافذة جديدة
            window.open(whatsappURL, '_blank');
            
            // إعادة تعيين النموذج
            whatsappForm.reset();
            
            // رسالة تأكيد
            alert('Opening WhatsApp... Please click send in WhatsApp to complete.');
        });
    }
}

// تفعيل تأثيرات إضافية
function initAdditionalEffects() {
    // حركة إضافية للأيقونات الدائرية
    const circleIcons = document.querySelectorAll('.circle-icon');
    
    // إضافة تأثيرات تفاعلية للأيقونات
    circleIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.boxShadow = '0 0 30px rgba(33, 150, 243, 0.9)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // تحريك الدوائر عند التمرير
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const circles = document.querySelectorAll('.circle');
        
        circles.forEach((circle, index) => {
            const speed = 0.1 + (index * 0.05);
            circle.style.transform = `translate(-50%, -50%) rotate(${scrollPosition * speed}deg)`;
        });
    });
    
    // تأثير النبض للصورة
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        setInterval(() => {
            profileImg.style.boxShadow = '0 0 30px rgba(33, 150, 243, 0.5)';
            setTimeout(() => {
                profileImg.style.boxShadow = '0 0 0 5px #2196F3';
            }, 500);
        }, 3000);
    }
    
    // تحسين تأثير النجوم المتحركة
    createFloatingStars();
}

// إنشاء النجوم المتحركة
function createFloatingStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    starsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(starsContainer);

    // إنشاء النجوم المتحركة
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: moveStar ${duration}s linear ${delay}s infinite;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.5);
        `;
        
        starsContainer.appendChild(star);
    }

    // إضافة الـ keyframes للنجوم المتحركة
    if (!document.querySelector('#starsAnimation')) {
        const style = document.createElement('style');
        style.id = 'starsAnimation';
        style.textContent = `
            @keyframes moveStar {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // تأثير عند التمرير
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const stars = document.querySelectorAll('.stars-container div');
        
        stars.forEach(star => {
            const speed = parseFloat(star.style.animationDuration) || 10;
            star.style.transform = `translateY(${scrollTop * 0.05}px)`;
        });
    });
}

// تفعيل تأثيرات مهارات المهارات
function initSkillEffects() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.setProperty('--delay', index);
    });
}

// تفعيل تأثيرات المدونة
function initBlogEffects() {
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        const blogObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.blog-post').forEach((post, index) => {
                        post.style.setProperty('--delay', index);
                        post.classList.add('animate');
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        blogObserver.observe(blogGrid);
    }
}

// بدء جميع التأثيرات عند تحميل الموقع
document.addEventListener('DOMContentLoaded', function() {
    // تأخير بدء التأثيرات لضمان تحميل واجهة الإقلاع أولاً
    setTimeout(() => {
        initSkillEffects();
        initBlogEffects();
    }, 100);
});

// التحكم بحجم النص للشاشات المختلفة
function handleResponsiveFontSize() {
    const heroName = document.querySelector('.hero-name');
    const splashName = document.querySelector('.splash-name');
    
    if (window.innerWidth <= 768) {
        if (heroName) heroName.style.fontSize = '48px';
        if (splashName) splashName.style.fontSize = '50px';
    } else if (window.innerWidth <= 480) {
        if (heroName) heroName.style.fontSize = '36px';
        if (splashName) splashName.style.fontSize = '40px';
    } else {
        if (heroName) heroName.style.fontSize = '64px';
        if (splashName) splashName.style.fontSize = '70px';
    }
}

// تفعيل التحكم بحجم النص
window.addEventListener('load', handleResponsiveFontSize);
window.addEventListener('resize', handleResponsiveFontSize);

// تأثيرات إضافية عند النقر على الروابط
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // إضافة تأثير صوتي خفيف (اختياري)
        try {
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
            audio.volume = 0.3;
            audio.play();
        } catch (error) {
            console.log('Audio not available');
        }
        
        // إضافة تأثير مرئي خفيف
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// تحسين أداء التمرير
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // تحديث تأثيرات التمرير هنا
            ticking = false;
        });
        ticking = true;
    }
});

// دعم لمتصفحات مختلفة
(function() {
    // دعم requestAnimationFrame
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// إضافة تأثيرات للشبكات الاجتماعية
document.querySelectorAll('.social-links a, .social-links-contact a').forEach(socialLink => {
    socialLink.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotate(15deg) scale(1.2)';
        }
    });
    
    socialLink.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotate(0deg) scale(1)';
        }
    });
});

// تأثيرات النموذج
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-5px)';
        this.parentElement.style.boxShadow = '0 10px 20px rgba(79, 195, 247, 0.2)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
        this.parentElement.style.boxShadow = 'none';
    });
});
