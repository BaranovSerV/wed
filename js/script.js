document.addEventListener('DOMContentLoaded', function () {
    const section = document.getElementById('dresscode');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        if (isElementInViewport(section)) {
            section.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Запуск функции для проверки на момент загрузки страницы
});

