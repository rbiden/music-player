var btnPlay = document.querySelector('.fa-2xl');
var joan = document.querySelector('.joan');
var conan = document.querySelector('.conan-gray');
var the_1975 = document.querySelector('.the_1975');
var main = document.querySelector('main');
var prev = document.querySelector('.fa-angle-left');
var next = document.querySelector('.fa-angle-right');
var articles = document.querySelectorAll('article');
var article = document.getElementsByTagName('article');
var songs = document.getElementsByTagName('audio');
var runtime = document.querySelector('#runtime');
var count = 0;

var red = "rgb(167, 60, 60)";
var pink = "rgb(238, 177, 177)";
var blue = "rgb(27, 112, 172)";

displaySong(count);

setInterval(function() {
    runtime.value = songs[count].currentTime;

    if (songs[count].currentTime >= 100) {
        songs[count].pause();
    }
}, 1000);

runtime.addEventListener('change', function() {
    songs[count].currentTime = this.value;
})

prev.addEventListener('click', function() {
    songs[count].currentTime = 0;
    songs[count].pause();
    count = count - 1;
    if (count < 0) {
        count = 2;
    }
    
    displaySong(count);
})

next.addEventListener('click', function() {
    songs[count].currentTime = 0;
    songs[count].pause();
    count = count + 1;
    if (count > songs.length - 1) {
        count = 0;
    }

    displaySong(count);
})

btnPlay.addEventListener('click', function() {
    if (this.classList.contains('fa-pause')) {
        this.classList.remove('fa-pause');
        this.classList.add('fa-play');
        songs[count].pause();
    } else {
        this.classList.remove('fa-play');
        this.classList.add('fa-pause');
        songs[count].play();
    }
})

function displaySong(count) {
    btnPlay.classList.remove('fa-pause');
    btnPlay.classList.remove('fa-play');
    btnPlay.classList.add('fa-play');

    articles.forEach(article => {
        article.style.display = 'none';
    });
    
    article[count].style.display = 'block';

    if (conan.style.display != 'none') {
        main.style.backgroundColor = red;
    } 
    else if (joan.style.display != 'none') {
        main.style.backgroundColor = pink;
    } 
    else if (the_1975.style.display != 'none') {
        main.style.backgroundColor = blue;
    }

    
}