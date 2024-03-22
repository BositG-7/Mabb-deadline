var qoshilish = document.querySelectorAll(".a")

document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var englishLevel = document.getElementById('englishLevel').value;

    alert(`name: ${name} phone:{${phone}} englishLevel: ${englishLevel}`)
});

qoshilish.forEach(item => {
    item.addEventListener('click', () => {
        const element = document.getElementById('myForm');

        if (element) {
          
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
