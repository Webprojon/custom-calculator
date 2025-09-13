import { describe, it, expect, beforeEach } from '@jest/globals';
import { CalculatorInvoker } from '../core/invoker';
import { CalculatorReceiver } from '../core/receiver';

describe('CalculatorInvoker', () => {
  let invoker: CalculatorInvoker;
  let receiver: CalculatorReceiver;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    invoker = new CalculatorInvoker();
  });

  it('should initialize invoker', () => {
    expect(invoker).toBeDefined();
  });

  it('should execute number command', () => {
    invoker.executeCommand('number', '5');
    expect(receiver.getDisplay()).toBe('0');
  });

  it('should execute operator command', () => {
    invoker.executeCommand('operator', '+');
    expect(receiver.getOperator()).toBeNull();
  });

  it('should execute equals command', () => {
    invoker.executeCommand('equals', '=');
    expect(receiver.getDisplay()).toBe('0');
  });

  it('should execute clear command', () => {
    invoker.executeCommand('clear', 'C');
    expect(receiver.getDisplay()).toBe('0');
  });

  it('should handle unknown command', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    invoker.executeCommand('unknown', 'test');
    expect(consoleSpy).toHaveBeenCalledWith('Unknown command: test');
    consoleSpy.mockRestore();
  });
});
