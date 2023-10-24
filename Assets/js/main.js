document.addEventListener('DOMContentLoaded', function() {
    const carouselContainers = document.querySelectorAll('.qnt_players, .qnt_rounds');

    carouselContainers.forEach(container => {
        const carousel = container.querySelector('.carousel');
        let currentIndex = 0;

        function createCarouselItems() {
            carousel.innerHTML = '';
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            item.textContent = currentIndex;
            carousel.appendChild(item);
        }

        function showSlide() {
            const items = carousel.querySelectorAll('.carousel-item');
            items.forEach(item => item.classList.remove('active'));
            items[0].classList.add('active');
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            }
            createCarouselItems();
            showSlide();
        }

        function nextSlide() {
            currentIndex++;
            createCarouselItems();
            showSlide();
        }

        createCarouselItems();
        showSlide();

        container.querySelector('.btn_back').addEventListener('click', prevSlide);
        container.querySelector('.btn_next').addEventListener('click', nextSlide);
    });
});
