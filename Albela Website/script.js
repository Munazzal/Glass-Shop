const home = document.getElementById('home');
const about = document.getElementById('about');
const gallery = document.getElementById('gallery');
const contact = document.getElementById('contact');
const other = document.getElementById('other');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
var page = 'home';
var section = 1;
window.onload = setup();
function setup() {
   page ='home'; 
   section = 1;
    home.style.textDecoration = 'underline';
    about.style.textDecoration = 'none';
    gallery.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
    other.style.textDecoration = 'none';
        one.style.display = 'flex';
        two.style.display = 'none';
        three.style.display = 'none';
        four.style.display = 'none';
        five.style.display = 'none';
    }
home.addEventListener('click', function() {
    if(page = 'home' || page == 'about' || page == 'gallery' || page == 'contact' || page == 'other') {
        page = 'home';
        section = 1;
    home.style.textDecoration = 'underline';
    about.style.textDecoration = 'none';
    gallery.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
    other.style.textDecoration = 'none';
    }
    if (section = 1) {
        one.style.display = 'flex';
        two.style.display = 'none';
        three.style.display = 'none';
        four.style.display = 'none';
        five.style.display = 'none';
    }
})
about.addEventListener('click', function() {
    if(page = 'home' || page == 'about' || page == 'gallery' || page == 'contact' || page == 'other') {
        page = 'about';
        section = 2;
    about.style.textDecoration = 'underline';
    home.style.textDecoration = 'none';
    gallery.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
    other.style.textDecoration = 'none';
    }
    if (section = 2) {
        two.style.display = 'flex'; 
        one.style.display = 'none';
        three.style.display = 'none';
        four.style.display = 'none';
        five.style.display = 'none';
    }
})
gallery.addEventListener('click', function() {
    if(page = 'home' || page == 'about' || page == 'gallery' || page == 'contact' || page == 'other') {
        page = 'gallery';
        section = 3;
    gallery.style.textDecoration = 'underline';
    about.style.textDecoration = 'none';
    home.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
    other.style.textDecoration = 'none';
    if (section = 3) {
        three.style.display = 'flex';
        two.style.display = 'none';
        one.style.display = 'none'; 
        four.style.display = 'none';
        five.style.display = 'none';
    }
    }
})
contact.addEventListener('click', function() {
    if(page = 'home' || page == 'about' || page == 'gallery' || page == 'contact' || page == 'other') {
        page = 'contact';
        section = 4;
    contact.style.textDecoration = 'underline';
    about.style.textDecoration = 'none';
    gallery.style.textDecoration = 'none';
    home.style.textDecoration = 'none';
    other.style.textDecoration = 'none';
    }
    if (section = 4) {
        four.style.display = 'flex'; 
        two.style.display = 'none';
        three.style.display = 'none';
        one.style.display = 'none';
        five.style.display = 'none';
    }
})
other.addEventListener('click', function() {
    if(page = 'home' || page == 'about' || page == 'gallery' || page == 'contact' || page == 'other') {
        page = 'other';
        section = 5;
    contact.style.textDecoration = 'none';
    about.style.textDecoration = 'none';
    gallery.style.textDecoration = 'none';
    home.style.textDecoration = 'none';
    other.style.textDecoration = 'underline';
    }
    if (section = 5) {
        four.style.display = 'none'; 
        two.style.display = 'none';
        three.style.display = 'none';
        one.style.display = 'none';
        five.style.display = 'flex';
    }
})