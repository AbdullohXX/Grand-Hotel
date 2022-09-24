const a = document.getElementById('menu');
        const b = document.getElementById('navbar');

        a.onclick=function() {
            a.classList.toggle("open");
            b.classList.toggle("open");
        }