const images = document.querySelectorAll('.photo-item img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');

images.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = 'block'; 
        modalImage.src = this.src; 
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});