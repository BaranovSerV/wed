document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    let isAnimated = false; // Флаг, чтобы анимация сработала только один раз

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        if (isAnimated) return; // Если анимация уже сработала, больше не выполнять

        // Проверяем, если хотя бы один круг виден в области просмотра
        if (isElementInViewport(document.querySelector('.circle-dress-code'))) {
            circles.forEach(circle => {
                circle.classList.add('animate'); // Добавляем класс анимации
            });
            isAnimated = true; // Устанавливаем флаг, чтобы остановить дальнейшие проверки
            window.removeEventListener('scroll', handleScroll); // Отключаем обработчик события
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Запуск проверки при загрузке страницы
});
