// Import CSS files
import './css/main.css';

// Import JS files
import { Calculator } from './core/calculator';
import './ui/themeSwitcherUI';
import './ui/calculatorButtonsUI';

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});
