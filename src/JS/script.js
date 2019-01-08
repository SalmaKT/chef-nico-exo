window.onscroll = function(){

    // arrière-plan du bg
    if (document.documentElement.scrollTop > 100){
        document.getElementById('nav-1').classList.add('bg-dark');
        document.getElementById('nav-2').classList.add('d-none');
        document.getElementById('nav-3').classList.add('bg-dark');
    } else {
        document.getElementById('nav-1').classList.remove('bg-dark');
        document.getElementById('nav-2').classList.remove('d-none');
        document.getElementById('nav-3').classList.remove('bg-dark');    
    };

    // nav-bar qui deviendra rouge qd on arrivera sur la partie en question
    scrollEventActive(0, 600, 'banner-home');
    scrollEventActive(600, 1200, 'banner-about');
    scrollEventActive(1200, 2100, 'banner-menu');
    scrollEventActive(2100, 2700, 'banner-team');
    scrollEventActive(2700, 3700, 'banner-reservation');
    scrollEventActive(3700, 4600, 'banner-blog');
    scrollEventActive(4600, 5200, 'banner-testimonials');
    scrollEventActive(5200, 7000, 'banner-contact');

};


var scrollEventActive = function(pos1, pos2, id){
    if (document.documentElement.scrollTop >= pos1 && document.documentElement.scrollTop < pos2) {
        document.getElementById(id).classList.add('bg-danger');
    } else {
        document.getElementById(id).classList.remove('bg-danger');
    };
};
