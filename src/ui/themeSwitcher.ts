document.addEventListener('DOMContentLoaded', () => {
  const label = document.createElement('label');
  label.className = 'theme-switcher';
  label.innerHTML = `
  <input type="checkbox" id="themeCheckbox" />
  <span class="slider"></span>
`;
  document.querySelector('.app')?.appendChild(label);

  const checkbox = label.querySelector('input') as HTMLInputElement;
  if (!checkbox) return;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    checkbox.checked = true;
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }

  checkbox.addEventListener('change', () => {
    const theme = checkbox.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});
