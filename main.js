document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен успешно!');
});

// Функция обновления содержимого карточек (если потребуется)
function updateProductCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Изменяем содержимое каждой карточки индивидуально
        const title = card.querySelector('.card-title');
        const description = card.querySelector('.card-text');
        const price = card.querySelector('strong');
        
        // Примеры изменения элементов
        title.textContent = 'Обновленное Название Товара';
        description.textContent = 'Новое подробное описание товара.';
        price.textContent = '$200'; // Новая цена
    });
}

updateProductCards(); // Выполняем обновление сразу после загрузки страницы