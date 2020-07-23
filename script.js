document.getElementById("clickForSocial").addEventListener("click", function () {
    const element = document.getElementById('share-social');
    if (element.classList.contains('share')) {
        element.classList.remove('share');
        this.style.color = '#FFF'
        this.style.backgroundColor = 'hsl(214, 17%, 51%)'

    } else {
        element.classList.add('share');
        this.style.color = 'hsl(214, 17%, 51%)';
        this.style.backgroundColor = 'hsl(210, 46%, 95%)'



    }

});