
const modal: HTMLElement = document.getElementById('modal') as HTMLElement;
const modalButton: HTMLElement = document.getElementById('modalButton') as HTMLElement;
const closeModal: HTMLElement = document.getElementById('closeModal') as HTMLElement;

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

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 100) {
        modalButton.style.backgroundColor = 'blue';
    } else {
        modalButton.style.backgroundColor = 'initial';
    }
});

const dataContainer: HTMLElement = document.getElementById('dataContainer') as HTMLElement;

async function fetchData(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data: any[]): void {
    const html: string = data.slice(0, 5).map((post: any) => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
    dataContainer.innerHTML = html;
}

fetchData();
