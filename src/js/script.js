const btn = document.getElementById('readMoreBtn');
const aboutText = document.getElementById('aboutText');
document.getElementById('year').textContent = new Date().getFullYear();

btn.addEventListener('click', () => {
  const extraLine = document.createElement('span');
  extraLine.classList.add('extra-line');
  extraLine.textContent = "experience efficiency, reliability, and excellence — making every project smoother and hassle-free.";
  aboutText.appendChild(extraLine);

  // Animate
  setTimeout(() => {
    extraLine.classList.add('show');
  }, 50);

  btn.style.display = 'none'; // hide button after click
});
