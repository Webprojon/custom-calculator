import { describe, it, expect, beforeEach } from '@jest/globals';
import { CalculatorReceiver } from '../core/receiver';

describe('CalculatorReceiver', () => {
  let receiver: CalculatorReceiver;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
  });

  describe('Initialization', () => {
    it('should initialize with default state', () => {
      expect(receiver.getDisplay()).toBe('0');
      expect(receiver.getLeftOperand()).toBeNull();
      expect(receiver.getRightOperand()).toBeNull();
      expect(receiver.getOperator()).toBeNull();
      expect(receiver.getMemory()).toBe(0);
      expect(receiver.getIsNewNumber()).toBe(true);
    });
  });

  describe('Display Management', () => {
    it('should set and get display', () => {
      receiver.setDisplay('123');
      expect(receiver.getDisplay()).toBe('123');
    });

    it('should update display', () => {
      receiver.updateDisplay();
      expect(receiver.getDisplay()).toBe('0');
    });
  });

  describe('Operand Management', () => {
    it('should set and get left operand', () => {
      receiver.setLeftOperand(5);
      expect(receiver.getLeftOperand()).toBe(5);
    });

    it('should set and get right operand', () => {
      receiver.setRightOperand(3);
      expect(receiver.getRightOperand()).toBe(3);
    });

    it('should get current number from display', () => {
      receiver.setDisplay('42');
      expect(receiver.getCurrentNumber()).toBe(42);
    });
  });

  describe('Operator Management', () => {
    it('should set and get operator', () => {
      receiver.setOperator('+');
      expect(receiver.getOperator()).toBe('+');
    });

    it('should clear operator', () => {
      receiver.setOperator('+');
      receiver.setOperator(null);
      expect(receiver.getOperator()).toBeNull();
    });
  });

  describe('State Management', () => {
    it('should set and get isNewNumber flag', () => {
      receiver.setIsNewNumber(false);
      expect(receiver.getIsNewNumber()).toBe(false);
    });

    it('should set and get memory', () => {
      receiver.setMemory(100);
      expect(receiver.getMemory()).toBe(100);
    });
  });

  describe('Mathematical Operations', () => {
    it('should calculate addition', () => {
      const result = receiver.add(5, 3);
      expect(result).toBe(8);
    });

    it('should calculate subtraction', () => {
      const result = receiver.subtract(10, 4);
      expect(result).toBe(6);
    });

    it('should calculate multiplication', () => {
      const result = receiver.multiply(6, 7);
      expect(result).toBe(42);
    });

    it('should calculate division', () => {
      const result = receiver.divide(15, 3);
      expect(result).toBe(5);
    });

    it('should calculate power', () => {
      const result = receiver.power(2, 3);
      expect(result).toBe(8);
    });

    it('should calculate square root', () => {
      const result = receiver.squareRoot(9);
      expect(result).toBe(3);
    });

    it('should calculate factorial', () => {
      const result = receiver.factorial(5);
      expect(result).toBe(120);
    });
  });

  describe('Error Handling', () => {
    it('should throw error for division by zero', () => {
      expect(() => receiver.divide(5, 0)).toThrow('Division by zero');
    });

    it('should throw error for square root of negative', () => {
      expect(() => receiver.squareRoot(-4)).toThrow(
        'Square root of negative number',
      );
    });

    it('should throw error for factorial of negative', () => {
      expect(() => receiver.factorial(-1)).toThrow(
        'Factorial of negative number',
      );
    });

    it('should throw error for logarithm of non-positive', () => {
      expect(() => receiver.ln(-1)).toThrow('Logarithm of non-positive number');
    });
  });

  describe('Memory Operations', () => {
    it('should set and get memory', () => {
      receiver.setMemory(50);
      expect(receiver.getMemory()).toBe(50);
    });

    it('should clear memory by setting to 0', () => {
      receiver.setMemory(100);
      receiver.setMemory(0);
      expect(receiver.getMemory()).toBe(0);
    });
  });

  describe('Error State Management', () => {
    it('should handle error and reset state', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      receiver.handleError({
        message: 'Test error',
        type: 'INVALID_OPERATION',
      });
      expect(consoleSpy).toHaveBeenCalledWith(
        'Calculator Error [INVALID_OPERATION]: Test error',
      );
      expect(receiver.getDisplay()).toBe('Error');
      expect(receiver.getIsNewNumber()).toBe(true);
      consoleSpy.mockRestore();
    });
  });
});
