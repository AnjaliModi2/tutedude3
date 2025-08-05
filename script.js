function greetUser() {
  const name = document.getElementById('nameInput').value.trim();
  const greeting = document.getElementById('greeting');
  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = 'Hello';
  }
}

function changeColor(box) {
  const color = box.textContent.toLowerCase();
  box.style.backgroundColor = color;


const darkColors = ['red', 'blue', 'green'];

  if (darkColors.includes(color)) {
    box.style.color = 'white'; // Light text for dark backgrounds
  } else {
    box.style.color = 'black'; // Dark text for light backgrounds (like yellow)
  }
}