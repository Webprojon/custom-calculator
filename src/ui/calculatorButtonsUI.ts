import { buttonRows } from '../constant/data';
import { ButtonConfig } from '../types';

export function createButton(btn: ButtonConfig): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = btn.className;
  button.setAttribute('data-action', btn.action);
  button.setAttribute('data-value', btn.value);
  button.setAttribute('aria-label', btn.ariaLabel);
  button.textContent = btn.value;
  return button;
}

export function createButtonRow(buttons: ButtonConfig[]): HTMLDivElement {
  const row = document.createElement('div');
  row.className = 'button-row';

  buttons.forEach((buttonConfig) => {
    const button = createButton(buttonConfig);
    row.appendChild(button);
  });

  return row;
}

export function populateButtonsGrid(): void {
  const grid = document.getElementById('buttons-grid');
  if (!grid) return;

  buttonRows.forEach((row) => {
    const buttonRow = createButtonRow(row.buttons);
    grid.appendChild(buttonRow);
  });
}

export function initializeCalculator(): void {
  populateButtonsGrid();
}

document.addEventListener('DOMContentLoaded', initializeCalculator);
