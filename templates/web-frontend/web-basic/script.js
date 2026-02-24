document.addEventListener('DOMContentLoaded', () => {
    console.log('Template loaded successfully!');
    
    const button = document.getElementById('click-me');
    if (button) {
        button.addEventListener('click', () => {
            alert('Hello from Trae Community Template!');
        });
    }
});
