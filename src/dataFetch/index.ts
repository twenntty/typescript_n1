import { Post } from '../types';

const dataContainer: HTMLElement = document.getElementById('dataContainer') as HTMLElement;

export async function fetchData(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data: Post[]): void {
    const html: string = data.slice(0, 5).map((post) => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
    dataContainer.innerHTML = html;
}