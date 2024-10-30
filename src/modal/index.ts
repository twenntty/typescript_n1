const modal: HTMLElement = document.getElementById('modal') as HTMLElement;
const modalButton: HTMLElement = document.getElementById('modalButton') as HTMLElement;
const closeModal: HTMLElement = document.getElementById('closeModal') as HTMLElement;

export function initModal(): void {
    modalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event: MouseEvent) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}