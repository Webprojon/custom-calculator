import { describe, it, expect, beforeEach } from '@jest/globals';
import { Calculator } from '../core/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should initialize calculator', () => {
    expect(calculator).toBeDefined();
  });

  it('should handle button clicks', () => {
    expect(() => calculator.handleButtonClick('number', '5')).not.toThrow();
  });

  it('should handle clear', () => {
    expect(() => calculator.handleButtonClick('clear', 'C')).not.toThrow();
  });
});
