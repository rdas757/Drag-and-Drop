window.addEventListener('DOMContentLoaded', (event) => {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  const resetButton = document.getElementById('resetButton');

  let draggedItem = null;

  // Add event listeners for drag events
  container1.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
    event.target.classList.add('dragging');
  });

  container1.addEventListener('dragend', (event) => {
    event.target.classList.remove('dragging');
  });

  container2.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  container2.addEventListener('drop', (event) => {
    event.preventDefault();
    container2.appendChild(draggedItem);
    draggedItem = null;
    showSuccessMessage();
  });

  resetButton.addEventListener('click', () => {
    container2.innerHTML = '';
    container1.innerHTML = `
      <div class="item" draggable="true">Laptop</div>
      <div class="item" draggable="true">Ipad</div>
      <div class="item" draggable="true">Iphone</div>
    `;
  });

  function showSuccessMessage() {
    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Item dropped successfully!';
    container2.appendChild(successMessage);
  }
});
