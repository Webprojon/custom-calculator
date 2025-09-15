import { describe, it, expect, beforeEach } from '@jest/globals';
import { MultiplyCommand } from '../commands/multiply';
import { CalculatorReceiver } from '../core/receiver';

describe('MultiplyCommand', () => {
  let receiver: CalculatorReceiver;
  let multiplyCommand: MultiplyCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    multiplyCommand = new MultiplyCommand(receiver);
  });

  it('should multiply two numbers', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(3);
    const result = multiplyCommand.execute();
    expect(result).toBe(15);
  });

  it('should multiply by zero', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(0);
    const result = multiplyCommand.execute();
    expect(result).toBe(0);
  });

  it('should update display with result', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(3);
    multiplyCommand.execute();
    expect(receiver.getDisplay()).toBe('15');
  });
});
