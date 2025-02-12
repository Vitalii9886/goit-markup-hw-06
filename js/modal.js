
(() => {
    const refs = {
        openModalBtns: document.querySelectorAll("[data-modal-open]"),
        closeModalBtns: document.querySelectorAll("[data-modal-close]"),
    };

    // Додаємо обробник подій для кожної кнопки відкриття
    refs.openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal-open"); // Отримуємо ID модального вікна
            const modal = document.querySelector(`[data-modal="${modalId}"]`);
            if (modal) modal.classList.add("is-open");
        });
    });

    // Додаємо обробник подій для кожної кнопки закриття
    refs.closeModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest("[data-modal]"); // Знаходимо батьківське модальне вікно
            if (modal) modal.classList.remove("is-open");
        });
    });

    // Закриття при кліку на бекдроп
    window.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-modal")) {
            event.target.classList.remove("is-open");
        }
    });
})();