import { describe, it, expect, afterEach } from '@jest/globals';
import {
  createThemeSwitcher,
  loadSavedTheme,
  setTheme,
  saveTheme,
  setCheckboxState,
  switchTheme,
} from '../ui/themeSwitcherUI';

// Mock setup
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('Theme Switcher Funtions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Clean localStorage
    mockLocalStorage.getItem.mockClear();
    mockLocalStorage.setItem.mockClear();

    // Clean DOM spys
    jest.restoreAllMocks();
  });

  describe('loadSavedTheme', () => {
    it('should return saved theme from localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue('dark');
      const result = loadSavedTheme();

      expect(result).toBe('dark');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('theme');
    });

    it('should return "light" when no theme is saved', () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      const result = loadSavedTheme();

      expect(result).toBe('light');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('theme');
    });
  });

  describe('saveTheme', () => {
    it('should save theme to localStorage', () => {
      const theme = 'dark';

      saveTheme(theme);

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    });

    it('should save light theme to localStorage', () => {
      const theme = 'light';

      saveTheme(theme);

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });
  });

  describe('setTheme', () => {
    it('should set data-theme attribute on document.body', () => {
      const theme = 'dark';
      const setAttributeSpy = jest.spyOn(document.body, 'setAttribute');

      setTheme(theme);

      expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'dark');
    });

    it('should set light theme attribute on document.body', () => {
      const theme = 'light';
      const setAttributeSpy = jest.spyOn(document.body, 'setAttribute');

      setTheme(theme);

      expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'light');
    });
  });

  describe('setCheckboxState', () => {
    it('should set checkbox checked to true for dark theme', () => {
      const checkbox = document.createElement('input') as HTMLInputElement;
      const isDark = true;

      setCheckboxState(checkbox, isDark);

      expect(checkbox.checked).toBe(true);
    });

    it('should set checkbox checked to false for light theme', () => {
      const checkbox = document.createElement('input') as HTMLInputElement;
      const isDark = false;

      setCheckboxState(checkbox, isDark);

      expect(checkbox.checked).toBe(false);
    });
  });

  describe('createThemeSwitcher', () => {
    it('should create theme switcher label element', () => {
      const label = createThemeSwitcher();

      expect(label).toBeInstanceOf(HTMLLabelElement);
      expect(label.className).toBe('theme-switcher');
      expect(label.innerHTML).toContain('input type="checkbox"');
      expect(label.innerHTML).toContain('span class="slider"');
    });
  });

  describe('switchTheme', () => {
    it('should switch to dark theme when checkbox is checked', () => {
      const checkbox = document.createElement('input') as HTMLInputElement;
      checkbox.checked = true;
      const setAttributeSpy = jest.spyOn(document.body, 'setAttribute');

      switchTheme(checkbox);

      expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'dark');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    });

    it('should switch to light theme when checkbox is unchecked', () => {
      const checkbox = document.createElement('input') as HTMLInputElement;
      checkbox.checked = false;
      const setAttributeSpy = jest.spyOn(document.body, 'setAttribute');

      switchTheme(checkbox);

      expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'light');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });
  });
});
