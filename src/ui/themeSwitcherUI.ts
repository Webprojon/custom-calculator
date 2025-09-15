export function createThemeSwitcher(): HTMLLabelElement {
  const label = document.createElement('label');
  label.className = 'theme-switcher';
  label.innerHTML = `
    <input type="checkbox" id="themeCheckbox" />
    <span class="slider"></span>
  `;
  return label;
}

export function loadSavedTheme(): string {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme || 'light';
}

export function setTheme(theme: string): void {
  document.body.setAttribute('data-theme', theme);
}

export function saveTheme(theme: string): void {
  localStorage.setItem('theme', theme);
}

export function setCheckboxState(
  checkbox: HTMLInputElement,
  isDark: boolean,
): void {
  checkbox.checked = isDark;
}

export function switchTheme(checkbox: HTMLInputElement): void {
  const theme = checkbox.checked ? 'dark' : 'light';
  setTheme(theme);
  saveTheme(theme);
}

export function initializeThemeSwitcher(): void {
  const label = createThemeSwitcher();
  document.getElementById('root')?.appendChild(label);

  const checkbox = label.querySelector('input') as HTMLInputElement;
  if (!checkbox) return;

  const savedTheme = loadSavedTheme();
  const isDark = savedTheme === 'dark';

  setCheckboxState(checkbox, isDark);
  setTheme(savedTheme);

  checkbox.addEventListener('change', () => switchTheme(checkbox));
}

document.addEventListener('DOMContentLoaded', initializeThemeSwitcher);
