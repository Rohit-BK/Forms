const form = document.getElementById('myForm');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  outputDiv.innerHTML = `
    Name: ${name}<br>
    Email: ${email}
  `;
});

