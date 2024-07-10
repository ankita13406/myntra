document.addEventListener('DOMContentLoaded', (event) => {
    const ideasList = document.getElementById('ideas-list');
    const ideaForm = document.getElementById('idea-form');
    const ideaInput = document.getElementById('idea-input');

    // Load saved ideas from local storage
    const savedIdeas = JSON.parse(localStorage.getItem('fashionIdeas')) || [];

    // Function to render ideas
    function renderIdeas() {
        ideasList.innerHTML = '';
        savedIdeas.forEach((idea, index) => {
            let li = document.createElement('li');
            li.textContent = idea;

            // Create delete button
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                deleteIdea(index);
            });

            li.appendChild(deleteBtn);
            ideasList.appendChild(li);
        });
    }

    // Function to add a new idea
    function addIdea(event) {
        event.preventDefault();
        let newIdea = ideaInput.value.trim();
        if (newIdea) {
            savedIdeas.push(newIdea);
            localStorage.setItem('fashionIdeas', JSON.stringify(savedIdeas));
            renderIdeas();
            ideaInput.value = '';
        }
    }

    // Function to delete an idea
    function deleteIdea(index) {
        savedIdeas.splice(index, 1);
        localStorage.setItem('fashionIdeas', JSON.stringify(savedIdeas));
        renderIdeas();
    }

    // Add event listener to form
    ideaForm.addEventListener('submit', addIdea);

    // Initial render
    renderIdeas();
});
