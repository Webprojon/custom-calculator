import { describe, it, expect, beforeEach } from '@jest/globals';
import { FactorialCommand } from '../commands/factorial';
import { CalculatorReceiver } from '../core/receiver';

describe('FactorialCommand', () => {
  let receiver: CalculatorReceiver;
  let factorialCommand: FactorialCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    factorialCommand = new FactorialCommand(receiver);
  });

  it('should calculate factorial of 0', () => {
    receiver.setDisplay('0');
    const result = factorialCommand.execute();
    expect(result).toBe(1);
  });

  it('should calculate factorial of 5', () => {
    receiver.setDisplay('5');
    const result = factorialCommand.execute();
    expect(result).toBe(120);
  });

  it('should throw error for negative numbers', () => {
    receiver.setDisplay('-1');
    expect(() => factorialCommand.execute()).toThrow(
      'Factorial of negative number',
    );
  });

  it('should update display with result', () => {
    receiver.setDisplay('5');
    factorialCommand.execute();
    expect(receiver.getDisplay()).toBe('120');
  });
});
