 document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('.carousel input');
    let index = 0;

    function changeImage() {
        radios[index].checked = true;
        index = (index + 1) % radios.length;
    }

    setInterval(changeImage, 3000); 
});