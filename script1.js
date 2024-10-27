document.getElementById('pumpkin').addEventListener('click', function() {
    const cat = document.getElementById('cat');
    cat.style.display = 'block'; // Показываем кота
    setTimeout(() => {
        cat.style.display = 'none'; // Скрываем кота после исчезновения
        cat.style.opacity = '1'; // Сбрасываем непрозрачность
    }, 3000); // Время исчезновения совпадает с transition
}, 100); // Небольшая задержка перед исчезновением
