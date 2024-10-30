const modalButton: HTMLElement = document.getElementById('modalButton') as HTMLElement;

export function initScroll(): void {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // Зміна кольору кнопки на основі позиції прокручування
        if (scrollPos > 100) {
            modalButton.style.backgroundColor = 'blue';
        } else {
            modalButton.style.backgroundColor = 'initial';
        }
    });
}