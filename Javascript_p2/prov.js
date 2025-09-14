let provs = document.querySelectorAll('.provincia');

provs.forEach(p => {
  let c = p.nextElementSibling;
  p.onclick = () => {
    c.style.display = (c.style.display === 'none') ? 'block' : 'none';
    p.classList.toggle('subrayado');
  };
});