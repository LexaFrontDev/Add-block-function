document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.querySelector('.Add-block');
    const btnAdd = document.querySelector('.add-btn');

    // Функция добавления блока
    btnAdd.addEventListener('click', function() {
        const inputValue = textInput.value;

        const newDiv = document.createElement('div');
        const newHeader = document.createElement('h1');
        const newSpan = document.createElement('span');

        newDiv.classList.add('block');
        newDiv.appendChild(newHeader);
        newDiv.appendChild(newSpan);

        newHeader.textContent = inputValue;
        newHeader.classList.add('block-header');

        newSpan.textContent = 'Х';
        newSpan.classList.add('close-block');

        document.body.appendChild(newDiv);

        
        textInput.value = '';
    });



    //Функция удаление блока
    function deleteTask(event) {
        const target = event.target;
        if (target.classList.contains('close-block')) {
            const parentNode = target.closest('.block');
            if (parentNode) {
                parentNode.remove();
            }
        }
    }
    
    document.body.addEventListener('click', deleteTask);
});
