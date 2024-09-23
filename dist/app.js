"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');
const closeModal = document.getElementById('closeModal');
modalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 100) {
        modalButton.style.backgroundColor = 'blue';
    }
    else {
        modalButton.style.backgroundColor = 'initial';
    }
});
const dataContainer = document.getElementById('dataContainer');
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
            const data = yield response.json();
            displayData(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
function displayData(data) {
    const html = data.slice(0, 5).map((post) => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
    dataContainer.innerHTML = html;
}
fetchData();
