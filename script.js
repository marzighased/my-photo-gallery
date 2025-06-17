const images = document.querySelectorAll('.photo-item img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentImageIndex = 0;

images.forEach(function(img, index) {
    img.addEventListener('click', function() {
        modal.style.display = 'block'; 
        showImage(index);
    });
});

function showImage(index) {
    modalImage.src = images[index].src; 
    currentImageIndex = index;
}

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

nextBtn.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; 
    }
    showImage(currentImageIndex);
});

prevBtn.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; 
    }
    showImage(currentImageIndex);
});

document.addEventListener('keydown', function(e) {

    if (modal.style.display === 'block') {
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault(); 
        }

        if (e.key === 'ArrowRight') {
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            showImage(currentImageIndex);
        }
        
        if (e.key === 'ArrowLeft') {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            showImage(currentImageIndex);
        }
        
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    }
});        