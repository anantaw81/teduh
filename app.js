/**
 * TEDUH - Ruang Damai & Kesehatan Mental
 * JavaScript Utama (Refactored Clean Code)
 * 
 * Desain Pola: Modular Namespace & Pemrograman Berorientasi Objek (OOP)
 * Memisahkan tanggung jawab (Separation of Concerns) untuk keterbacaan tinggi.
 */

// ==========================================
// 1. DATA APLIKASI (STABIL & STATIS)
// ==========================================
const APP_DATA = {
    quotes: [
        { text: "Kemarin saya pintar, jadi saya ingin mengubah dunia. Hari ini saya bijaksana, jadi saya mengubah diri saya sendiri.", author: "Rumi" },
        { text: "Jangan biarkan hari ini merusak kedamaian pikiran Anda. Badai pasti berlalu, begitu pula awan mendung di hati Anda.", author: "Anonim" },
        { text: "Anda tidak harus mengendalikan pikiran Anda. Anda hanya harus berhenti membiarkan pikiran Anda mengendalikan Anda.", author: "Dan Millman" },
        { text: "Luka adalah tempat di mana cahaya memasuki Anda.", author: "Rumi" },
        { text: "Tidak apa-apa untuk merasa lelah. Tidak apa-apa untuk menangis. Yang paling penting adalah Anda tidak menyerah pada diri sendiri.", author: "Buku Teduh" },
        { text: "Kesulitan sering kali mempersiapkan orang biasa untuk nasib yang luar biasa.", author: "C.S. Lewis" },
        { text: "Kesehatan mental Anda lebih penting daripada karier, uang, ekspektasi orang lain, atau opini publik. Jaga diri Anda terlebih dahulu.", author: "Dr. Rachel Naik" },
        { text: "Tarik napas hari ini dengan rasa syukur. Embuskan penyesalan masa lalu dan kekhawatiran masa depan. Hiduplah di detik ini.", author: "Thich Nhat Hanh" },
        { text: "Kamu berharga bukan karena apa yang kamu capai, melainkan karena jiwamu yang unik dan ada di dunia ini.", author: "Loving the Imperfect" },
        { text: "Di tengah musim dingin, akhirnya saya mengetahui bahwa di dalam diri saya ada musim panas yang tak terkalahkan.", author: "Albert Camus" }
    ],
    stories: [
        {
            id: "story-star",
            title: "Melihat Bintang di Tengah Malam",
            category: "Penerimaan Diri",
            readTime: "3 mnt membaca",
            excerpt: "Kisah tentang seorang pemuda yang belajar menemukan keindahan dan harapan tersembunyi di masa-masa tergelap hidupnya.",
            content: `
                <p>Dulu, Rian menganggap malam hari sebagai musuh terbesarnya. Di dalam kamarnya yang sunyi, pikiran-pikiran cemas dan rasa hampa selalu datang menyerangnya tanpa ampun. Depresi membuatnya merasa seperti sedang tenggelam di lautan hitam tanpa ujung.</p>
                <p>Suatu malam, ketika kepalanya terasa sangat penuh, Rian memutuskan untuk berjalan ke luar rumah dan duduk di teras halaman belakang. Dia mematikan semua lampu teras. Awalnya, semuanya tampak sangat gelap gulita. Dia tidak bisa melihat apa-apa.</p>
                <blockquote>"Dalam kegelapan yang pekat, bintang-bintang yang selama ini tersembunyi justru bersinar paling terang."</blockquote>
                <p>Namun perlahan-lahan, ketika matanya mulai menyesuaikan diri dengan kegelapan, Rian mendongak ke atas langit. Malam itu sangat cerah. Ribuan bintang kecil bertaburan, berkilau dengan sangat indah. Rian terpaku. Dia baru menyadari bahwa bintang-bintang yang indah itu selalu ada di sana, namun selama ini mereka tidak terlihat karena terangnya lampu perkotaan.</p>
                <p>Di saat itulah sebuah kesadaran menyentuh hatinya: kegelapan bukanlah sesuatu yang selalu harus ditakuti. Terkadang, kegelapan adalah satu-satunya kondisi yang memungkinkan kita untuk melihat cahaya-cahaya kecil harapan yang selama ini terabaikan. Perjalanan pemulihan jiwanya pun dimulai dari sana—bukan dengan memaksa malam menjadi siang secara instan, melainkan belajar menerima malam, dan mencari bintang di dalamnya.</p>
            `
        },
        {
            id: "story-kintsugi",
            title: "Seni Menyusun Pecahan Kaca",
            category: "Kintsugi & Pemulihan",
            readTime: "2 mnt membaca",
            excerpt: "Memahami filosofi Kintsugi Jepang, di mana mangkuk yang pecah direkatkan kembali dengan emas, membuatnya lebih berharga dari sebelumnya.",
            content: `
                <p>Seorang pengrajin keramik di Kyoto bernama Takashi memiliki sebuah mangkuk teh kesayangan. Suatu hari, mangkuk itu terjatuh dan pecah menjadi beberapa bagian. Takashi sangat sedih. Asistennya menyarankan untuk membuang pecahan tersebut karena sudah tidak berguna.</p>
                <p>Namun, Takashi menolak. Dia mengambil kuas halus, lem alami, dan bubuk emas murni. Dengan penuh ketelitian, dia menyatukan kembali kepingan-kepingan tanah liat itu. Garis-garis retakan di mangkuk tersebut diisi dengan cairan emas berkilau.</p>
                <blockquote>"Keretakan kita bukanlah kelemahan yang harus disembunyikan, melainkan sejarah kekuatan kita."</blockquote>
                <p>Ketika selesai, mangkuk itu tidak lagi mulus seperti dulu. Ada garis-garis emas yang menjalar di permukaannya. Tetapi yang menakjubkan, mangkuk itu kini terlihat jauh lebih indah, memiliki karakter yang kuat, dan nilainya menjadi berkali-kali lipat lebih mahal daripada saat masih utuh.</p>
                <p>Seni ini disebut <i>Kintsugi</i>. Filosofi ini mengajarkan kita tentang kehidupan. Depresi dan rasa sakit sering kali membuat kita merasa 'hancur' atau 'pecah'. Namun, Anda tidak perlu membuang bagian diri Anda yang terluka. Melalui proses penyembuhan diri, penerimaan, dan kasih sayang, retakan-retakan dalam hidup Anda dapat diisi dengan benang-benang emas kekuatan baru. Anda tidak rusak; Anda sedang menjadi mahakarya yang lebih tangguh.</p>
            `
        },
        {
            id: "story-snail",
            title: "Langkah Kecil sang Siput",
            category: "Sabar & Proses",
            readTime: "3 mnt membaca",
            excerpt: "Perjalanan seekor siput mendaki pohon tinggi mengajarkan kita bahwa kemajuan sekecil apa pun adalah kemenangan yang patut dirayakan.",
            content: `
                <p>Di sebuah kebun yang subur, hiduplah seekor siput kecil bernama Sipi. Suatu hari, Sipi mengumumkan kepada hewan-hewan lain bahwa dia berniat mendaki pohon beringin raksasa di sudut kebun untuk memakan buah ceri hutan yang manis di puncaknya.</p>
                <p>Burung pipit menertawakannya, "Hei Sipi! Dengan tubuhmu yang lambat itu, musim dingin akan tiba sebelum kamu sampai ke dahan pertama!" Katak juga menyahut, "Kamu membuang waktu saja, perjalanan itu terlalu jauh untuk makhluk sekecilmu."</p>
                <blockquote>"Setiap langkah kecil yang konsisten akan membawa Anda melintasi jarak yang paling jauh sekalipun."</blockquote>
                <p>Sipi tidak menghiraukan perkataan mereka. Dia mulai merayap naik perlahan. Satu sentimeter demi satu sentimeter. Setiap malam, dia tidur di sela-sela kulit kayu, lalu melanjutkan perjalanannya kembali saat fajar menyingsing.</p>
                <p>Bagi hewan lain, kemajuan Sipi hampir tidak terlihat. Namun bagi Sipi, setiap harinya adalah pencapaian. Dia merayakan setiap dahan baru yang berhasil dia lewati. Berminggu-minggu berlalu, dan benar saja, ketika Sipi akhirnya sampai di puncak dahan tertinggi, buah-buah ceri di sana sudah matang dengan sempurna. Dia menikmatinya dengan rasa bangga luar biasa.</p>
                <p>Ketika Anda berjuang melawan depresi, bangun dari tempat tidur atau sekadar menyikat gigi terkadang terasa seberat mendaki gunung tinggi. Ingatlah kisah Sipi. Anda tidak perlu langsung berlari. Kemajuan kecil tetaplah kemajuan. Jangan bandingkan kecepatan Anda dengan orang lain. Cukup fokus pada langkah kecil Anda hari ini.</p>
            `
        }
    ],
    books: [
        {
            title: "Filosofi Teras",
            author: "Henry Manampiring",
            bgClass: "cover-bg-blue",
            takeaway: "Fokus pada apa yang bisa kita kendalikan, dan ikhlaskan apa yang di luar kendali kita.",
            desc: "Buku populer yang memperkenalkan filsafat Stoikisme (Stoic) dalam konteks modern Indonesia. Sangat membantu untuk meredakan kekhawatiran berlebih, kecemasan masa depan, dan melatih ketangguhan mental menghadapi masa-masa sulit.",
            searchUrl: "https://www.google.com/search?q=buku+Filosofi+Teras+Henry+Manampiring"
        },
        {
            title: "Loving the Imperfect",
            author: "Lee Kyeong-hye & Haemin Sun",
            bgClass: "cover-bg-sage",
            takeaway: "Cintailah dirimu sendiri terlebih dahulu sebelum mencoba mencintai orang lain.",
            desc: "Kumpulan esai pendek dan kutipan puitis yang menyejukkan hati. Buku ini menuntun pembaca untuk berdamai dengan kekurangan diri, belajar memaafkan kesalahan masa lalu, serta melihat keindahan di tengah ketidaksempurnaan dunia.",
            searchUrl: "https://www.google.com/search?q=buku+Loving+the+Imperfect+Haemin+Sun"
        },
        {
            title: "Alasan untuk Tetap Hidup",
            author: "Matt Haig",
            bgClass: "cover-bg-orange",
            takeaway: "Depresi berbohong padamu bahwa tidak ada masa depan. Tapi masa depan itu ada.",
            desc: "Memoar jujur dan menyentuh tentang perjuangan Matt Haig melewati depresi klinis parah hingga ingin mengakhiri hidupnya. Buku ini menjabarkan bagaimana dia belajar bertahan hidup perlahan-lahan dan menemukan kembali arti kebahagiaan.",
            searchUrl: "https://www.google.com/search?q=buku+Alasan+untuk+Tetap+Hidup+Matt+Haig"
        }
    ]
};

