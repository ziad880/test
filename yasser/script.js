// عناصر التحكم بالمشغل
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const repeatBtn = document.getElementById('repeat');
const shuffleBtn = document.getElementById('shuffle');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const albumCover = document.getElementById('album-cover');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const totalTimeElem = document.getElementById('total-time');
const slider = document.querySelector('.song-slider-container');

let isDown = false;
let startX;
let scrollLeft;

// أحداث السحب للشرائح
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // إذا لم يكن الماوس مضغوطًا، لا تفعل شيء
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // سرعة التمرير
    slider.scrollLeft = scrollLeft - walk;
});

// قائمة الأغاني
const songs = [
    { title: 'الفاتحة', file: 'voice/001.mp3' },
    { title: 'البقرة', file: 'voice/002.mp3' },
    { title: 'آل عمران', file: 'voice/003.mp3' },
    { title: 'النساء', file: 'voice/004.mp3' },
    { title: 'المائدة', file: 'voice/005.mp3' },
    { title: 'الأنعام', file: 'voice/006.mp3' },
    { title: 'الأعراف', file: 'voice/007.mp3' },
    { title: 'الأنفال', file: 'voice/008.mp3' },
    { title: 'التوبة', file: 'voice/009.mp3' },
    { title: 'يونس', file: 'voice/010.mp3' },
    { title: 'هود', file: 'voice/011.mp3' },
    { title: 'يوسف', file: 'voice/012.mp3' },
    { title: 'الرعد', file: 'voice/013.mp3' },
    { title: 'إبراهيم', file: 'voice/014.mp3' },
    { title: 'الحجر', file: 'voice/015.mp3' },
    { title: 'النحل', file: 'voice/016.mp3' },
    { title: 'الإسراء', file: 'voice/017.mp3' },
    { title: 'الكهف', file: 'voice/018.mp3' },
    { title: 'مريم', file: 'voice/019.mp3' },
    { title: 'طه', file: 'voice/020.mp3' },
    { title: 'الأنبياء', file: 'voice/021.mp3' },
    { title: 'الحج', file: 'voice/022.mp3' },
    { title: 'المؤمنون', file: 'voice/023.mp3' },
    { title: 'النور', file: 'voice/024.mp3' },
    { title: 'الفرقان', file: 'voice/025.mp3' },
    { title: 'الشعراء', file: 'voice/026.mp3' },
    { title: 'النمل', file: 'voice/027.mp3' },
    { title: 'القصص', file: 'voice/028.mp3' },
    { title: 'العنكبوت', file: 'voice/029.mp3' },
    { title: 'الروم', file: 'voice/030.mp3' },
    { title: 'لقمان', file: 'voice/031.mp3' },
    { title: 'السجدة', file: 'voice/032.mp3' },
    { title: 'الأحزاب', file: 'voice/033.mp3' },
    { title: 'سبأ', file: 'voice/034.mp3' },
    { title: 'فاطر', file: 'voice/035.mp3' },
    { title: 'يس', file: 'voice/036.mp3' },
    { title: 'الصافات', file: 'voice/037.mp3' },
    { title: 'ص', file: 'voice/038.mp3' },
    { title: 'الزمر', file: 'voice/039.mp3' },
    { title: 'غافر', file: 'voice/040.mp3' },
    { title: 'فصلت', file: 'voice/041.mp3' },
    { title: 'الشورى', file: 'voice/042.mp3' },
    { title: 'الزخرف', file: 'voice/043.mp3' },
    { title: 'الدخان', file: 'voice/044.mp3' },
    { title: 'الجاثية', file: 'voice/045.mp3' },
    { title: 'الأحقاف', file: 'voice/046.mp3' },
    { title: 'محمد', file: 'voice/047.mp3' },
    { title: 'الفتح', file: 'voice/048.mp3' },
    { title: 'الحجرات', file: 'voice/049.mp3' },
    { title: 'ق', file: 'voice/050.mp3' },
    { title: 'الذاريات', file: 'voice/051.mp3' },
    { title: 'الطور', file: 'voice/052.mp3' },
    { title: 'النجم', file: 'voice/053.mp3' },
    { title: 'القمر', file: 'voice/054.mp3' },
    { title: 'الرحمن', file: 'voice/055.mp3' },
    { title: 'الواقعة', file: 'voice/056.mp3' },
    { title: 'الحديد', file: 'voice/057.mp3' },
    { title: 'المجادلة', file: 'voice/058.mp3' },
    { title: 'الحشر', file: 'voice/059.mp3' },
    { title: 'الممتحنة', file: 'voice/060.mp3' },
    { title: 'الصف', file: 'voice/061.mp3' },
    { title: 'الجمعة', file: 'voice/062.mp3' },
    { title: 'المنافقون', file: 'voice/063.mp3' },
    { title: 'التغابن', file: 'voice/064.mp3' },
    { title: 'الطلاق', file: 'voice/065.mp3' },
    { title: 'التحريم', file: 'voice/066.mp3' },
    { title: 'الملك', file: 'voice/067.mp3' },
    { title: 'القلم', file: 'voice/068.mp3' },
    { title: 'الحاقة', file: 'voice/069.mp3' },
    { title: 'المعارج', file: 'voice/070.mp3' },
    { title: 'نوح', file: 'voice/071.mp3' },
    { title: 'الجن', file: 'voice/072.mp3' },
    { title: 'المزمل', file: 'voice/073.mp3' },
    { title: 'المدثر', file: 'voice/074.mp3' },
    { title: 'القيامة', file: 'voice/075.mp3' },
    { title: 'الإنسان', file: 'voice/076.mp3' },
    { title: 'المرسلات', file: 'voice/077.mp3' },
    { title: 'النبأ', file: 'voice/078.mp3' },
    { title: 'النازعات', file: 'voice/079.mp3' },
    { title: 'عبس', file: 'voice/080.mp3' },
    { title: 'التكوير', file: 'voice/081.mp3' },
    { title: 'الإنفطار', file: 'voice/082.mp3' },
    { title: 'المطففين', file: 'voice/083.mp3' },
    { title: 'الإنشقاق', file: 'voice/084.mp3' },
    { title: 'البروج', file: 'voice/085.mp3' },
    { title: 'الطارق', file: 'voice/086.mp3' },
    { title: 'الأعلى', file: 'voice/087.mp3' },
    { title: 'الغاشية', file: 'voice/088.mp3' },
    { title: 'الفجر', file: 'voice/089.mp3' },
    { title: 'البلد', file: 'voice/090.mp3' },
    { title: 'الشمس', file: 'voice/091.mp3' },
    { title: 'الليل', file: 'voice/092.mp3' },
    { title: 'الضحى', file: 'voice/093.mp3' },
    { title: 'الشرح', file: 'voice/094.mp3' },
    { title: 'التين', file: 'voice/095.mp3' },
    { title: 'العلق', file: 'voice/096.mp3' },
    { title: 'القدير', file: 'voice/097.mp3' },
    { title: 'الزلزلة', file: 'voice/098.mp3' },
    { title: 'العاديات', file: 'voice/099.mp3' },
    { title: 'القارعة', file: 'voice/100.mp3' },
    { title: 'التكاثر', file: 'voice/101.mp3' },
    { title: 'العصر', file: 'voice/102.mp3' },
    { title: 'الهمزة', file: 'voice/103.mp3' },
    { title: 'الفيل', file: 'voice/104.mp3' },
    { title: 'قريش', file: 'voice/105.mp3' },
    { title: 'الماعون', file: 'voice/106.mp3' },
    { title: 'الكافرون', file: 'voice/107.mp3' },
    { title: 'النصر', file: 'voice/108.mp3' },
    { title: 'المسد', file: 'voice/109.mp3' },
    { title: 'الإخلاص', file: 'voice/110.mp3' },
    { title: 'الفلق', file: 'voice/111.mp3' },
    { title: 'الناس', file: 'voice/112.mp3' },
];

