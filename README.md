# Theme Switcher Implementation Guide

This guide will walk you through implementing a complete theme switcher for your calculator application. Follow each step carefully and in order.

## Overview

We'll create a theme switcher that toggles between Light and Dark themes using CSS custom properties (variables) and JavaScript.

## Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Your project should already have the theme switcher HTML structure (which you do)

---

## Step 1: Update CSS Variables for Light Theme

**File to edit:** `src/css/base.css`

**What to do:** Add light theme variables to the existing `:root` selector.

**Current code (lines 1-31):**

```css
:root {
  /* Colors */
  --color-bg: #ffffff;
  --color-text: #19202c;

  /* Background Colors */
  --bg-gradient-start: #1a1a1a;
  --bg-gradient-end: #2d2d2d;
  --bg-calculator: #2a2a2a;
  --bg-display: #48494a;
  --bg-button-function: #5a5b5c;
  --bg-button-function-hover: #696868;
  --bg-button-number: #757677;
  --bg-button-number-hover: #989898;
  --bg-button-operator: #ff9500;
  --bg-button-operator-hover: #f1a23b;
  --bg-button-hover: #5a5a5a;
  --bg-theme-slider: #48494a;

  /* Window Control Colors */
  --color-window-close: #ff5f56;
  --color-window-minimize: #ffbd2e;
  --color-window-maximize: #27c93f;

  /* Border and Overlay Colors */
  --border-calculator: rgba(255, 255, 255, 0.1);
  --overlay-button: rgba(255, 255, 255, 0.2);

  /* Shadows */
  --shadow-calculator: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

**Replace with:**

```css
:root {
  /* Light Theme Colors */
  --color-bg: #ffffff;
  --color-text: #19202c;

  /* Light Theme Background Colors */
  --bg-gradient-start: #f0f0f0;
  --bg-gradient-end: #e0e0e0;
  --bg-calculator: #ffffff;
  --bg-display: #f8f9fa;
  --bg-button-function: #e9ecef;
  --bg-button-function-hover: #dee2e6;
  --bg-button-number: #f8f9fa;
  --bg-button-number-hover: #e9ecef;
  --bg-button-operator: #ff9500;
  --bg-button-operator-hover: #f1a23b;
  --bg-button-hover: #e9ecef;
  --bg-theme-slider: #e9ecef;

  /* Window Control Colors */
  --color-window-close: #ff5f56;
  --color-window-minimize: #ffbd2e;
  --color-window-maximize: #27c93f;

  /* Light Theme Border and Overlay Colors */
  --border-calculator: rgba(0, 0, 0, 0.1);
  --overlay-button: rgba(0, 0, 0, 0.1);

  /* Light Theme Shadows */
  --shadow-calculator: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Dark Theme */
[data-theme='dark'] {
  /* Dark Theme Colors */
  --color-bg: #ffffff;
  --color-text: #19202c;

  /* Dark Theme Background Colors */
  --bg-gradient-start: #1a1a1a;
  --bg-gradient-end: #2d2d2d;
  --bg-calculator: #2a2a2a;
  --bg-display: #48494a;
  --bg-button-function: #5a5b5c;
  --bg-button-function-hover: #696868;
  --bg-button-number: #757677;
  --bg-button-number-hover: #989898;
  --bg-button-operator: #ff9500;
  --bg-button-operator-hover: #f1a23b;
  --bg-button-hover: #5a5a5a;
  --bg-theme-slider: #48494a;

  /* Dark Theme Border and Overlay Colors */
  --border-calculator: rgba(255, 255, 255, 0.1);
  --overlay-button: rgba(255, 255, 255, 0.2);

  /* Dark Theme Shadows */
  --shadow-calculator: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

---

## Step 2: Update Theme Switcher CSS

**File to edit:** `src/css/components/theme-switcher.css`

**What to do:** Update the theme switcher styles to work with both themes.

**Current code (lines 1-60):**

```css
.theme-switcher {
  font-size: 17px;
  position: absolute;
  top: 50px;
  right: 100px;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.theme-switcher input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;
  border-radius: 30px;
  background: var(--bg-theme-slider);
}

.slider:before {
  position: absolute;
  content: '';
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px var(--color-bg);
  transition: 0.5s;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px var(--color-bg);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .theme-switcher {
    top: 10px;
    right: 10px;
  }
}

@media (max-width: 900px) {
  .theme-switcher {
    width: 3.3em;
    height: 2em;
  }
}
```

**Replace with:**

```css
.theme-switcher {
  font-size: 17px;
  position: absolute;
  top: 50px;
  right: 100px;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  z-index: 1000;
}

.theme-switcher input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;
  border-radius: 30px;
  background: var(--bg-theme-slider);
  border: 2px solid var(--border-calculator);
}

.slider:before {
  position: absolute;
  content: '';
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  background: var(--color-bg);
  transition: 0.5s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Dark mode (when checked) */
input:checked + .slider:before {
  transform: translateX(100%);
  background: #ffd700;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Add sun and moon icons */
.slider:after {
  position: absolute;
  content: '☀️';
  font-size: 0.8em;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;
  opacity: 1;
}

input:checked + .slider:after {
  content: '🌙';
  left: 65%;
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .theme-switcher {
    top: 10px;
    right: 10px;
  }
}

@media (max-width: 900px) {
  .theme-switcher {
    width: 3.3em;
    height: 2em;
  }
}
```

---

## Step 3: Create Theme Manager TypeScript File

**File to create:** `src/ui/themeManager.ts`

**What to do:** Create a new file for theme management functionality.

**Create this file with the following content:**

```typescript
export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: 'light' | 'dark' = 'light';
  private themeToggle: HTMLInputElement | null = null;

  private constructor() {
    this.initializeTheme();
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  private initializeTheme(): void {
    // Get saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem('calculator-theme') as
      | 'light'
      | 'dark'
      | null;
    this.currentTheme = savedTheme || 'light';

    // Apply the theme
    this.applyTheme(this.currentTheme);

    // Set up the toggle
    this.setupThemeToggle();
  }

  private setupThemeToggle(): void {
    this.themeToggle = document.querySelector(
      '.theme-switcher input',
    ) as HTMLInputElement;

    if (this.themeToggle) {
      // Set initial state
      this.themeToggle.checked = this.currentTheme === 'dark';

      // Add event listener
      this.themeToggle.addEventListener('change', () => {
        this.toggleTheme();
      });
    }
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const body = document.body;

    if (theme === 'dark') {
      body.setAttribute('data-theme', 'dark');
    } else {
      body.removeAttribute('data-theme');
    }

    this.currentTheme = theme;

    // Save to localStorage
    localStorage.setItem('calculator-theme', theme);
  }

  public toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  public getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}
```

---

## Step 4: Update Main TypeScript File

**File to edit:** `src/index.ts`

**What to do:** Import and initialize the theme manager.

**Current code:**

```typescript
// Import CSS files
import './css/main.css';

// Import calculator modules
import './core/calculator';
import './ui/domHandler';
```

**Replace with:**

```typescript
// Import CSS files
import './css/main.css';

// Import calculator modules
import './core/calculator';
import './ui/domHandler';
import './ui/themeManager';

// Initialize theme manager
import { ThemeManager } from './ui/themeManager';
ThemeManager.getInstance();
```

---

## Step 5: Update Calculator CSS for Better Theme Support

**File to edit:** `src/css/components/calculator.css`

**What to do:** Update the display text color to work with both themes.

**Find this section (around line 52-61):**

```css
.display-text {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-bg);
  word-break: break-all;
  line-height: 1;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

**Replace with:**

```css
.display-text {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-text);
  word-break: break-all;
  line-height: 1;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## Step 6: Test the Theme Switcher

**What to do:** Test your theme switcher functionality.

1. **Open your project in a web browser**
2. **Click the theme switcher toggle** (the switch in the top-right corner)
3. **Verify that:**
   - The background changes from light to dark
   - The calculator colors change appropriately
   - The toggle switch moves and shows the correct icon
   - The theme persists when you refresh the page

---

## Step 7: Build and Deploy (Optional)

**What to do:** Build your project to make sure everything works.

**Run these commands in your terminal:**

```bash
npm run build
```

**Then test the built version:**

```bash
# Serve the dist folder (if you have a local server)
# Or open dist/index.html in your browser
```

---

## Troubleshooting

### If the theme switcher doesn't work:

1. **Check browser console for errors:**
   - Open Developer Tools (F12)
   - Look for any JavaScript errors
   - Fix any import or syntax errors

2. **Verify file paths:**
   - Make sure all file paths in imports are correct
   - Check that all files exist in the right locations

3. **Check CSS variables:**
   - Make sure the `data-theme="dark"` attribute is being added to the body
   - Verify that CSS variables are defined correctly

4. **Test localStorage:**
   - Open Developer Tools → Application → Local Storage
   - Check if `calculator-theme` is being saved

### If styles don't change:

1. **Check CSS specificity:**
   - Make sure the `[data-theme="dark"]` selector has higher specificity
   - Verify that variables are being overridden correctly

2. **Clear browser cache:**
   - Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)

---

## Summary

You've now implemented a complete theme switcher that:

✅ Toggles between light and dark themes
✅ Saves the user's preference in localStorage
✅ Persists the theme across page refreshes
✅ Has smooth transitions and visual feedback
✅ Is responsive and works on all screen sizes
✅ Uses modern CSS custom properties for maintainable theming

The theme switcher will automatically initialize when the page loads and remember the user's last selected theme.