// ==========================================
// 2. LAYANAN PENYIMPANAN DATA (LOCAL STORAGE)
// ==========================================
const StorageService = {
    fetch(key, defaultValue) {
        try {
            const rawData = localStorage.getItem(key);
            return rawData ? JSON.parse(rawData) : defaultValue;
        } catch (error) {
            console.error(`Gagal memuat kunci "${key}" dari localStorage:`, error);
            return defaultValue;
        }
    },
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error(`Gagal menyimpan kunci "${key}" ke localStorage:`, error);
            return false;
        }
    }
};

// ==========================================
// 3. UTILITAS ANTARMUKA PENGGUNA (UI UTILS)
// ==========================================
const UIUtils = {
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconName = type === 'success' ? 'check-circle' : type === 'heart' ? 'heart' : 'info';
        toast.innerHTML = `
            <i data-lucide="${iconName}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);
        if (window.lucide) window.lucide.createIcons();

        // Animasi keluar setelah 3 detik
        setTimeout(() => {
            toast.style.animation = 'toastExit 0.35s forwards';
            toast.addEventListener('animationend', () => toast.remove());
        }, 3000);
    },

    updateGreeting() {
        const hours = new Date().getHours();
        const mainGreeting = document.getElementById('main-greeting');
        const timeBadge = document.getElementById('time-badge');
        
        let message = "";
        let badge = "";

        if (hours >= 5 && hours < 11) {
            message = "Tarik napas dalam-dalam, mari sambut pagi dengan tenang.";
            badge = "Selamat Pagi";
        } else if (hours >= 11 && hours < 15) {
            message = "Di tengah kesibukan siang ini, luangkan waktu untuk rileks.";
            badge = "Selamat Siang";
        } else if (hours >= 15 && hours < 18) {
            message = "Sore hari yang teduh, tenangkan pikiran Anda sejenak.";
            badge = "Selamat Sore";
        } else {
            message = "Malam hari yang sunyi, Anda aman dan berharga di sini.";
            badge = "Selamat Malam";
        }

        if (mainGreeting) mainGreeting.innerHTML = message.replace(", ", ", <br>");
        if (timeBadge) timeBadge.textContent = badge;
    }
};

// ==========================================
// 4. PENGATUR TEMA TAMPILAN (THEME)
// ==========================================
class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        this.currentTheme = StorageService.fetch('theme', 'dark');
    }

    init() {
        if (!this.toggleBtn) return;
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateIcon();

        this.toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        StorageService.save('theme', newTheme);
        this.currentTheme = newTheme;
        this.updateIcon();
        
        const label = newTheme === 'dark' ? 'Gelap' : 'Terang';
        UIUtils.showToast(`Tema diubah ke ${label}.`, 'info');
    }

    updateIcon() {
        if (!this.themeIcon) return;
        const iconName = this.currentTheme === 'dark' ? 'sun' : 'moon';
        this.themeIcon.setAttribute('data-lucide', iconName);
        if (window.lucide) window.lucide.createIcons();
    }
}

// ==========================================
// 5. PANDUAN NAVIGASI SPA
// ==========================================
class NavigationManager {
    constructor(defaultTab = 'home') {
        this.activeTab = defaultTab;
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.content-section');
        this.logo = document.getElementById('logo-button');
        
        // Elemen-elemen tombol beranda
        this.btnBreathing = document.getElementById('hero-start-breathing');
        this.btnQuotes = document.getElementById('hero-read-quote');
        this.featureCards = document.querySelectorAll('.feature-card.clickable');
    }

    init(onTabChange) {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const target = link.getAttribute('data-tab');
                this.navigate(target, onTabChange);
            });
        });

        if (this.logo) {
            this.logo.addEventListener('click', () => this.navigate('home', onTabChange));
        }

        if (this.btnBreathing) {
            this.btnBreathing.addEventListener('click', () => this.navigate('breathing', onTabChange));
        }

        if (this.btnQuotes) {
            this.btnQuotes.addEventListener('click', () => this.navigate('quotes', onTabChange));
        }

        this.featureCards.forEach(card => {
            card.addEventListener('click', () => {
                const target = card.getAttribute('data-target');
                this.navigate(target, onTabChange);
            });
        });
    }

    navigate(tabId, callback) {
        if (tabId === this.activeTab) return;
        this.activeTab = tabId;

        // Perbarui Status Aktif Link Navigasi
        this.navLinks.forEach(link => {
            const isTarget = link.getAttribute('data-tab') === tabId;
            link.classList.toggle('active', isTarget);
        });

        // Sembunyikan Semua Section
        this.sections.forEach(sec => sec.classList.remove('active'));

        // Tampilkan Section Target dengan Animasi Lembut
        const targetSection = document.getElementById(`section-${tabId}`);
        if (targetSection) {
            setTimeout(() => {
                targetSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
        }

        // Jalankan callback spesifik tab jika disediakan
        if (callback) callback(tabId);
    }
}

// ==========================================
// 6. MODUL PENGHASIL SUARA ALAM (WEB AUDIO API)
// ==========================================
class AmbientSoundManager {
    constructor() {
        this.audioCtx = null;
        this.mainVolumeNode = null;
        this.activeType = null; // 'rain', 'ocean', 'forest', atau null
        
        this.soundNodes = { rain: null, ocean: null, forest: null };

        // DOM
        this.widgetToggle = document.getElementById('ambient-sound-toggle');
        this.widgetIcon = document.getElementById('ambient-icon');
        this.dropdown = document.getElementById('ambient-dropdown');
        this.volumeSlider = document.getElementById('ambient-volume');
        this.optButtons = document.querySelectorAll('.ambient-opt-btn');
    }

    init() {
        if (!this.widgetToggle) return;

        this.widgetToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.dropdown.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#ambient-player-widget')) {
                this.dropdown.classList.remove('show');
            }
        });

        this.volumeSlider.addEventListener('input', () => {
            if (this.mainVolumeNode && this.audioCtx) {
                this.mainVolumeNode.gain.setValueAtTime(this.volumeSlider.value, this.audioCtx.currentTime);
            }
        });

        this.optButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-sound');
                this.handleSoundSelect(type, btn);
            });
        });
    }

    lazyInitCtx() {
        if (this.audioCtx) return;
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.mainVolumeNode = this.audioCtx.createGain();
        this.mainVolumeNode.gain.setValueAtTime(this.volumeSlider.value, this.audioCtx.currentTime);
        this.mainVolumeNode.connect(this.audioCtx.destination);
    }

    createNoiseBuffer() {
        const bufferSize = this.audioCtx.sampleRate * 2; // Buffer noise 2 detik
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        return buffer;
    }

    handleSoundSelect(soundType, buttonEl) {
        this.lazyInitCtx();
        
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        if (this.activeType === soundType) {
            this.stopAll();
            buttonEl.classList.remove('playing');
            this.widgetIcon.setAttribute('data-lucide', 'volume-x');
        } else {
            this.stopAll();
            this.optButtons.forEach(b => b.classList.remove('playing'));
            
            this.activeType = soundType;
            buttonEl.classList.add('playing');
            this.widgetIcon.setAttribute('data-lucide', 'volume-2');

            // Jalankan generator audio sintetis
            if (soundType === 'rain') this.playRain();
            else if (soundType === 'ocean') this.playOcean();
            else if (soundType === 'forest') this.playForest();

            UIUtils.showToast(`Memutar audio alami: ${buttonEl.textContent.trim()}`, 'success');
        }
        if (window.lucide) window.lucide.createIcons();
    }

    playRain() {
        const source = this.audioCtx.createBufferSource();
        source.buffer = this.createNoiseBuffer();
        source.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.audioCtx.currentTime);

        const gainNode = this.audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.35, this.audioCtx.currentTime);

        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.mainVolumeNode);

        source.start();
        this.soundNodes.rain = { source, filter, gain: gainNode };
    }

    playOcean() {
        const source = this.audioCtx.createBufferSource();
        source.buffer = this.createNoiseBuffer();
        source.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, this.audioCtx.currentTime);

        const waveGain = this.audioCtx.createGain();
        waveGain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);

        // LFO (Osilator Frekuensi Rendah) 0.08Hz untuk volume gelombang pasang surut
        const lfo = this.audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.08, this.audioCtx.currentTime);

        const lfoGain = this.audioCtx.createGain();
        lfoGain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(waveGain.gain);

        source.connect(filter);
        filter.connect(waveGain);
        waveGain.connect(this.mainVolumeNode);

        lfo.start();
        source.start();

        this.soundNodes.ocean = { source, lfo, filter, gain: waveGain };
    }

    playForest() {
        const source = this.audioCtx.createBufferSource();
        source.buffer = this.createNoiseBuffer();
        source.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.setValueAtTime(3.0, this.audioCtx.currentTime);
        filter.frequency.setValueAtTime(600, this.audioCtx.currentTime);

        // LFO untuk pergerakan angin desau sepoi-sepoi
        const lfo = this.audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.05, this.audioCtx.currentTime);

        const lfoGain = this.audioCtx.createGain();
        lfoGain.gain.setValueAtTime(250, this.audioCtx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        const gainNode = this.audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.15, this.audioCtx.currentTime);

        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.mainVolumeNode);

        lfo.start();
        source.start();

        this.soundNodes.forest = { source, lfo, filter, gain: gainNode };
    }

    stopAll() {
        Object.keys(this.soundNodes).forEach(key => {
            const node = this.soundNodes[key];
            if (node) {
                try {
                    node.source.stop();
                    if (node.lfo) node.lfo.stop();
                } catch (e) {
                    // Penanganan jika node sudah mati
                }
                this.soundNodes[key] = null;
            }
        });
        this.activeType = null;
    }
}

// ==========================================
// 7. PENGELOLA LATIHAN PERNAPASAN (4-4-4-4)
// ==========================================
class BreathingManager {
    constructor() {
        this.interval = null;
        this.state = 'idle'; // 'idle', 'inhale', 'hold1', 'exhale', 'hold2'
        this.secsLeft = 4;
        this.cyclesCompleted = 0;

        // DOM
        this.circleOuter = document.getElementById('breath-circle-outer');
        this.instruction = document.getElementById('breath-instruction');
        this.timer = document.getElementById('breath-timer');
        
        this.btnTrigger = document.getElementById('breath-btn-trigger');
        this.btnText = document.getElementById('breath-btn-text');
        this.playIcon = document.getElementById('breath-play-icon');
        this.btnSetup = document.getElementById('breath-btn-setup');

        this.steps = {
            in: document.getElementById('breath-step-in'),
            hold1: document.getElementById('breath-step-hold1'),
            out: document.getElementById('breath-step-out'),
            hold2: document.getElementById('breath-step-hold2')
        };
    }

    init() {
        if (!this.btnTrigger) return;
        this.btnTrigger.addEventListener('click', () => {
            if (this.state === 'idle') this.start();
            else this.stop();
        });

        if (this.btnSetup) {
            this.btnSetup.addEventListener('click', () => this.stop());
        }
    }

    start() {
        this.state = 'inhale';
        this.secsLeft = 4;
        this.cyclesCompleted = 0;

        this.btnText.textContent = "Hentikan Latihan";
        this.playIcon.setAttribute('data-lucide', 'square');
        if (this.btnSetup) this.btnSetup.style.display = 'inline-flex';
        if (window.lucide) window.lucide.createIcons();

        this.tick();

        this.interval = setInterval(() => {
            this.secsLeft--;
            
            if (this.secsLeft <= 0) {
                this.transitionState();
                if (this.state === 'idle') return; // Menghentikan jika selesai siklus penuh
                this.secsLeft = 4;
            }
            
            this.tick();
        }, 1000);
    }

    transitionState() {
        const nextStates = {
            inhale: 'hold1',
            hold1: 'exhale',
            exhale: 'hold2',
            hold2: 'inhale'
        };

        const oldState = this.state;
        this.state = nextStates[oldState] || 'idle';

        if (oldState === 'hold2' && this.state === 'inhale') {
            this.cyclesCompleted++;
            if (this.cyclesCompleted >= 4) {
                this.stop(true); // Latihan sukses 1 menit
            }
        }
    }

    tick() {
        if (this.state === 'idle') return;

        this.timer.textContent = this.secsLeft.toString().padStart(2, '0');
        
        // Hapus kelas visual lama
        this.circleOuter.className = 'breath-circle-outer';
        Object.values(this.steps).forEach(s => s.classList.remove('active'));

        // Atur status aktif kelas baru
        switch (this.state) {
            case 'inhale':
                this.circleOuter.classList.add('breath-inhale');
                this.instruction.textContent = "Tarik Napas...";
                this.steps.in.classList.add('active');
                break;
            case 'hold1':
                this.circleOuter.classList.add('breath-hold1');
                this.instruction.textContent = "Tahan Napas...";
                this.steps.hold1.classList.add('active');
                break;
            case 'exhale':
                this.circleOuter.classList.add('breath-exhale');
                this.instruction.textContent = "Hembuskan...";
                this.steps.out.classList.add('active');
                break;
            case 'hold2':
                this.circleOuter.classList.add('breath-hold2');
                this.instruction.textContent = "Tahan Kosong...";
                this.steps.hold2.classList.add('active');
                break;
        }
    }

    stop(isCompleted = false) {
        clearInterval(this.interval);
        this.interval = null;
        this.state = 'idle';

        // Reset visual
        this.circleOuter.className = 'breath-circle-outer';
        Object.values(this.steps).forEach(s => s.classList.remove('active'));
        
        this.instruction.textContent = isCompleted ? "Selesai & Tenang" : "Siap untuk Memulai?";
        this.timer.textContent = "00";
        
        this.btnText.textContent = "Mulai Latihan";
        this.playIcon.setAttribute('data-lucide', 'play');
        if (this.btnSetup) this.btnSetup.style.display = 'none';
        if (window.lucide) window.lucide.createIcons();

        if (isCompleted) {
            UIUtils.showToast("Latihan selesai. Semoga pikiranmu menjadi lebih tenang!", "success");
        }
    }
}

// ==========================================
// 8. DEK KARTU KUTIPAN PENDORONG SEMANGAT
// ==========================================
class QuotesManager {
    constructor() {
        this.savedQuotes = StorageService.fetch('saved_quotes', []);
        this.activeQuote = null;

        // DOM
        this.textContainer = document.getElementById('quote-text');
        this.authorContainer = document.getElementById('quote-author');
        this.btnNext = document.getElementById('btn-next');
        this.btnCopy = document.getElementById('quote-btn-copy');
        this.btnFav = document.getElementById('quote-btn-favorite');
        this.savedListEl = document.getElementById('saved-quotes-list');
        this.cardEl = document.getElementById('quote-card');
    }

    init() {
        const nextBtn = document.getElementById('btn-next-quote');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.showRandom());
        }

        if (this.btnCopy) {
            this.btnCopy.addEventListener('click', () => this.copyToClipboard());
        }

        if (this.btnFav) {
            this.btnFav.addEventListener('click', () => this.toggleFavorite());
        }

        this.renderSavedList();
    }

    showRandom() {
        // Cari kutipan yang tidak sama dengan kutipan saat ini
        const pool = APP_DATA.quotes.filter(q => q !== this.activeQuote);
        const rand = Math.floor(Math.random() * pool.length);
        this.activeQuote = pool[rand];

        // Animasi transisi keluar masuk kartu
        if (this.cardEl) {
            this.cardEl.style.opacity = '0';
            this.cardEl.style.transform = 'translateY(8px)';
            
            setTimeout(() => {
                this.textContainer.textContent = `"${this.activeQuote.text}"`;
                this.authorContainer.textContent = this.activeQuote.author;
                this.cardEl.style.opacity = '1';
                this.cardEl.style.transform = 'translateY(0)';
                this.updateHeartIcon();
            }, 250);
        }
    }

    copyToClipboard() {
        if (!this.activeQuote) return;
        const text = `"${this.activeQuote.text}" — ${this.activeQuote.author}`;
        navigator.clipboard.writeText(text)
            .then(() => UIUtils.showToast("Kutipan disalin ke papan klip!", "success"))
            .catch(() => UIUtils.showToast("Gagal menyalin kutipan.", "danger"));
    }

    toggleFavorite() {
        if (!this.activeQuote) return;

        const idx = this.savedQuotes.findIndex(q => q.text === this.activeQuote.text);
        if (idx > -1) {
            this.savedQuotes.splice(idx, 1);
            UIUtils.showToast("Dihapus dari kutipan favorit.", "info");
        } else {
            this.savedQuotes.push(this.activeQuote);
            UIUtils.showToast("Disimpan ke kutipan favorit!", "heart");
        }

        StorageService.save('saved_quotes', this.savedQuotes);
        this.updateHeartIcon();
        this.renderSavedList();
    }

    updateHeartIcon() {
        if (!this.btnFav) return;
        const isFav = this.savedQuotes.some(q => q.text === this.activeQuote.text);
        const icon = this.btnFav.querySelector('i');
        
        if (isFav) {
            icon.setAttribute('data-lucide', 'heart-handshake');
            this.btnFav.classList.add('text-pink');
        } else {
            icon.setAttribute('data-lucide', 'heart');
            this.btnFav.classList.remove('text-pink');
        }
        if (window.lucide) window.lucide.createIcons();
    }

    renderSavedList() {
        if (!this.savedListEl) return;

        if (this.savedQuotes.length === 0) {
            this.savedListEl.innerHTML = `<p class="empty-state">Belum ada kutipan yang disimpan. Klik ikon hati pada kartu untuk menyimpan.</p>`;
            return;
        }

        this.savedListEl.innerHTML = '';
        this.savedQuotes.forEach((q, i) => {
            const row = document.createElement('div');
            row.className = 'saved-quote-item';
            row.innerHTML = `
                <div class="saved-quote-item-text">
                    <p>"${q.text}"</p>
                    <span>${q.author}</span>
                </div>
                <button class="saved-quote-delete-btn" data-index="${i}" title="Hapus">
                    <i data-lucide="trash-2"></i>
                </button>
            `;
            this.savedListEl.appendChild(row);
        });

        if (window.lucide) window.lucide.createIcons();

        // Listener Hapus Item Tertentu
        this.savedListEl.querySelectorAll('.saved-quote-delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                this.savedQuotes.splice(idx, 1);
                StorageService.save('saved_quotes', this.savedQuotes);
                this.renderSavedList();
                this.updateHeartIcon();
                UIUtils.showToast("Kutipan favorit dihapus.", "info");
            });
        });
    }
}

// ==========================================
// 9. MODAL MEMBACA CERITA (STORIES READER)
// ==========================================
class StoriesManager {
    constructor() {
        this.grid = document.getElementById('stories-grid');
        this.modal = document.getElementById('story-modal');
        this.closeBtn = document.getElementById('modal-close-btn');
        this.closeAction = document.getElementById('modal-close-action');
        this.scrollContainer = document.querySelector('.modal-scroll-content');
        this.progressBar = document.getElementById('modal-progress-bar');
    }

    init() {
        if (!this.grid) return;
        this.renderGrid();
        this.bindEvents();
    }

    renderGrid() {
        this.grid.innerHTML = '';
        APP_DATA.stories.forEach(story => {
            const card = document.createElement('div');
            card.className = 'glass-card story-card';
            card.innerHTML = `
                <div class="story-header">
                    <div class="story-meta">
                        <span class="badge">${story.category}</span>
                        <span><i data-lucide="clock"></i> ${story.readTime}</span>
                    </div>
                    <h3>${story.title}</h3>
                    <p class="story-excerpt">${story.excerpt}</p>
                </div>
                <button class="btn btn-outline btn-block btn-read-story" data-id="${story.id}">
                    <i data-lucide="book-open"></i> Baca Cerita
                </button>
            `;
            this.grid.appendChild(card);
        });
        if (window.lucide) window.lucide.createIcons();
    }

    bindEvents() {
        // Klik Baca Cerita
        this.grid.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-read-story');
            if (btn) {
                const id = btn.getAttribute('data-id');
                const story = APP_DATA.stories.find(s => s.id === id);
                if (story) this.openReader(story);
            }
        });

        // Event Tutup Modal
        this.closeBtn.addEventListener('click', () => this.closeReader());
        this.closeAction.addEventListener('click', () => this.closeReader());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeReader();
        });

        // Progress Bar saat scroll modal
        this.scrollContainer.addEventListener('scroll', () => {
            const available = this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight;
            if (available > 0) {
                const pct = (this.scrollContainer.scrollTop / available) * 100;
                this.progressBar.style.width = `${pct}%`;
            }
        });
    }

    openReader(story) {
        document.getElementById('modal-story-title').textContent = story.title;
        document.getElementById('modal-story-category').textContent = story.category;
        document.getElementById('modal-story-read-time').textContent = story.readTime;
        document.getElementById('modal-story-body').innerHTML = story.content;
        
        this.progressBar.style.width = '0%';
        this.scrollContainer.scrollTop = 0;
        
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Kunci scroll halaman utama
        UIUtils.showToast(`Membaca: ${story.title}`, 'info');
    }

    closeReader() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// ==========================================
// 10. JURNAL HARIAN & DIAGRAM ANALISIS MOOD
// ==========================================
class JournalManager {
    constructor() {
        this.entries = StorageService.fetch('journal_entries', []);
        
        // DOM
        this.form = document.getElementById('journal-form');
        this.titleInput = document.getElementById('journal-title');
        this.contentInput = document.getElementById('journal-content');
        this.moodInput = document.getElementById('selected-mood');
        
        this.moodButtons = document.querySelectorAll('.mood-btn');
        this.listEl = document.getElementById('journal-list');
        this.statsEl = document.getElementById('mood-stats-visual');
    }

    init() {
        if (!this.form) return;

        // Pemilih Mood
        this.moodButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.moodButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.moodInput.value = btn.getAttribute('data-mood');
            });
        });

        // Submit Catatan
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        this.renderHistory();
        this.renderAnalytics();
    }

    handleSubmit(e) {
        e.preventDefault();

        const title = this.titleInput.value.trim();
        const content = this.contentInput.value.trim();
        const mood = this.moodInput.value;

        if (!mood) {
            UIUtils.showToast("Harap pilih ikon suasana hatimu terlebih dahulu.", "info");
            return;
        }

        const newEntry = {
            id: 'journal-' + Date.now(),
            date: new Date().toISOString(),
            title: title || 'Refleksi Teduh',
            content: content,
            mood: mood
        };

        this.entries.unshift(newEntry);
        StorageService.save('journal_entries', this.entries);

        // Reset
        this.form.reset();
        this.moodButtons.forEach(b => b.classList.remove('selected'));
        this.moodInput.value = '';

        this.renderHistory();
        this.renderAnalytics();
        
        UIUtils.showToast("Catatan tersimpan dengan aman.", "success");
    }

    renderHistory() {
        if (!this.listEl) return;

        if (this.entries.length === 0) {
            this.listEl.innerHTML = `<p class="empty-state">Belum ada catatan refleksi. Mulailah menulis untuk merilis beban pikiranmu.</p>`;
            return;
        }

        const moodEmojis = { tenang: '😌', lelah: '🥱', cemas: '😰', sedih: '😢', senang: '😊' };

        this.listEl.innerHTML = '';
        this.entries.forEach(entry => {
            const item = document.createElement('div');
            item.className = 'journal-item';
            
            // Format Tanggal
            const dateStr = new Date(entry.date).toLocaleDateString('id-ID', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });

            item.innerHTML = `
                <div class="journal-item-header">
                    <div class="journal-item-meta">
                        <span class="journal-item-title">${entry.title}</span>
                        <span class="journal-item-date">${dateStr}</span>
                    </div>
                    <span class="journal-item-mood mood-badge-${entry.mood}">
                        ${moodEmojis[entry.mood] || '📝'} ${entry.mood.toUpperCase()}
                    </span>
                </div>
                <div class="journal-item-content">${entry.content}</div>
                <div class="journal-item-footer">
                    <button class="saved-quote-delete-btn btn-delete-journal" data-id="${entry.id}" title="Hapus Catatan">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            `;
            this.listEl.appendChild(item);
        });

        if (window.lucide) window.lucide.createIcons();

        // Bind delete buttons
        this.listEl.querySelectorAll('.btn-delete-journal').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                this.entries = this.entries.filter(e => e.id !== id);
                StorageService.save('journal_entries', this.entries);
                this.renderHistory();
                this.renderAnalytics();
                UIUtils.showToast("Catatan dihapus.", "info");
            });
        });
    }

    renderAnalytics() {
        if (!this.statsEl) return;

        if (this.entries.length === 0) {
            this.statsEl.innerHTML = `<p class="empty-state">Tulis entri jurnal pertamamu untuk melihat pola suasana hati.</p>`;
            return;
        }

        // Hitung frekuensi masing-masing mood
        const tallies = { tenang: 0, lelah: 0, cemas: 0, sedih: 0, senang: 0 };
        const emojis = { tenang: '😌', lelah: '🥱', cemas: '😰', sedih: '😢', senang: '😊' };
        
        this.entries.forEach(e => {
            if (tallies[e.mood] !== undefined) tallies[e.mood]++;
        });

        const maxCount = Math.max(...Object.values(tallies));

        this.statsEl.innerHTML = '';
        Object.keys(tallies).forEach(mood => {
            const count = tallies[mood];
            const heightPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const barHeight = count > 0 ? Math.max(heightPct, 8) : 4; // Minimal tinggi 8px untuk bar yang bernilai > 0

            const item = document.createElement('div');
            item.className = 'mood-stat-bar-wrapper';
            item.innerHTML = `
                <div class="mood-stat-bar ${mood}" style="height: ${barHeight}px" title="${count} Catatan"></div>
                <span class="mood-stat-label">${emojis[mood]}<br>${count}</span>
            `;
            this.statsEl.appendChild(item);
        });
    }
}

// ==========================================
// 11. REKOMENDASI BUKU (SHELF RENDERING)
// ==========================================
const BooksRenderer = {
    render() {
        const grid = document.getElementById('books-grid');
        if (!grid) return;

        grid.innerHTML = '';
        APP_DATA.books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'glass-card book-card';
            card.innerHTML = `
                <div class="book-cover-mock ${book.bgClass}">
                    <h4>${book.title}</h4>
                    <span class="cover-author">${book.author}</span>
                </div>
                <div class="book-details">
                    <div>
                        <h3>${book.title}</h3>
                        <p class="book-author">Karya: ${book.author}</p>
                        <p class="book-desc">${book.desc}</p>
                    </div>
                    <div class="book-takeaway">
                        "${book.takeaway}"
                    </div>
                    <a href="${book.searchUrl}" target="_blank" rel="noopener noreferrer" class="book-search-link">
                        Cari Buku ini <i data-lucide="external-link"></i>
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
        if (window.lucide) window.lucide.createIcons();
    }
};

