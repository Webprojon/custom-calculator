import { describe, it, expect, beforeEach } from '@jest/globals';
import { SubtractCommand } from '../commands/subtract';
import { CalculatorReceiver } from '../core/receiver';

describe('SubtractCommand', () => {
  let receiver: CalculatorReceiver;
  let subtractCommand: SubtractCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    subtractCommand = new SubtractCommand(receiver);
  });

  it('should subtract two numbers', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(3);
    const result = subtractCommand.execute();
    expect(result).toBe(2);
  });

  it('should subtract negative numbers', () => {
    receiver.setLeftOperand(-5);
    receiver.setRightOperand(-3);
    const result = subtractCommand.execute();
    expect(result).toBe(-2);
  });

  it('should update display with result', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(3);
    subtractCommand.execute();
    expect(receiver.getDisplay()).toBe('2');
  });
});
