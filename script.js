// Найти элементы на странице
const slider = document.querySelector('.picture-list');
const carouselDots = document.querySelectorAll('.carousel-dots');

// Найти все слайды, которые лежат внутри списка
const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {
  // Скрыть все слайды кроме первого
  if (index !== 0) slide.classList.add('picture-list__figure_hiden');
  //Добавить индексы для слайда
  slide.dataset.index = index;

  // Клик по слайдам
  slide.addEventListener('click', function () {
    // Скрыть текущий слайд
    carouselDots.forEach(function (element) {
      element.classList.remove('carousel-dots__dot_active');
    })
    slide.classList.add('picture-list__figure_hiden');

    // Рассчитать индес следующего слайда
    let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
    // Находим элемент со следующим слайдом
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // Отображаем следующий слайд
    nextSlide.classList.remove('picture-list__figure_hiden');
  })
});

