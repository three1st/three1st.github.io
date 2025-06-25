// ===========================
// 📄 script.js
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });

  const toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const input = document.querySelector('.markdown-input');
  const preview = document.querySelector('.markdown-preview');
  if (input && preview) {
    input.addEventListener('input', () => {
      preview.innerHTML = marked.parse(input.value);
      renderMathInElement(preview, { delimiters: [
        {left: "$", right: "$", display: false},
        {left: "$$", right: "$$", display: true}
      ] });
    });
  }
});

function downloadFile() {
  const blob = new Blob(["Contoh isi file dokumentasi."]);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'dokumentasi.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
