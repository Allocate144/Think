// script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');

    loginBox.addEventListener('mousemove', (e) => {
        const rect = loginBox.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        const rotateX = -(y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;

        loginBox.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    loginBox.addEventListener('mouseleave', () => {
        loginBox.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});
