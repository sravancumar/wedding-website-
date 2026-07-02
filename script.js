document.addEventListener('DOMContentLoaded', () => {

    // --- Translation System (English & Telugu) ---
    const translations = {
        en: {
            env_subtitle: "The Celebration of",
            env_location: "Hyderabad, India",
            seal_instruction: "Click Seal to Open",
            nav_home: "Home",
            nav_union: "Our Union",
            nav_story: "Our Story",
            nav_events: "Events",
            nav_moments: "Moments",
            nav_venue: "Venue",
            nav_countdown: "Countdown",
            hero_tagline: "The Celebration",
            hero_btn: "View Invitation",
            scroll_text: "Scroll",
            union_title: "The Sacred Union",
            union_text: "With the grace of our families, we, <strong>Thumma Naveen Kumar</strong> & <strong>Anusha Mundada</strong>, invite you to join us as we embark on this beautiful journey of companionship. A celebration of love, commitment, and custom.",
            story_title: "Beyond the Lyrics",
            story_date: "August 15",
            story_text: "With the blessings of our families and elders, our paths crossed to embark on a beautiful journey of togetherness. What began as a traditional arrangement has blossomed into a promise of a lifetime of love, mutual respect, and companionable joy. We look forward to celebrating this sacred beginning of our union with you.",
            groom_role: "Groom",
            bride_role: "Bride",
            events_title: "The Celebration",
            events_subtitle: "Join us for the special celebrations of our union",
            event_muhurtham_title: "Muhurtham",
            event_muhurtham_time: "August 15, 2026 • 9:00 AM",
            event_muhurtham_desc: "The auspicious hour of our wedding rituals and traditional tying of the knot.",
            muhurtham_venue_name: "VPR Convention Centre",
            muhurtham_venue_loc: "Kukatpally, Hyderabad, India",
            view_map: "View on Map",
            event_reception_title: "Reception",
            event_reception_time: "August 15, 2026 • 7:00 PM",
            event_reception_desc: "An evening of joy, celebration, delicious food, and music to commemorate our union.",
            reception_venue_name: "The Grand Palace Hall",
            reception_venue_loc: "HITEC City, Hyderabad, India",
            gallery_title: "Cherished Moments",
            gallery_subtitle: "A glimpse into our celebration preparations and memories",
            moment_1: "The Invitation",
            moment_2: "The Venue decor",
            moment_3: "The Feast",
            map_section_title: "The Venue Maps",
            map_section_subtitle: "Find your way to our celebrations",
            tab_muhurtham: "Muhurtham Venue",
            tab_reception: "Reception Venue",
            muhurtham_card_title: "VPR Convention Centre",
            muhurtham_card_address: "KPR Colony, Kukatpally, Hyderabad, Telangana 500072",
            reception_card_title: "The Grand Palace Hall",
            reception_card_address: "HITEC City Main Road, Cyberabad, Hyderabad, Telangana 500081",
            get_directions: "Get Directions",
            countdown_title: "Save Our Date",
            label_days: "Days",
            label_hours: "Hours",
            label_minutes: "Mins",
            label_seconds: "Secs",
            download_btn: "Download Wedding Invitation (Video)",
            seal_prompt: "✨ Tap the Seal to Open Your Invitation ✨",
            autoplay_msg: "🎵 Tap anywhere to start the music"
        },
        te: {
            env_subtitle: "శుభకార్య మహోత్సవం",
            env_location: "హైదరాబాద్, ఇండియా",
            seal_instruction: "తెరిచేందుకు ముద్రపై క్లిక్ చేయండి",
            nav_home: "హోమ్",
            nav_union: "మా వివాహం",
            nav_story: "మా కథ",
            nav_events: "వేడుకలు",
            nav_moments: "చిత్రాలు",
            nav_venue: "వేదిక",
            nav_countdown: "సమయం",
            hero_tagline: "శుభ వివాహ మహోత్సవం",
            hero_btn: "పత్రిక చూడండి",
            scroll_text: "కిందికి జరపండి",
            union_title: "పవిత్ర బంధం",
            union_text: "మా కుటుంబాల ఆశీస్సులతో, మేము (తుమ్మ నవీన్ కుమార్ & అనుష ముందడ) మా నూతన జీవిత ప్రయాణాన్ని ప్రారంభిస్తున్నాము. ఈ పవిత్ర బంధంలో భాగస్వాములు కావాల్సిందిగా మిమ్మల్ని సగౌరవంగా ఆహ్వానిస్తున్నాము.",
            story_title: "మా పరిచయం",
            story_date: "ఆగస్టు 15",
            story_text: "మా పెద్దలు మరియు కుటుంబ సభ్యుల సమక్షంలో నిశ్చయించబడిన ఈ సంబంధం, పరస్పర గౌరవం, ప్రేమ మరియు ఆనందంతో నిండిన జీవితకాల బంధంగా రూపాంతరం చెందింది. ఈ పవిత్ర బంధాన్ని మీతో పంచుకోవడానికి మేము సంతోషిస్తున్నాము.",
            groom_role: "వరుడు",
            bride_role: "వధువు",
            events_title: "వివాహ వేడుకలు",
            events_subtitle: "మా వివాహ శుభకార్య వేడుకల్లో పాల్గొని మమ్మల్ని ఆశీర్వదించండి",
            event_muhurtham_title: "ముహూర్తం",
            event_muhurtham_time: "ఆగస్టు 15, 2026 • ఉదయం 9:00 గంటలకు",
            event_muhurtham_desc: "సాంప్రదాయ పద్ధతిలో జరిగే మా కళ్యాణ మహోత్సవం మరియు మంగళసూత్ర ధారణ వేడుక.",
            muhurtham_venue_name: "వీపీఆర్ కన్వెన్షన్ సెంటర్",
            muhurtham_venue_loc: "కూకట్‌పల్లి, హైదరాబాద్, ఇండియా",
            view_map: "మ్యాప్ చూడండి",
            event_reception_title: "రిసెప్షన్",
            event_reception_time: "ఆగస్టు 15, 2026 • సాయంత్రం 7:00 గంటలకు",
            event_reception_desc: "స్నేహితులు, బంధుమిత్రులతో కలిసి విందు, వినోదాలతో కూడిన వివాహ విందు వేడుక.",
            reception_venue_name: "ది గ్రాండ్ ప్యాలెస్ హాల్",
            reception_venue_loc: "హైటెక్ సిటీ, హైదరాబాద్, ఇండియా",
            gallery_title: "మధుర జ్ఞాపకాలు",
            gallery_subtitle: "మా వివాహ వేడుకల సన్నాహాలు మరియు కొన్ని చిత్రాలు",
            moment_1: "వివాహ పత్రిక",
            moment_2: "మండప అలంకరణ",
            moment_3: "విందు భోజనం",
            map_section_title: "కళ్యాణ వేదికల మ్యాప్స్",
            map_section_subtitle: "వేడుకల చిరునామా మరియు మ్యాప్",
            tab_muhurtham: "ముహూర్తం వేదిక",
            tab_reception: "రిసెప్షన్ వేదిక",
            muhurtham_card_title: "వీపీఆర్ కన్వెన్షన్ సెంటర్",
            muhurtham_card_address: "కేపీఆర్ కాలనీ, కూకట్‌పల్లి, హైదరాబాద్, తెలంగాణ 500072",
            reception_card_title: "ది గ్రాండ్ ప్యాలెస్ హాల్",
            reception_card_address: "హైటెక్ సిటీ మెయిన్ రోడ్, సైబరాబాద్, హైదరాబాద్, తెలంగాణ 500081",
            get_directions: "దారి తెలుసుకోండి",
            countdown_title: "శుభ ముహూర్త సమయం",
            label_days: "రోజులు",
            label_hours: "గంటలు",
            label_minutes: "నిమిషాలు",
            label_seconds: "సెకన్లు",
            download_btn: "వివాహ పత్రికను డౌన్‌లోడ్ చేసుకోండి (వీడియో)",
            seal_prompt: "✨ తెరిచేందుకు ముద్రపై క్లిక్ చేయండి ✨",
            autoplay_msg: "🎵 సంగీతాన్ని వినడానికి ఎక్కడైనా క్లిక్ చేయండి"
        }
    };

    let currentLanguage = 'en';

    function setLanguage(lang) {
        currentLanguage = lang;
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update language toggle button text
        const langSwitchBtn = document.getElementById('langSwitchBtn');
        if (langSwitchBtn) {
            langSwitchBtn.textContent = lang === 'en' ? 'తెలుగు' : 'English';
        }
    }

    const langSwitchBtn = document.getElementById('langSwitchBtn');
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            const nextLang = currentLanguage === 'en' ? 'te' : 'en';
            setLanguage(nextLang);
        });
    }

    // --- Audio Elements & Core Logic ---
    const bgMusic = document.getElementById('bgMusic');
    const musicControlBtn = document.getElementById('musicControlBtn');
    const autoplayBanner = document.getElementById('autoplay-banner');
    let isMutedByUser = false;
    let isAudioInitialized = false;

    function initAudio() {
        if (!bgMusic || isAudioInitialized) return;
        isAudioInitialized = true;
        bgMusic.currentTime = 5;
        playAudio();
    }

    function playAudio() {
        if (!bgMusic) return;
        bgMusic.play()
            .then(() => {
                if (musicControlBtn) musicControlBtn.classList.add('playing');
                hideAutoplayBanner();
            })
            .catch(error => {
                console.log('Audio autoplay blocked by browser. Showing banner.', error);
                showAutoplayBanner();
                isAudioInitialized = false; // Allow retry on first user interaction
            });
    }

    function pauseAudio() {
        if (!bgMusic) return;
        bgMusic.pause();
        if (musicControlBtn) musicControlBtn.classList.remove('playing');
    }

    function showAutoplayBanner() {
        if (autoplayBanner && !isMutedByUser) {
            autoplayBanner.classList.add('active');
        }
    }

    function hideAutoplayBanner() {
        if (autoplayBanner) {
            autoplayBanner.classList.remove('active');
        }
    }

    // Try immediate autoplay on page load
    setTimeout(() => {
        initAudio();
    }, 100);

    // User gesture listener to bypass browser restrictions
    const userGestures = ['click', 'touchstart', 'scroll', 'keydown'];
    function handleFirstGesture() {
        if (!isAudioInitialized && !isMutedByUser) {
            initAudio();
        }
        // Cleanup listeners
        userGestures.forEach(gesture => {
            document.removeEventListener(gesture, handleFirstGesture);
        });
    }
    userGestures.forEach(gesture => {
        document.addEventListener(gesture, handleFirstGesture, { passive: true });
    });

    // --- 0. Opening Preloader (Envelope) Logic ---
    const preloader = document.getElementById('preloader');
    const openInvitationBtn = document.getElementById('openInvitationBtn');
    
    if (preloader && openInvitationBtn) {
        // Lock body scrolling initially
        document.body.classList.add('preloader-active');
        
        openInvitationBtn.addEventListener('click', (e) => {
            // 1. Mobile Vibration Feedback (Haptic)
            if (navigator.vibrate) {
                navigator.vibrate(100);
            }

            // 2. Ripple effect animation on the seal button
            const ripple = document.createElement('span');
            ripple.classList.add('seal-ripple');
            const rect = openInvitationBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            
            // Mouse/Touch click position relative to button
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            openInvitationBtn.appendChild(ripple);
            
            // Remove ripple element after animation finishes
            setTimeout(() => {
                ripple.remove();
            }, 600);

            // 3. Fade out preloader
            preloader.classList.add('fade-out');
            
            // 4. Ensure music plays (if blocked, try playing immediately here on button gesture)
            if (!isAudioInitialized && !isMutedByUser) {
                initAudio();
            }
            
            // Unlock body scrolling after transition
            setTimeout(() => {
                document.body.classList.remove('preloader-active');
            }, 1000);
        });
    }

    // --- 1. Mobile Hamburger Menu Navigation ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 2. Header Scroll Effect ---
    const mainHeader = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // --- 3. ScrollSpy (Active Navigation Link on Scroll) ---
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- 4. Countdown Timer ---
    // Wedding Date: August 15, 2026, 09:00:00 AM
    const targetDateStr = '2026-08-15T09:00:00';
    const targetDate = new Date(targetDateStr).getTime();

    const countdownDays = document.getElementById('days');
    const countdownHours = document.getElementById('hours');
    const countdownMinutes = document.getElementById('minutes');
    const countdownSeconds = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            // If date is passed, set all to zero
            if (countdownDays) countdownDays.textContent = '00';
            if (countdownHours) countdownHours.textContent = '00';
            if (countdownMinutes) countdownMinutes.textContent = '00';
            if (countdownSeconds) countdownSeconds.textContent = '00';
            
            const countdownTitle = document.querySelector('.countdown-wrapper h3');
            if (countdownTitle) countdownTitle.textContent = 'The Celebration Has Begun!';
            return;
        }

        // Time calculations
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Add leading zero if single digit
        if (countdownDays) countdownDays.textContent = String(days).padStart(2, '0');
        if (countdownHours) countdownHours.textContent = String(hours).padStart(2, '0');
        if (countdownMinutes) countdownMinutes.textContent = String(minutes).padStart(2, '0');
        if (countdownSeconds) countdownSeconds.textContent = String(seconds).padStart(2, '0');
    }

    // Run immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // --- 5. Background Music Player Button Toggle ---
    if (bgMusic && musicControlBtn) {
        musicControlBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering document autoplay listener
            if (bgMusic.paused) {
                isMutedByUser = false;
                if (!isAudioInitialized) {
                    initAudio();
                } else {
                    playAudio();
                }
            } else {
                isMutedByUser = true;
                pauseAudio();
            }
        });
    }

    // --- 6. Lightbox Gallery ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentImgIndex = 0;
    const imagesList = [];

    // Build the images list from HTML grid
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay span').textContent;
        imagesList.push({
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt'),
            caption: caption
        });

        item.addEventListener('click', () => {
            currentImgIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        if (!lightbox) return;
        const currentData = imagesList[currentImgIndex];
        lightboxImg.setAttribute('src', currentData.src);
        lightboxImg.setAttribute('alt', currentData.alt);
        lightboxCaption.textContent = currentData.caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock page scroll
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Unlock page scroll
    }

    function showNextImage() {
        currentImgIndex = (currentImgIndex + 1) % imagesList.length;
        updateLightboxContent();
    }

    function showPrevImage() {
        currentImgIndex = (currentImgIndex - 1 + imagesList.length) % imagesList.length;
        updateLightboxContent();
    }

    function updateLightboxContent() {
        const currentData = imagesList[currentImgIndex];
        lightboxImg.setAttribute('src', currentData.src);
        lightboxImg.setAttribute('alt', currentData.alt);
        lightboxCaption.textContent = currentData.caption;
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

    // Close on clicking outside the content area (lightbox overlay)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation in lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        }
    });

    // --- 7. Venue Map Tab Switcher ---
    const mapTabBtns = document.querySelectorAll('.map-tab-btn');
    const mapTabContents = document.querySelectorAll('.map-tab-content');
    const mapTriggerBtns = document.querySelectorAll('.map-trigger-btn');

    function switchMapTab(targetVenue) {
        mapTabBtns.forEach(btn => {
            if (btn.getAttribute('data-map') === targetVenue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        mapTabContents.forEach(content => {
            if (content.id === `map-content-${targetVenue}`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    if (mapTabBtns.length > 0) {
        mapTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetVenue = btn.getAttribute('data-map');
                switchMapTab(targetVenue);
            });
        });
    }

    if (mapTriggerBtns.length > 0) {
        mapTriggerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetVenue = btn.getAttribute('data-venue');
                switchMapTab(targetVenue);
            });
        });
    }

    // --- 8. Falling Flower Petals Canvas Animation ---
    const canvas = document.getElementById('petals-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let petals = [];
        const maxPetals = 40; // Maintain good performance, especially on mobile

        const colors = [
            'rgba(255, 183, 197, ', // Pink
            'rgba(255, 77, 77, ',   // Red
            'rgba(255, 255, 255, ', // White
            'rgba(255, 235, 59, ',  // Yellow
            'rgba(255, 203, 164, '  // Peach
        ];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Petal {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.size = Math.random() * 8 + 6; // size between 6 and 14
                this.speedY = Math.random() * 1.5 + 1; // speed between 1 and 2.5
                this.speedX = Math.random() * 1 - 0.5; // slight horizontal drift
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.4 + 0.5; // opacity between 0.5 and 0.9
                this.swaySpeed = Math.random() * 0.02 + 0.01;
                this.swayOffset = Math.random() * Math.PI * 2;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.swayOffset) * 0.5;
                this.swayOffset += this.swaySpeed;
                this.rotation += this.rotationSpeed;

                // Reset petal to top if it goes off screen
                if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                    this.speedY = Math.random() * 1.5 + 1;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.opacity = Math.random() * 0.4 + 0.5;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                
                // Draw petal path (oval leaf shape with pointed tip)
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.quadraticCurveTo(this.size * 0.5, -this.size * 0.5, this.size, 0);
                ctx.quadraticCurveTo(this.size * 0.5, this.size * 0.5, 0, 0);
                
                ctx.fillStyle = this.colorPrefix + this.opacity + ')';
                ctx.fill();
                ctx.restore();
            }
        }

        // Initialize petals
        function initPetals() {
            // Respect reduced-motion preferences
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const count = reducedMotion ? 10 : maxPetals;
            petals = [];
            for (let i = 0; i < count; i++) {
                petals.push(new Petal());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petals.forEach(petal => {
                petal.update();
                petal.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        initPetals();
        animate();

        // Re-init on reduced motion preference change
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
            initPetals();
        });
    }

});
