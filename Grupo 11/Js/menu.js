const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', this.window.scrollY >0)
    })

document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let items = document.querySelectorAll('#itemList .item');

    items.forEach(function(item) {
        let text = item.textContent || item.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});