// ==========================================
// 12. INITIALIZATION (DOM CONTENT LOADED)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Salam & Jam Penyambutan Harian
    UIUtils.updateGreeting();
    setInterval(() => UIUtils.updateGreeting(), 60000);

    // 2. Inisialisasi Tema
    const theme = new ThemeManager();
    theme.init();

    // 3. Inisialisasi Fitur
    const sound = new AmbientSoundManager();
    sound.init();

    const breathing = new BreathingManager();
    breathing.init();

    const quotes = new QuotesManager();
    quotes.init();

    const stories = new StoriesManager();
    stories.init();

    const journal = new JournalManager();
    journal.init();

    BooksRenderer.render();

    // 4. Inisialisasi Navigasi SPA
    const nav = new NavigationManager();
    nav.init((targetTab) => {
        if (targetTab === 'quotes') {
            quotes.showRandom();
        }
        // Menghentikan latihan napas jika meninggalkan tab breathing
        if (targetTab !== 'breathing' && breathing.state !== 'idle') {
            breathing.stop();
        }
    });

    // 5. Build Ikon Lucide untuk pertama kali
    if (window.lucide) window.lucide.createIcons();

    // Welcome message toast
    setTimeout(() => {
        UIUtils.showToast("Selamat datang di Teduh. Tarik napas dalam-dalam sejenak.", "info");
    }, 800);
});