// المتغيرات
let currentSongIndex = 0;
let isPlaying = false;
let isRepeating = false;
let isShuffling = false;

// تحميل الأغنية الأولى عند بدء التشغيل
loadSong(songs[currentSongIndex]);

// تشغيل / إيقاف
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = 'تشغيل';
    } else {
        audio.play();
        playBtn.textContent = 'إيقاف';
    }
    isPlaying = !isPlaying;
}

// تحميل الأغنية
function loadSong(song) {
    title.textContent = song.title;
    audio.src = song.file;
    albumCover.src = 'cover.jpg'; // يجب وضع صورة الغلاف المناسبة هنا

    if (isPlaying) {
        audio.play();
    }
}

// الانتقال للأغنية السابقة
function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
}

// الانتقال للأغنية التالية
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
}

// تكرار الأغنية
function toggleRepeat() {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle('active', isRepeating);
}

// تبديل الترتيب
function toggleShuffle() {
    isShuffling = !isShuffling;
    shuffleBtn.classList.toggle('active', isShuffling);
}

// تحديث الوقت
function updateTime() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    
    currentTimeElem.textContent = formatTime(currentTime);
    totalTimeElem.textContent = formatTime(duration);

    progress.style.width = `${(currentTime / duration) * 100}%`;
}

// تنسيق الوقت
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// التعامل مع النقر على شريط التقدم
progressContainer.addEventListener('click', (e) => {
    const { offsetX } = e;
    const width = progressContainer.clientWidth;
    const duration = audio.duration;
    audio.currentTime = (offsetX / width) * duration;
});

// أحداث التشغيل والإيقاف
audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('ended', () => {
    if (isRepeating) {
        audio.currentTime = 0;
        audio.play();
    } else if (isShuffling) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
        loadSong(songs[currentSongIndex]);
    } else {
        nextSong();
    }
});

playBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
repeatBtn.addEventListener('click', toggleRepeat);
shuffleBtn.addEventListener('click', toggleShuffle);
