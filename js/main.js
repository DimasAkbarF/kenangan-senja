// Mendapatkan elemen navbarNav dan hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active"); // Menambahkan atau menghapus kelas 'active'
};


// KLIK LUAR
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})