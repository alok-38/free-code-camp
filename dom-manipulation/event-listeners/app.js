document.addEventListener('DOMContentLoaded', () => {
    const mainHeading = document.getElementById('main-heading');
    const btn1 = document.querySelector('.btn-1');
    const btn2 = document.querySelector('.btn-2');
    const btn3 = document.querySelector('.btn-3');
    const boxOneElement = document.querySelector('.box-1');
   // Selecting the box two element
    const boxTwoElement = document.querySelector('.box-2');

    // Selecting the heading element within box two
    const headingBox2Element = document.querySelector('.box-2 #heading');

    // Event listener for button 1
    btn1.addEventListener('click', () => {
        mainHeading.textContent = "Button 1 clicked!";
        const newElement = document.createElement('p');
        newElement.textContent = 'This is a new paragraph.';
        newElement.style.marginTop = '15px';
        // Append the new element to the body
        boxOneElement.appendChild(newElement);
    });

    // Adding event listener for button 2
    btn2.addEventListener('click', () => {
        mainHeading.textContent = "Button 2 clicked!";
        boxTwoElement.style.backgroundColor = 'rebeccapurple';
        headingBox2Element.style.color = '#ffffff';
    });

    // Event listener for button 3
    btn3.addEventListener('click', () => {
        mainHeading.textContent = "Button 3 clicked!";
        boxTwoElement.style.backgroundColor = 'orange';
        headingBox2Element.style.color = '#4a4848';
    });

});
